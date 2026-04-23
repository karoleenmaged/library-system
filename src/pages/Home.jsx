import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      {/* 1. Hero Section - الجزء الترحيبي */}
      <section className="w-full bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Read More, <span className="text-amber-500">Spend Less</span> 📚
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          أهلاً بك في منصتنا لتبادل الكتب. هنا يمكنك استعارة كتبك المفضلة أو مشاركة مكتبتك الخاصة مع الآخرين بكل سهولة.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate('/browse')}
            className="bg-amber-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            Explore Library
          </button>
          <button 
             onClick={() => navigate('/signup')}
             className="bg-transparent border border-slate-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-800 transition-all"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* 2. Stats Section - أرقام عن الموقع */}
      <section className="flex flex-wrap justify-center gap-8 md:gap-16 -mt-12 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 max-w-4xl w-[90%]">
        <div className="text-center">
          <p className="text-4xl font-bold text-slate-900">500+</p>
          <p className="text-slate-500 font-medium mt-1">Available Books</p>
        </div>
        <div className="hidden md:block w-px h-16 bg-slate-100"></div>
        <div className="text-center">
          <p className="text-4xl font-bold text-slate-900">200+</p>
          <p className="text-slate-500 font-medium mt-1">Active Readers</p>
        </div>
        <div className="hidden md:block w-px h-16 bg-slate-100"></div>
        <div className="text-center">
          <p className="text-4xl font-bold text-slate-900">150+</p>
          <p className="text-slate-500 font-medium mt-1">Total Borrows</p>
        </div>
      </section>

      {/* 3. Brief Features - نبذة سريعة */}
      <section className="py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        <div className="text-center p-6">
          <div className="text-4xl mb-4 text-amber-500">🔍</div>
          <h3 className="text-xl font-bold mb-2">Search & Find</h3>
          <p className="text-slate-500">ابحث عن كتبك الدراسية أو رواياتك المفضلة في ثوانٍ.</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4 text-amber-500">🤝</div>
          <h3 className="text-xl font-bold mb-2">Easy Exchange</h3>
          <p className="text-slate-500">تواصل مع أصحاب الكتب وقم بعمل طلب استعارة بضغطة زرار.</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4 text-amber-500">⭐</div>
          <h3 className="text-xl font-bold mb-2">Rate & Review</h3>
          <p className="text-slate-500">شارك رأيك في الكتب التي قرأتها وساعد القراء الآخرين.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;