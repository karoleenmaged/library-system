import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BOOKS } from '../mockData';

const BrowseBooks = ({ user, onAddRequest, requests }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRequest = (book) => {
    if (!user) {
      alert("Please login first to request a book!");
      navigate("/login");
      return;
    }

    // بننادي الفنكشن اللي في App.jsx وبنشوف النتيجة
    const success = onAddRequest(book);

    if (success) {
      alert(`Success! "${book.title}" has been added to your requests.`);
    }
  };

  // الفلترة بناءً على العنوان أو المؤلف
  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Explore Library</h1>
          <p className="text-slate-500 text-sm mt-1">Find the book you need for your next project</p>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by title or author..." 
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-80 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBooks.map(book => {
          // فحص هل الكتاب موجود في قائمة الطلبات الحالية؟
          const isRequested = requests?.some(req => req.id === book.id);

          return (
            <div key={book.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Book Image Container */}
              <div className="h-72 bg-slate-200 overflow-hidden relative">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x450?text=Cover+Not+Found'; }}
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-slate-900 shadow-sm">
                  {book.borrowPrice} EGP
                </div>
              </div>

              {/* Book Info */}
              <div className="p-5 flex-grow flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-1">
                  {book.genre}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-slate-500 text-xs mb-4 italic">by {book.author}</p>
                
                <div className="mt-auto flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap ${
                    book.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {book.status}
                  </span>
                  
                  <button 
                    onClick={() => !isRequested && handleRequest(book)}
                    disabled={book.status === 'Borrowed' || isRequested}
                    className={`text-xs font-bold py-2 px-3 rounded-lg transition-all flex-grow ${
                      book.status === 'Borrowed'
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : isRequested
                        ? 'bg-green-100 text-green-600 cursor-default'
                        : !user 
                          ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                          : 'bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900'
                    }`}
                  >
                    {book.status === 'Borrowed' 
                      ? 'Unavailable' 
                      : isRequested 
                        ? '✓ Requested' 
                        : user 
                          ? 'Request' 
                          : 'Login to Request'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg italic">No books found matching your search. 📚</p>
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;