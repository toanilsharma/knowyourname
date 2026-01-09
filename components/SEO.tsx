import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  keywords?: string;
}

export const SEO: React.FC<Props> = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = `${title} | Know Your Name`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Keywords (Optional but good for Bing/Yandex)
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Canonical Tag Update
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', `https://knowyourname.co.in${location.pathname}`);

  }, [title, description, keywords, location]);

  return null;
};