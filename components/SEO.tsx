import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  keywords?: string;
  noIndex?: boolean;
  ogImage?: string;
  articleSchema?: {
    headline: string;
    author: string;
    datePublished: string;
    keywords?: string[];
  };
}

export const SEO: React.FC<Props> = ({
  title,
  description,
  keywords,
  noIndex = false,
  ogImage = 'https://knowyourname.co.in/og-image.png',
  articleSchema
}) => {
  const location = useLocation();
  const fullUrl = `https://knowyourname.co.in${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = `${title} | Know Your Name`;

    // Helper to set meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }

    // Open Graph Tags (Facebook, LinkedIn)
    setMeta('og:title', `${title} | Know Your Name`, true);
    setMeta('og:description', description, true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:type', 'website', true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'Know Your Name', true);

    // Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | Know Your Name`);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical Tag Update
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullUrl);

    // Article Schema (JSON-LD) for research pages
    const existingSchema = document.getElementById('page-schema');
    if (articleSchema) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": articleSchema.headline,
        "author": {
          "@type": "Person",
          "name": articleSchema.author
        },
        "datePublished": articleSchema.datePublished,
        "publisher": {
          "@type": "Organization",
          "name": "Know Your Name Labs"
        },
        "url": fullUrl,
        "keywords": articleSchema.keywords || []
      };

      if (existingSchema) {
        existingSchema.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement('script');
        script.id = 'page-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    } else if (existingSchema) {
      existingSchema.remove();
    }

  }, [title, description, keywords, fullUrl, ogImage, articleSchema]);

  useEffect(() => {
    // Robots Meta Tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }

    if (noIndex) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots.setAttribute('content', 'index, follow, max-image-preview:large');
    }

    // Cleanup to default on unmount
    return () => {
      metaRobots?.setAttribute('content', 'index, follow, max-image-preview:large');
    }
  }, [noIndex]);

  return null;
};