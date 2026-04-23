import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Profile = ({ user,requests }) => {
  // لو مفيش يوزر مسجل (حالة حماية الصفحة)
  if (!user) {
    return (
      <div className="text-center p-20 text-slate-500">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      {/* 1. كارت البيانات الأساسية */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex items-center gap-8 mb-10">
        <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-4xl font-bold text-slate-900">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
          <p className="text-slate-500">{user.email || "user@gmail.com"}</p>
          <span className="inline-block mt-2 px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
            {user.role}
          </span>
        </div>
      </div>

      {/* 2. الجزء المتغير بناءً على الـ Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* لو اليوزر Reader */}
        {user.role === 'Reader' && (
          <>
            <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">Borrowed Books</h3>
              <p className="text-slate-400">You currently have {requests.length} books.</p>
             <Link 
  to="/my-requests" 
  className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-xl text-sm font-black transition-all duration-300 hover:bg-amber-400 hover:scale-105 shadow-lg shadow-amber-500/30 text-center mt-2"
>
  View History
</Link>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-xl text-slate-900 mb-2">My Requests</h3>
              <p className="text-slate-500">1 Pending approval from owner.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;