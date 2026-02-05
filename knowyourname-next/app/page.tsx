import { Suspense } from 'react';
import { Metadata } from 'next';
import { Home } from './HomeClient';

export const metadata: Metadata = {
  title: 'Scientific Name Analysis & Phonosemantics | KnowYourName',
  description: 'Analyze the hidden linguistic DNA of your name. Calculate phonotactics, keyboard ergonomics, and acoustic sonority profiles instantly using IPA standards.',
};

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950"><div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <Home />
    </Suspense>
  );
}
