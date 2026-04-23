import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
          <p className="text-slate-500 mt-2">Join our library community today</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="Enter Your Email"
            />
          </div>
<div className="relative">
    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-amber-500 appearance-none bg-slate-50 cursor-pointer text-slate-700 font-medium">
      <option value="Reader">Reader</option>
      <option value="Admin">Admin</option>
      <option value="Owner">Owner</option>
    </select>
    {/* سهم صغير للـ Select */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
  </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="Enter Strong Password"
            />
          </div>

          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className='space-x-2 flex items-center justify-center mt-8'>
                <p className="text-center text-slate-600 text-sm">
                  Already have an account? 
                   </p>
                  <Link to="/login" className="text-amber-600 font-bold hover:underline text-sm">Login here</Link>
                </div>
      </div>
    </div>
  );
};

export default SignUp;