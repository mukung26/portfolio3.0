
import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-6">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-900">Bachelor of Information Technology</h3>
            <p className="text-sm text-slate-500 font-medium">St. John Paul II College of Davao • 2020 – 2023</p>
            <p className="text-slate-600 text-sm mt-2">Comprehensive IT education focusing on software development and systems analysis.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-6">Certifications</h2>
        <div className="space-y-4">
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl">🏆</div>
             <div>
               <h4 className="font-bold text-slate-900 text-sm">Microsoft 365 Developer</h4>
               <p className="text-xs text-slate-400">Fundamentals Level • 2024</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl">📍</div>
             <div>
               <h4 className="font-bold text-slate-900 text-sm">WordCamp Davao</h4>
               <p className="text-xs text-slate-400">Community Participant • 2023</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
