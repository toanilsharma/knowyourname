import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
            <div className="relative mb-8">
                <div className="text-[120px] font-serif font-bold text-slate-200 dark:text-slate-800 select-none leading-none">
                    404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">🔍</span>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Name Not Found
            </h1>

            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
                This page doesn&apos;t exist in our linguistic corpus. But your name does —
                and it&apos;s waiting to be analyzed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                <Link
                    href="/"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 flex items-center gap-2 justify-center"
                >
                    <span>✨</span> Analyze Your Name
                </Link>
                <Link
                    href="/encyclopedia"
                    className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 justify-center"
                >
                    <span>📖</span> Browse Encyclopedia
                </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Fun fact: &quot;404&quot; has a Scrabble value of zero — because numbers aren&apos;t names.
                </p>
            </div>
        </div>
    );
}
