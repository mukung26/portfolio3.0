
import React, { useState } from 'react';
import { downloadCV } from '../services/cvService.ts';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadCV();
    } finally {
      setIsDownloading(false);
    }
  };

  const navItems = [
    { label: 'Summary', href: '#summary' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1A_Sxh9E2CwbL9q2tJKQ1rR_5RjvvuXJv" 
              alt="Jerwin" 
              className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-sm"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:inline">Jerwin <span className="text-blue-600">Cruspero</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className={`${isDownloading ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2`}
            >
              {isDownloading ? (
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              )}
              {isDownloading ? 'Generating...' : 'Download CV'}
            </button>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-3">
          {navItems.map(item => (
            <a 
              key={item.label} 
              href={item.href} 
              className="block text-slate-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              handleDownload();
              setIsMenuOpen(false);
            }}
            disabled={isDownloading}
            className={`w-full ${isDownloading ? 'bg-blue-400' : 'bg-blue-600'} text-white px-4 py-3 rounded-lg font-semibold`}
          >
            {isDownloading ? 'Generating...' : 'Download CV'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
