import { Metadata } from 'next';
import { BattleClient } from './BattleClient';

export const metadata: Metadata = {
  title: 'Name Battle | Compare Two Names Scientifically',
  description: 'Put two names head-to-head in a phonetic showdown. Compare acoustic profiles, typing ergonomics, and psychological impact to see which name wins.',
  keywords: ['name comparison', 'name battle', 'compare names', 'which name is better', 'name vs name'],
};

export default function BattlePage() {
  return <BattleClient />;
}
