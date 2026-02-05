import { Metadata } from 'next';
import { NameRedirect } from './NameRedirect';
import { analyzeName } from '@/lib/nameAnalysisEngine';
import { COMMON_NAMES } from '@/lib/commonNames';

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
  const archetype = analysis ? analysis.archetype.name : 'Linguistic Analysis';
  const boubaKiki = analysis ? (analysis.soundSymbolism.boubaScore > 50 ? 'Round/Soft' : 'Sharp/Angular') : '';
  
  return {
    title: `${formattedName} Name Meaning | Scientific Analysis & Phonosemantics`,
    description: `What does the name ${formattedName} reveal? Discover its ${archetype} archetype, ${boubaKiki} acoustic profile, and psychological first impressions using linguistic science.`,
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
    },
  };
}

export default async function NamePage({ params }: Props) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  
  return <NameRedirect name={decodedName} />;
}
