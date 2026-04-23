import {Component, React, useState,useEffect,createContext,useReducer, useCallback, useRef} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { jsx } from "react/jsx-runtime";
import {MOCK_BOOKS} from "./mockData.js";
import {MOCK_USER} from "./mockData.js";
import Navbar from './Navbar.jsx';
import Login from './pages/Login';
import SignUp from "./pages/SignUp.jsx";
import Profile from './pages/Profile';
import Home from './pages/Home';
import BrowseBooks from "./pages/BrowseBooks.jsx";
import MyRequests from './pages/MyRequests';
// import { Navigate } from 'react-router-dom';
const App=()=>{
  // console.log(MOCK_BOOKS)
  const [user, setUser] = useState({name:'sara',role:'Reader'}); // الحالة الابتدائية مفيش يوزر
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('requests');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('requests', JSON.stringify(requests));
  }, [requests]);
  const addRequest = (book) => {
  const isAlreadyRequested = requests.some(req => req.id === book.id);
  
  if (isAlreadyRequested) {
    alert(`You have already requested "${book.title}"!`);
    return false; // بنقول للـ BrowseBooks إن العملية فشلت
  }

  const newRequest = {
    ...book,
    requestDate: new Date().toLocaleDateString(),
    requestStatus: "Pending"
  };

  setRequests([...requests, newRequest]);
  return true; // بنقول للـ BrowseBooks إن العملية نجحت
};
const cancelRequest = (bookId) => {
  // بنعمل Filter ونشيل الكتاب اللي الـ id بتاعه مطابق
  const updatedRequests = requests.filter(req => req.id !== bookId);
  
  // بنحدث الـ State
  setRequests(updatedRequests);
  
  // ملحوظة: الـ useEffect اللي إنتِ عملتيه هيحدث الـ localStorage أوتوماتيكياً
  alert("Request has been cancelled successfully.");
};
const handleLogout = (e) => {
  if (e) e.preventDefault(); // ده السطر السحري اللي بيمنع الصفحة تحمل من جديد
  setUser(null);
  localStorage.removeItem('user');
  // لو عايزة توديه للهوم بدون ريلود:
  // navigate("/"); 
};
  return(
   <Router>
      <div className="min-h-screen bg-slate-50">
        {/* الناف بار هيفضل ثابت في كل الصفحات لأنه بره الـ Routes */}
        <Navbar user={user} onLogout={handleLogout} /> 

        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
          
          {/* صفحة اللوجن */}
          <Route path="/login" element={<Login />} />
          
          {/* صفحه الساين اب */}
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/browse" element={<BrowseBooks user={user} onAddRequest={addRequest} requests={requests} />} />
         <Route path="/profile" element={<Profile user={user} requests={requests} />} />
         <Route path="/my-requests" element={<MyRequests requests={requests} onCancel={cancelRequest} />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App