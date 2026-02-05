import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Editorial Policy | KnowYourName',
    description: 'Our commitment to accuracy, transparency, and scientific integrity. Learn about our sourcing rules, conflict-of-interest policy, and corrections process.',
    keywords: 'editorial policy, sourcing standards, corrections policy, scientific integrity',
};

export default function EditorialPolicyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24">
            
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-slate lg:prose-lg">

                {/* Breadcrumb */}
                <nav className="not-prose mb-8 text-sm">
                    <Link href="/" className="text-slate-500 hover:text-blue-600">&larr; Home</Link>
                </nav>

                {/* Header */}
                <header className="not-prose mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Transparency</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                        Editorial Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                        Our commitment to accuracy, scientific integrity, and transparent operations.
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                        <span>Last Updated: January 2026</span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                        <span>Version 1.0</span>
                    </div>
                </header>

                {/* 1. Sourcing Rules */}
                <section>
                    <h2>1. Sourcing Standards</h2>
                    <p>
                        All scientific claims made on KnowYourName must be traceable to peer-reviewed literature or established academic sources. We adhere to the following hierarchy of evidence:
                    </p>
                    <ol>
                        <li><strong>Tier 1 (Preferred):</strong> Peer-reviewed journal articles with DOI links (e.g., from <em>Cognition</em>, <em>Journal of Experimental Psychology</em>, <em>Phonetica</em>).</li>
                        <li><strong>Tier 2:</strong> Academic books from established publishers (e.g., Cambridge University Press, MIT Press) with ISBN references.</li>
                        <li><strong>Tier 3:</strong> Well-established linguistic databases (e.g., CMU Pronouncing Dictionary, Oxford English Corpus).</li>
                        <li><strong>Not Acceptable:</strong> Blog posts, social media, Wikipedia (except as a starting point for further research), or unsourced claims.</li>
                    </ol>
                    <p>
                        When citing research, we provide author names, publication years, and DOI links where available. All major claims are attributed inline or in dedicated "References" sections.
                    </p>
                </section>

                {/* 2. Conflict of Interest */}
                <section>
                    <h2>2. Conflict of Interest Policy</h2>
                    <p>
                        KnowYourName is an independent project. We disclose the following:
                    </p>
                    <ul>
                        <li><strong>Funding:</strong> This project is funded through Google AdSense advertising revenue. Advertisers have no editorial influence over our content.</li>
                        <li><strong>Affiliate Links:</strong> We do not currently use affiliate links. If this changes, all affiliate relationships will be clearly disclosed.</li>
                        <li><strong>Sponsored Content:</strong> We do not accept sponsored content or paid placements that influence our scientific analysis or recommendations.</li>
                        <li><strong>Data Privacy:</strong> We do not sell user data. All name analysis is performed client-side; no names are transmitted to or stored on our servers.</li>
                    </ul>
                </section>

                {/* 3. Update Cadence */}
                <section>
                    <h2>3. Update Cadence</h2>
                    <p>
                        We are committed to keeping our content accurate and up-to-date:
                    </p>
                    <ul>
                        <li><strong>Analysis Engine:</strong> The core <code>nameAnalysisEngine.ts</code> is reviewed and updated as new research becomes available. Major version updates are logged in the "Engine v7.5" changelog (see <Link href="/methods">Methods page</Link>).</li>
                        <li><strong>Literature Reviews:</strong> Our <Link href="/research">Research Library</Link> articles are reviewed annually to incorporate new findings and meta-analyses.</li>
                        <li><strong>Policy Pages:</strong> Legal and policy pages (Privacy, Terms, Editorial Policy) are reviewed at least once per year or when significant changes occur.</li>
                        <li><strong>Sitemap &amp; SEO:</strong> Updated whenever new pages are added to the site.</li>
                    </ul>
                </section>

                {/* 4. Corrections Process */}
                <section>
                    <h2>4. Corrections Process</h2>
                    <p>
                        We take errors seriously. If you identify an inaccuracy in our content:
                    </p>
                    <ol>
                        <li><strong>Report:</strong> Email us at <a href="mailto:info.onesharma@gmail.com">info.onesharma@gmail.com</a> with the URL of the page, the specific claim in question, and the correct information with a source.</li>
                        <li><strong>Review:</strong> Our team will review the report within 7 business days.</li>
                        <li><strong>Correction:</strong> If an error is confirmed:
                            <ul>
                                <li>Minor errors (typos, outdated statistics) are corrected silently.</li>
                                <li>Significant errors (misattribution, factual inaccuracies affecting interpretation) are corrected with a visible "Correction" note at the top of the affected page, including the date and description of the change.</li>
                            </ul>
                        </li>
                        <li><strong>Acknowledgment:</strong> We will credit the first person to report a significant error (unless they prefer anonymity).</li>
                    </ol>
                </section>

                {/* 5. Editorial Independence */}
                <section>
                    <h2>5. Editorial Independence</h2>
                    <p>
                        Our editorial decisions are made solely by the KnowYourName team based on scientific merit and user value. We are not influenced by:
                    </p>
                    <ul>
                        <li>Advertisers (Google AdSense operates programmatically; we do not select individual ads).</li>
                        <li>External organizations or institutions.</li>
                        <li>Requests to suppress or alter findings for commercial reasons.</li>
                    </ul>
                    <p>
                        <strong>Our guiding principle:</strong> We analyze names using quantitative linguistics and acoustic physics. We do not make fortune-telling, numerological, or pseudoscientific claims.
                    </p>
                </section>

                {/* Contact */}
                <section className="not-prose mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Questions?</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        For questions about this policy or to report a concern, contact us:
                    </p>
                    <a href="mailto:info.onesharma@gmail.com" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                        info.onesharma@gmail.com
                    </a>
                </section>

            </article>
        </div>
    );
};
