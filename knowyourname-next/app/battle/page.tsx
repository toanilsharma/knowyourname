import { Suspense } from 'react';
import { Metadata } from 'next';
import { BattleClient } from './BattleClient';

export const metadata: Metadata = {
  title: 'Name Battle | Compare Two Names Scientifically',
  description: 'Put two names head-to-head in a phonetic showdown. Compare acoustic profiles, typing ergonomics, and psychological impact to see which name wins.',
  keywords: ['name comparison', 'name battle', 'compare names', 'which name is better', 'name vs name'],
};

export default function BattlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <BattleClient />
    </Suspense>
  );
}
