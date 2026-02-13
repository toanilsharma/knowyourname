import { Metadata } from 'next';
import { analyzeName } from '@/lib/nameAnalysisEngine';
import { COMMON_NAMES } from '@/lib/commonNames';
import { notFound } from 'next/navigation';
import { NamePageClient } from './NamePageClient';

type Props = {
  params: Promise<{ name: string }>;
};

// Generate static params for common names to pre-build pages
export async function generateStaticParams() {
  return COMMON_NAMES.map((name) => ({
    name: name.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const formattedName = decodedName.charAt(0).toUpperCase() + decodedName.slice(1);
  
  // Run quick analysis for metadata
  const analysis = analyzeName(formattedName);
  
  if (!analysis) {
      return {
          title: 'Name Not Found | Know Your Name',
          description: 'Could not analyze this name.',
      };
  }

  const archetype = analysis.archetype.name;
  const boubaKiki = analysis.soundSymbolism.boubaScore > 50 ? 'Round/Soft' : 'Sharp/Angular';
  
  return {
    title: `${formattedName} Name Meaning | Scientific Analysis & Phonosemantics`,
    description: `What does the name ${formattedName} reveal? Discover its ${archetype} archetype, ${boubaKiki} acoustic profile, and psychological first impressions using linguistic science.`,
    alternates: {
        canonical: `/name/${name.toLowerCase()}`,
    },
    keywords: [
      `${formattedName} meaning`,
      `${formattedName} name origin`,
      `${formattedName} name analysis`,
      `what does ${formattedName} mean`,
      `${formattedName} personality`,
    ],
    openGraph: {
      title: `${formattedName}: Scientific Name Analysis`,
      description: `Analyze the hidden phonosemantics of ${formattedName}. ${archetype} archetype.`,
      type: 'article',
      url: `https://knowyourname.co.in/name/${name.toLowerCase()}`,
    },
  };
}

export default async function NamePage({ params }: Props) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  
  // Run full analysis server-side
  const analysis = analyzeName(decodedName);

  if (!analysis) {
    notFound();
  }
  
  return <NamePageClient analysis={analysis} />;
}
