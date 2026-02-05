import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-8 animate-fade-in-up">
      <SEO title="Privacy Policy" description="How Know Your Name handles your data. Spoiler: We process everything locally in your browser." />
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm">Last Updated: October 2023</p>
      </header>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Introduction</h2>
        <p>
          Welcome to Know Your Name, accessible from <strong>https://knowyourname.co.in</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
          This Privacy Policy explains how we handle your information when you visit our website and use our analysis tools.
        </p>
        <p className="bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-500/20 p-4 rounded text-emerald-800 dark:text-emerald-200 text-sm">
          <strong>Key Summary:</strong> We do not collect, store, or transmit the names you enter for analysis. All processing happens locally on your device.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Client-Side Processing</h2>
        <p>
          Our application architecture is "Client-Side Only." This means the code that analyzes names runs entirely within your web browser. 
          When you click "Analyze," the text data is processed by JavaScript running on your computer. 
          <strong>The data is never sent to our servers, nor is it saved in any database.</strong> 
          Once you close the tab or refresh the page, the data is permanently erased from your browser's memory.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Information We Collect</h2>
        <p>
          Since we do not have a backend database for user data, we do not collect:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
          <li>Personal names or birth dates.</li>
          <li>Email addresses or contact information.</li>
          <li>User accounts or passwords.</li>
        </ul>
        <p>
          However, like most websites, we may utilize standard web technologies that collect anonymous usage data:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
          <li><strong>Log Data:</strong> Hosting providers may log IP addresses and browser types for security and diagnostic purposes.</li>
          <li><strong>Local Storage:</strong> We may use your browser's Local Storage to save user preferences (such as Dark/Light mode settings) to improve your experience.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
          <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
          <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
          <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
        </ul>
        <p>
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">6. Third-Party Vendors & Ads</h2>
        <p>
          We may use third-party vendors, such as Google AdSense, to serve advertisements on our website. 
          Google uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our website or other websites on the Internet.
        </p>
        <p>
          You may opt-out of the use of the DoubleClick cookie for interest-based advertising by visiting 
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ads Settings</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. 
          You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm text-slate-500">
          If you have any questions about this Privacy Policy, you can contact us via our <Link to="/contact" className="text-blue-500 hover:underline">Contact Page</Link>.
        </p>
      </section>
    </div>
  );
};