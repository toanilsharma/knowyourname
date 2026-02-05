import React from 'react';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-8 animate-fade-in-up">
      <SEO title="Terms of Service" description="Usage agreements for the Know Your Name analysis engine." />
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm">Last Updated: October 2023</p>
      </header>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
        <p>
          By accessing or using the Know Your Name website located at <strong>https://knowyourname.co.in</strong> ("Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. 
          If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Educational & Entertainment Use Only</h2>
        <p>
          The Know Your Name application is strictly an educational and entertainment tool. The data, metrics, and analyses provided are based on 
          standardized linguistic algorithms and mathematical properties of text strings.
        </p>
        <p className="text-slate-500 dark:text-slate-400 italic">
          <strong>Disclaimer:</strong> This tool does not provide psychological assessments, character judgments, fortune-telling, or legal advice. 
          Any resemblance to personality traits is coincidental or based on sociolinguistic generalities. Do not use this tool for making life decisions, 
          hiring decisions, or assessing individuals.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Intellectual Property</h2>
        <p>
          The code, design, algorithms, and visual content (including the Sonic Fingerprint generation engine and QWERTY heatmap visualization) 
          are the exclusive property of Know Your Name. You are granted a limited license to use the website for personal, non-commercial use.
        </p>
        <p>
          You may share screenshots of your analysis results on social media, provided that the branding and attribution remain visible. 
          You may not reverse engineer, scrape, or commercially redistribute the underlying analysis logic.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. User Conduct</h2>
        <p>
          When using our website, you agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
          <li>Use the service for any unlawful purpose.</li>
          <li>Attempt to compromise the security or integrity of the website.</li>
          <li>Use automated systems (bots) to access the service in a manner that sends more request messages to our servers than a human can reasonably produce.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. Termination</h2>
        <p>
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Disclaimer of Warranties</h2>
        <p>
          The materials on Know Your Name are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, 
          without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      </section>
    </div>
  );
};