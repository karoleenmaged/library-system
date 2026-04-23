import {Component, React, useState,useEffect,createContext,useReducer, useCallback, useRef} from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';
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
  
  //اللوكال استورج هتتحدث تلقائي
  alert("Request has been cancelled successfully.");
};
// const navigate=useNavigate();
const handleLogout = (e) => {
  if (e) e.preventDefault(); //بيمنع الصفحه تحمل من جديد
  setUser(null);
  localStorage.removeItem('user');
  window.location.href = "/"; //بيروح للهوم
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
          <Route path="/" element={<Home user={user} />} />
          
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