
import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects: Project[] = [
    {
      id: 'p1',
      title: "Shift Attendance Automation",
      meta: "Google Apps Script • Sheets",
      icon: "📊",
      excerpt: "Automates roster parsing, announcements, deduplication, and reporting for teams.",
      body: "Full implementation includes roster parsing, multi-span support, overnight shift handling, deduplication using PropertiesService, and scheduled triggers for fast reconciliation.",
      tags: ["Automation", "Reporting"],
      links: [{ label: "View on GitHub", href: "https://github.com/mukung26", external: true }]
    },
    {
      id: 'p2',
      title: "Webhook Receiver Dashboard",
      meta: "Node.js • Express • Dashboard",
      icon: "🤖",
      excerpt: "Receives real-time callbacks and provides a dashboard to inspect event payloads.",
      body: "Production-ready webhook receiver that validates incoming requests, forwards events to Apps Script, and provides a simple web dashboard for real-time event inspection.",
      tags: ["Backend", "Integration"],
      links: [{ label: "View Code", href: "https://github.com/mukung26", external: true }]
    },
    {
      id: 'p3',
      title: "Operational Reporting Tools",
      meta: "Sheets • Pivot Tables",
      icon: "📈",
      excerpt: "Automated summaries to cross-check operational data and speed month-end reconciliation.",
      body: "Automated reporting suite used to cross-check operational data against spreadsheets and support month-end reconciliations. Includes scheduled exports and pivot-driven summaries.",
      tags: ["Finance", "Data"],
      links: [{ label: "Case Study", href: "#", external: false }]
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">Projects & Achievements</h2>
          <p className="text-slate-500 text-sm">Building tools that solve real operational problems.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div 
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">{project.title}</h3>
            <p className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-tight">{project.meta}</p>
            <p className="text-slate-600 text-sm flex-grow line-clamp-3">
              {project.excerpt}
            </p>
            <div className="mt-6 flex gap-2">
              <span className="text-xs font-bold text-slate-400 hover:text-blue-600">View Details →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
