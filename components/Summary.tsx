
import React from 'react';

const Summary: React.FC = () => {
  const skills = [
    'Excel & Pivot Tables', 'Google Apps Script', 'Automation Workflows', 
    'ERP Learning Aptitude', 'Data Entry', 'Webhook Integration', 
    'Node.js', 'Accounts Payable', 'Customer Service'
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Professional Summary</h2>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
            Bridging Customer Excellence with Financial Accuracy.
          </h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            Customer Service professional with hands-on automation experience and foundational accounting knowledge. 
            I build tools and workflows that reduce manual work, improve data accuracy, and make operational reporting reliable. 
            Ready to transition into Accounts Payable with strong Excel and ERP learning aptitude.
          </p>
          <div className="space-y-3">
             <div className="flex items-center gap-3 text-sm text-slate-500">
               <span className="font-semibold text-blue-600">Location:</span> Davao City, Philippines
             </div>
             <div className="flex items-center gap-3 text-sm text-slate-500">
               <span className="font-semibold text-blue-600">Email:</span> jcruspero3263@gmail.com
             </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
          <h3 className="text-slate-900 font-bold mb-4">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span 
                key={skill} 
                className="bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
