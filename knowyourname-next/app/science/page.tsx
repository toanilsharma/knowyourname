import React from 'react';
import { Metadata } from 'next';
import { ScienceClient } from './ScienceClient';

export const metadata: Metadata = {
    title: 'The Science of Sound Symbolism & Naming',
    description: "Why do you hear your name in a crowded room? Why are some names 'spiky' and others 'round'? Explore the neuroscience of nomenclature.",
    keywords: 'cocktail party effect, bouba kiki effect, sound symbolism in branding, name letter effect, neuroscience of names',
};

export default function SciencePage() {
    return <ScienceClient />;
}
