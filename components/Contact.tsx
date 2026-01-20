
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: ''
  });

  // Your specific Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbww5_2U0tKAIzcRR8JIgdOC8o9HdP3TxxaHYxIgiATIdDY4P1jk5j03YtvP20UXEc1y/exec';
  const SHARED_SECRET = "1234567890qwertyuiopasdfghjkl";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // Construct payload exactly as required by your Apps Script
      const payload = {
        secret: SHARED_SECRET,
        email: formData.email,
        phone: formData.phone,
        description: formData.description
      };

      // Using fetch with no-cors to handle the Apps Script redirect
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // With no-cors, we don't get a response body, but we can assume success 
      // if the fetch itself doesn't throw a network error.
      setLoading(false);
      setStatus({ 
        type: 'success', 
        msg: "Message sent! I've received your inquiry and sent a confirmation to " + formData.email 
      });
      setFormData({ email: '', phone: '', description: '' });
      
    } catch (error) {
      console.error('Submission error:', error);
      setLoading(false);
      setStatus({ 
        type: 'error', 
        msg: "Connection error. Please try again or email me directly at jcruspero3263@gmail.com" 
      });
    }

    // Auto-clear status after 10 seconds
    setTimeout(() => setStatus(null), 10000);
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-2xl mx-auto text-center">
      <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Get In Touch</h2>
      <p className="text-slate-600 mb-8">Ready to discuss how I can help your team streamline accounts and automation?</p>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Email Address *</label>
            <input 
              required
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number (Optional)</label>
            <input 
              name="phone"
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="+63 ..."
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Description *</label>
          <textarea 
            required
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="How can I help you?"
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>
        
        {status && (
          <div className={`mt-4 p-4 rounded-xl border ${status.type === 'success' ? 'bg-blue-50 border-blue-100 text-blue-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
             <div className="flex items-center gap-3">
               <span className="text-lg">{status.type === 'success' ? '✅' : '❌'}</span>
               <p className="text-sm font-medium">{status.msg}</p>
             </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
