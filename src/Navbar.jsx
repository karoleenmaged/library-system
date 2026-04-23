import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = ({ user,onLogout }) => {
  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-slate-900 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
  <span>📚</span>
  <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">BookBorrow</span>
</Link>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 list-none font-medium">
        <li>
          <NavLink 
      to="/" 
      className={({ isActive }) => 
        isActive 
          ? "text-amber-500 font-bold border-b-2 border-amber-500 pb-1" 
          : "text-slate-300 hover:text-white transition-all"
      }
    >
      Home
    </NavLink>
        </li>
        <li>
          <NavLink 
      to="/browse" 
      className={({ isActive }) => 
        isActive 
          ? "text-amber-500 font-bold border-b-2 border-amber-500 pb-1" 
          : "text-slate-300 hover:text-white transition-all"
      }
    >
      Browse Books
    </NavLink>
        </li>
        {/* 1. روابط تظهر فقط للقارئ */}
  {user?.role === 'Reader' && (
  <li>
    <NavLink 
      to="/my-requests" 
      className={({ isActive }) => 
        isActive 
          ? "text-amber-500 font-bold border-b-2 border-amber-500 pb-1 transition-all" 
          : "text-slate-300 hover:text-white transition-all text-sm font-medium"
      }
    >
      My Requests
    </NavLink>
  </li>
)}

{/* 2. روابط تظهر فقط لصاحب الكتاب */}
{user?.role === 'Owner' && (
  <li>
    <NavLink 
      to="/manage-books" 
      className={({ isActive }) => 
        isActive 
          ? "text-amber-500 font-bold border-b-2 border-amber-500 pb-1 transition-all" 
          : "text-slate-300 hover:text-white transition-all text-sm font-medium"
      }
    >
      Manage My Books
    </NavLink>
  </li>
)}

{/* 3. روابط تظهر فقط للأدمن */}
{user?.role === 'Admin' && (
  <li>
    <NavLink 
      to="/admin-dashboard" 
      className={({ isActive }) => 
        isActive 
          ? "text-amber-500 font-bold border-b-2 border-amber-500 pb-1 transition-all" 
          : "text-slate-300 hover:text-white transition-all text-sm font-medium"
      }
    >
      Admin Panel
    </NavLink>
  </li>
)}
      </ul>

      {/* User Actions Section */}
      <div className="flex items-center gap-6">
        {user ? (
          <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
            <div className="flex items-center text-right gap-3">
                <div className="flex flex-col text-right">
              <span className="text-xs text-slate-400">Welcome back,</span>
              <span className="text-sm font-bold text-amber-400">{user.name}</span>
        </div>
        <button onClick={onLogout} className="mt-1 px-3 py-1 text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/50 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200">
          Logout
        </button>
            </div>
            {/* Circle Placeholder for User Avatar */}
           <NavLink 
  to="/profile" 
  className={({ isActive }) => 
    `w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
      isActive 
        ? "bg-amber-500 ring-4 ring-amber-500/30 scale-110" 
        : "bg-slate-700 text-white"
    }`
  }
>
  {user.name.charAt(0).toUpperCase()}
</NavLink>
          </div>
        ) : (
            <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
          <Link to="/login" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20">
            Login
          </Link>
          <Link to="/signup" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2 rounded-full text-sm font-extrabold transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20">
        Sign Up Free
      </Link>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;