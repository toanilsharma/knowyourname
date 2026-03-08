'use client';

import React, { useState, useEffect } from 'react';

export const InstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setInstalled(true);
            return;
        }

        // Check if user has dismissed before
        const dismissed = localStorage.getItem('kyn-pwa-dismissed');
        if (dismissed) {
            const dismissedDate = new Date(dismissed);
            const daysSince = (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
            if (daysSince < 7) return; // Don't show again for 7 days
        }

        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show after a delay (don't interrupt the first experience)
            setTimeout(() => setShowPrompt(true), 15000);
        };

        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setInstalled(true);
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        localStorage.setItem('kyn-pwa-dismissed', new Date().toISOString());
    };

    if (!showPrompt || installed) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-[360px] z-50 animate-fade-in-up">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/30 p-5">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                        <span className="text-white text-xl font-bold">K</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                            Install KnowYourName
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Add to your home screen for instant access — no app store needed.
                        </p>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex-shrink-0"
                        aria-label="Dismiss"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={handleInstall}
                        className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-md shadow-blue-500/20"
                    >
                        Install App
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="px-4 py-2.5 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors"
                    >
                        Not now
                    </button>
                </div>
            </div>
        </div>
    );
};
