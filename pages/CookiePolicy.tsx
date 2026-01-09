import React from 'react';
import { SEO } from '../components/SEO';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-8 animate-fade-in-up">
      <SEO title="Cookie Policy" description="Information about how we use cookies and third-party vendors like Google AdSense." />
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Cookie Policy</h1>
        <p className="text-slate-500 text-sm">Last Updated: October 2023</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and to provide information to the owners of the site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. How We Use Cookies</h2>
        <p>
          At Know Your Name (<strong>https://knowyourname.co.in</strong>), we use cookies for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the website to function (e.g., remembering your Light/Dark mode preference). 
            You cannot opt-out of these as the site cannot function without them.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> We may use tools to collect anonymous data about how visitors use our site (e.g., which pages are visited most). 
            This helps us improve the user experience.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website 
            or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-parties to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. 
          These third parties may use their own cookies.
        </p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Google AdSense</h3>
          <p className="text-sm">
            We use Google AdSense to display advertisements. Google uses the <strong>DoubleClick cookie</strong> to serve interest-based advertising. 
            You can view Google's Privacy & Terms here: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ad Policies</a>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Managing Your Cookie Preferences</h2>
        <p>
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, 
          you may worsen your overall user experience, since it will no longer be personalized to you.
        </p>
        <p>
          <strong>Opting Out of Interest-Based Ads:</strong>
          <br />
          You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ads Settings</a>.
          Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">www.aboutads.info</a>.
        </p>
      </section>
    </div>
  );
};