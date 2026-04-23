import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Please enter your details to login</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="Enter Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex items-center gap-4 py-2">
  <span className="text-sm font-semibold text-slate-600">Login as:</span>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="role" value="Reader" defaultChecked className="accent-amber-500" />
    <span className="text-sm text-slate-700">Reader</span>
  </label>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="role" value="Admin" className="accent-amber-500" />
    <span className="text-sm text-slate-700">Admin</span>
  </label>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="role" value="Owner" className="accent-amber-500" />
    <span className="text-sm text-slate-700">Owner</span>
  </label>
</div>
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-xl shadow-lg shadow-amber-500/30 transition-all transform hover:scale-[1.02]">
            Login
          </button>
        </form>

        {/* Footer */}
        <div className='space-x-2 flex items-center justify-center mt-8'>
        <p className="text-center text-slate-600 text-sm">
          Don't have an account? 
           </p>
          <Link to="/signup" className="text-amber-600 font-bold hover:underline text-sm">Sign Up Free</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;