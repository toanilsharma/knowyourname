'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function NameRedirect({ name }: { name: string }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home with the name parameter to trigger the analysis
    router.replace(`/?name=${encodeURIComponent(name)}`);
  }, [name, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Analyzing {name}...</h2>
        <p className="text-slate-500 mt-2">Initializing linguistic engine</p>
      </div>
    </div>
  );
}
