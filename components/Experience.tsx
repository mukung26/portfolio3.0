
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Six Eleven Global Services',
      period: '03/2024 – 01/2026',
      role: 'Customer Service Representative / RTA',
      bullets: [
        'Primary point of contact for order entry and email inquiries; process customer orders, credits, and adjustments while meeting SLAs.',
        'Support AP readiness: input invoices and credit notes into internal spreadsheets and prepare data for vendor statement reconciliation.',
        'Prepare and maintain spreadsheets using formulas and pivot tables for month-end checks and GL allocations.',
        'Train new CSRs on order processing and escalation procedures; recognized as top performer with high QA scores.'
      ]
    },
    {
      company: 'Tempestas ESports',
      period: '12/2020 – 12/2022',
      role: 'Administrative Support',
      bullets: [
        'Managed administrative workflows and internal spreadsheets supporting month-end tasks.',
        'Streamlined booking and reporting processes, improving data accuracy and reducing admin time.',
        'Provided chat and email support for customer inquiries and order coordination.'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-8">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
            <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-xl text-slate-900">{exp.company}</h3>
                <p className="text-blue-600 font-semibold">{exp.role}</p>
              </div>
              <span className="text-slate-400 font-medium text-sm mt-1 md:mt-0">{exp.period}</span>
            </div>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                  <span className="text-blue-500 flex-shrink-0">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
