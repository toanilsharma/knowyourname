import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Sitemap: React.FC = () => {
  const sections = [
    {
      title: "Core Tools",
      links: [
        { name: "Name Analysis Engine", path: "/", desc: "Analyze phonetics, ergonomics, and structure." },
      ]
    },
    {
      title: "Knowledge Base",
      links: [
        { name: "Research Hub", path: "/science", desc: "The physics of phonics and academic studies." },
        { name: "Scientific Methodology", path: "/about", desc: "How our algorithms work." },
        { name: "Naming Encyclopedia", path: "/encyclopedia", desc: "Laws, distributions, and theories." },
      ]
    },
    {
      title: "Legal & Privacy",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy", desc: "How we handle data." },
        { name: "Terms of Service", path: "/terms", desc: "Usage agreements." },
        { name: "Cookie Policy", path: "/cookie-policy", desc: "Cookie usage details." },
        { name: "Disclaimer", path: "/disclaimer", desc: "Liability limitations." },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact", desc: "Get in touch with the lab." },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in-up">
      <SEO title="Sitemap" description="Complete index of pages for Know Your Name." />
      <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">Site Map</h1>
        <p className="text-slate-500 dark:text-slate-400">Complete index of Know Your Name resources.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group block"
                  >
                    <span className="text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="block text-sm text-slate-500 dark:text-slate-500 mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};