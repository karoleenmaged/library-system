import React from 'react';

const MyRequests = ({ requests,onCancel }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Borrow Requests</h1>
        <p className="text-slate-500 mt-1">Track the status of the books you've requested</p>
      </div>

      {requests.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <div className="text-5xl mb-4">📖</div>
          <p className="text-slate-400 text-lg">You haven't requested any books yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5">
                <img 
                  src={req.coverImage} 
                  alt={req.title} 
                  className="w-16 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{req.title}</h3>
                  <p className="text-slate-500 text-sm">Author: {req.author}</p>
                  <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-wider font-semibold">
                    Requested on: {req.requestDate}
                  </p>
                </div>
              </div>

              {/* حالة الطلب */}
              <div className="flex flex-col items-end gap-2">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                  req.requestStatus === 'Pending' 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'bg-green-100 text-green-700'
                }`}>
                  {req.requestStatus}
                </span>
                {/* زرار الـ Cancel */}
                <button 
                  onClick={() => {
                    if(window.confirm("Are you sure you want to cancel this request?")) {
                      onCancel(req.id);
                    }
                  }}
                  className="text-red-500 hover:text-red-700 text-xs font-bold transition-colors border border-red-100 hover:border-red-500 px-3 py-1.5 rounded-lg"
                >
                  Cancel Request
                </button>
                <span className="text-slate-900 font-bold text-sm">{req.borrowPrice} EGP</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;