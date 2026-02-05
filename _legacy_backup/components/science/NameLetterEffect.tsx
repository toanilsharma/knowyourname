import React, { useState } from 'react';

export const NameLetterEffect: React.FC = () => {
    const [initial, setInitial] = useState('');
    const [result, setResult] = useState<any>(null);

    const PREDICTIONS: Record<string, any> = {
        A: { brand: 'Apple', city: 'Atlanta', career: 'Architect' },
        B: { brand: 'BMW', city: 'Boston', career: 'Baker' },
        C: { brand: 'Coca-Cola', city: 'Chicago', career: 'Chef' },
        D: { brand: 'Dell', city: 'Denver', career: 'Dentist' },
        E: { brand: 'ESPN', city: 'El Paso', career: 'Engineer' },
        H: { brand: 'Honda', city: 'Houston', career: 'Historian' },
        J: { brand: 'JetBlue', city: 'Jacksonville', career: 'Journalist' },
        K: { brand: 'Kellogg\'s', city: 'Kansas City', career: 'Kineticist' },
        L: { brand: 'Lexus', city: 'Los Angeles', career: 'Lawyer' },
        M: { brand: 'McDonald\'s', city: 'Miami', career: 'Musician' },
        S: { brand: 'Samsung', city: 'Seattle', career: 'Scientist' },
        T: { brand: 'Tesla', city: 'Toronto', career: 'Teacher' },
        // Fallbacks
        DEFAULT: { brand: 'Brands with your initial', city: 'Cities starting with your letter', career: 'Roles matching your name' }
    };

    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        if (!initial) return;
        const char = initial.toUpperCase()[0];
        const pred = PREDICTIONS[char] || PREDICTIONS.DEFAULT;
        setResult({ char, ...pred });
    };

    return (
        <div className="bg-emerald-50 dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 rounded-3xl p-8 shadow-lg">
            {!result ? (
                <div className="text-center">
                    <h3 className="font-serif font-bold text-xl mb-4 text-slate-900 dark:text-white">Test Your Subconscious</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                        Enter your first initial to see what the "Name-Letter Effect" predicts you prefer.
                    </p>
                    <form onSubmit={handleAnalyze} className="flex gap-2 max-w-xs mx-auto">
                        <input
                            type="text"
                            maxLength={1}
                            value={initial}
                            onChange={(e) => setInitial(e.target.value)}
                            placeholder="A"
                            className="w-16 h-12 text-center text-xl font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl"
                        />
                        <button type="submit" className="flex-1 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">
                            Predict Choices
                        </button>
                    </form>
                </div>
            ) : (
                <div className="animate-fade-in-up">
                    <div className="flex justify-between items-center mb-6 border-b border-emerald-200/50 pb-4">
                        <h3 className="font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest text-xs">Statistical Likelihoods</h3>
                        <button onClick={() => setResult(null)} className="text-xs text-slate-400 hover:text-slate-600">Reset</button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                            <span className="text-slate-500 text-sm">Preferred Brand</span>
                            <span className="font-bold text-slate-900 dark:text-white text-lg">{result.brand}</span>
                        </div>
                        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                            <span className="text-slate-500 text-sm">Likely City</span>
                            <span className="font-bold text-slate-900 dark:text-white text-lg">{result.city}</span>
                        </div>
                        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                            <span className="text-slate-500 text-sm">Disproportionate Career</span>
                            <span className="font-bold text-slate-900 dark:text-white text-lg">{result.career}</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-6 text-center italic">
                        *Based on statistical averages (Pelham et al., 2002). Individual results vary, but the population trend is robust.
                    </p>
                </div>
            )}
        </div>
    );
};
