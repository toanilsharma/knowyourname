import React from 'react';
import { Metadata } from 'next';
import { BoubaKikiClient } from './BoubaKikiClient';

export const metadata: Metadata = {
    title: 'The Bouba-Kiki Effect Across Languages | KnowYourName Research',
    description: 'Cross-cultural and infant studies on the universal link between sounds and shapes. How the Bouba-Kiki effect applies to name perception.',
    keywords: 'bouba kiki effect, sound symbolism, shape sound mapping, cross-cultural linguistics',
};

export default function BoubaKikiPage() {
    return <BoubaKikiClient />;
}
