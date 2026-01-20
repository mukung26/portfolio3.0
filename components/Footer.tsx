
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Jerwin Cruspero. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="https://www.linkedin.com/in/jerwin-cruspero-4a4228273/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/mukung26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            GitHub
          </a>
          <a 
            href="mailto:jcruspero3263@gmail.com" 
            className="text-slate-400 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
