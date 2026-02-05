import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kyn-cookie-consent');
    if (!consent) {
      // Small delay to prevent layout thrashing on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kyn-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kyn-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/95 dark:bg-black/95 backdrop-blur-md border-t border-slate-700 shadow-2xl animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-300 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-white mb-1">We value your privacy</p>
          <p>
            We use cookies to enhance your experience, analyze site traffic, and serve personalized content. 
            By clicking "Accept", you consent to our use of cookies. 
            Read our <Link to="/cookie-policy" className="text-emerald-400 hover:underline">Cookie Policy</Link> and <Link to="/privacy-policy" className="text-emerald-400 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 transition-all text-sm font-bold"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};