'use client';

import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export class AnalysisErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Analysis Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-6 py-12">
                    <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                            <span className="text-4xl">⚠️</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        Analysis Engine Error
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6 text-sm leading-relaxed">
                        Something went wrong while crunching your name&apos;s data.
                        This usually happens with unusual character combinations. No data was lost.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => this.setState({ hasError: false, error: null })}
                            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                    {this.state.error && (
                        <details className="mt-6 text-left max-w-md w-full">
                            <summary className="text-[10px] text-slate-400 cursor-pointer hover:text-slate-600 transition-colors uppercase tracking-widest font-bold">
                                Technical Details
                            </summary>
                            <pre className="mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] text-slate-500 overflow-x-auto font-mono">
                                {this.state.error.message}
                            </pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
