import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider, ThemeScript } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://knowyourname.co.in"),
  title: {
    default: "Analyze Your Name | Scientific Meaning & Phonetic Aesthetics",
    template: "%s | Know Your Name",
  },
  alternates: {
    canonical: '/',
  },
  description:
    "What does your name actually say? Reveal the hidden linguistic psychology, keyboard ergonomics, and acoustic vibration of your name. 100% Science. No Horoscopes.",
  keywords: [
    "name meaning",
    "name origin",
    "linguistic analysis of names",
    "phonetic analysis",
    "baby name science",
    "onomastics",
    "sound symbolism",
    "bouba kiki test",
    "name aesthetic",
    "phonotactics",
    "name personality",
    "literary name generator",
  ],
  authors: [{ name: "A Sharma" }],
  applicationName: "Know Your Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knowyourname.co.in/",
    siteName: "Know Your Name",
    title: "Know Your Name | The Science of Name Meanings",
    description:
      "Beyond dictionary definitions. Explore the linguistics, ergonomics, and mathematical weight of your name.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Know Your Name - Scientific Name Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@knowyourname",
    creator: "@onesharma",
    title: "Know Your Name | Linguistic Analysis Tool",
    description:
      "Analyze the phonetics, origin patterns, and ergonomics of any name instantly.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='0' y='0' width='64' height='64' rx='16' fill='%230f172a'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Georgia, serif' font-size='42' font-weight='bold'%3EK%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='0' y='0' width='64' height='64' rx='16' fill='%230f172a'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Georgia, serif' font-size='42' font-weight='bold'%3EK%3C/text%3E%3C/svg%3E",
      },
    ],
  },
  other: {
    "DC.title": "KnowYourName: Scientific Name Analysis Engine",
    "DC.creator": "A Sharma",
    "DC.subject": "Linguistics; Onomastics; Phonosemantics; Sound Symbolism",
    "DC.publisher": "Know Your Name Labs",
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.language": "en",
    citation_title: "Sound Symbolism in Names: A Meta-Analysis",
    citation_author: "A Sharma",
    citation_publication_date: "2026/01/24",
    citation_journal_title: "Know Your Name Research Library",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://knowyourname.co.in/#website",
      url: "https://knowyourname.co.in/",
      name: "Know Your Name",
      alternateName: [
        "KYN Name Analyzer",
        "Name Meaning Calculator",
        "Phonosemantics Engine",
      ],
      description: "Scientific Name Meaning & Linguistic Analysis Tool",
      publisher: {
        "@id": "https://knowyourname.co.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://knowyourname.co.in/?name={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://knowyourname.co.in/#organization",
      name: "Know Your Name Labs",
      url: "https://knowyourname.co.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://knowyourname.co.in/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info.onesharma@gmail.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Know Your Name Analysis Engine",
      operatingSystem: "Web Browser",
      applicationCategory: "ReferenceApplication",
      genre: "Linguistics & Onomastics",
      keywords:
        "name meaning, name origin, phonetics, baby names, linguistics, generative AI prompts",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "A browser-based tool that calculates the phonetic score, keyboard ergonomics, and structural weight of names using IPA standards. It provides a scientific alternative to traditional name meaning searches.",
      featureList: [
        "Phonetic texture analysis (Plosive/Fricative)",
        "QWERTY keyboard ergonomics heatmap",
        "Bouba/Kiki effect classification",
        "Syllabic rhythm estimation",
        "Generative Name Pattern Recognition",
      ],
      author: {
        "@type": "Person",
        name: "A Sharma",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find the linguistic meaning of my name?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional etymology which looks at history, linguistic analysis looks at the sound structure (phonology) of your name. Enter your name in our tool to see if it is 'sharp' or 'round', and how it flows mechanically on a keyboard.",
          },
        },
        {
          "@type": "Question",
          name: "What is the origin of my name's sound?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Name sounds originate from specific mouth movements. Our tool breaks down your name into Plosives, Fricatives, and Sonorants to reveal the physical origin of the sounds you make when introducing yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use this for baby name meanings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. This tool is excellent for parents who want to understand the 'vibe' or aesthetic weight of a baby name beyond just its dictionary definition.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script - must run before hydration */}
        <ThemeScript />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-98QVGSVKDT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-98QVGSVKDT');
            `,
          }}
        />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6734659962945791"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-200 transition-colors duration-500">
            <Header />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
