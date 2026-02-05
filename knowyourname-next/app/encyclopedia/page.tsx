import React from 'react';
import { Metadata } from 'next';
import { EncyclopediaClient } from './EncyclopediaClient';

export const metadata: Metadata = {
    title: 'Encyclopedia of Onomastics | Global Naming Systems',
    description: 'A scientific deep-dive into Vedic Namkaran, Chinese 5-Elements, Japanese Seimei Handan, and global naming laws. Understand the math and culture behind names.',
    keywords: 'onomastics, vedic naming, chinese five elements name, seimei handan, arabic naming structure, naming laws, bouba kiki',
};

export default function EncyclopediaPage() {
    return <EncyclopediaClient />;
}
