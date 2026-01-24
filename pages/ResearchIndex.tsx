import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

const ARTICLES = [
    {
        slug: 'sound-symbolism',
        title: 'Sound Symbolism in Names',
        subtitle: 'A Meta-Analysis',
        description: 'From Sapir (1929) to modern replications: how speech sounds carry inherent meaning across cultures and languages.',
        icon: '🔊',
        gradient: 'from-blue-500 via-blue-600 to-indigo-600',
        bgGlow: 'bg-blue-500',
        readTime: '12 min',
        citations: ['Sapir 1929', 'Köhler 1929', 'Ramachandran 2001']
    },
    {
        slug: 'bouba-kiki',
        title: 'The Bouba-Kiki Effect',
        subtitle: 'Across Languages',
        description: 'Cross-cultural and infant studies revealing the universal neural link between sounds and visual shapes.',
        icon: '🫧',
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        bgGlow: 'bg-purple-500',
        readTime: '10 min',
        citations: ['Bremner 2013', 'Ozturk 2013']
    },
    {
        slug: 'phonotactics',
        title: 'Phonotactics & Branding',
        subtitle: 'Consumer Perception',
        description: 'How consonant clusters and syllable structures shape consumer expectations and brand personality.',
        icon: '💎',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        bgGlow: 'bg-emerald-500',
        readTime: '8 min',
        citations: ['Klink 2000', 'Lowrey & Shrum 2007']
    },
    {
        slug: 'acoustic-frequency',
        title: 'Acoustic Frequency',
        subtitle: 'Emotional Valence',
        description: "Ohala's Frequency Code explains why deep voices sound dominant and high voices sound friendly.",
        icon: '📊',
        gradient: 'from-amber-500 via-orange-500 to-red-500',
        bgGlow: 'bg-amber-500',
        readTime: '9 min',
        citations: ['Ohala 1984', 'Gussenhoven 2004']
    },
    {
        slug: 'typing-effort',
        title: 'Typing Effort Models',
        subtitle: 'Human-Computer Interaction',
        description: "Fitts' Law applied to names: how keyboard geography affects the digital experience of your identity.",
        icon: '⌨️',
        gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
        bgGlow: 'bg-rose-500',
        readTime: '7 min',
        citations: ['Fitts 1954', 'MacKenzie 2002']
    }
];

export const ResearchIndex: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-16 pb-24 relative overflow-hidden">
            <SEO
                title="Research Library | Peer-Reviewed Literature Reviews"
                description="Academic literature reviews on phonetics, sound symbolism, and naming science. Peer-reviewed sources with DOI citations."
                keywords="linguistics research, sound symbolism literature review, bouba kiki research, phonetics papers"
            />

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="glow-orb w-[600px] h-[600px] bg-blue-500 -top-40 -left-40"></div>
                <div className="glow-orb w-[500px] h-[500px] bg-purple-500 top-1/2 -right-40" style={{ animationDelay: '2s' }}></div>
                <div className="glow-orb w-[400px] h-[400px] bg-emerald-500 -bottom-40 left-1/3" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header */}
                <header className="mb-20 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-full text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-6 border border-slate-200 dark:border-slate-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Academic Library
                    </div>
                    <h1 className="text-5xl md:text-7xl heading-display mb-6">
                        <span className="gradient-text">Research</span> Library
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Deep-dive literature reviews synthesizing decades of peer-reviewed research.
                        Every claim is traceable to published sources with DOI links.
                    </p>
                </header>

                {/* Featured Article */}
                <div className="mb-16 animate-fade-in-up delay-200">
                    <Link
                        to="/research/sound-symbolism"
                        className="group block relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-blue-500/50 transition-all duration-700"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500">🔊</div>
                            <div className="flex-1">
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Featured Research</p>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-blue-300 transition-colors">
                                    Sound Symbolism in Names: A Meta-Analysis
                                </h2>
                                <p className="text-slate-300 text-lg mb-6 max-w-2xl">
                                    95 years of research proving that speech sounds carry inherent meaning. From Sapir's 1929 "Mil-Mal" experiment to modern neuroimaging studies.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">12 min read</span>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">4 DOI citations</span>
                                    <span className="text-blue-400 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                                        Read Now →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ARTICLES.slice(1).map((article, index) => (
                        <Link
                            key={article.slug}
                            to={`/research/${article.slug}`}
                            className="group research-card"
                            style={{
                                '--card-accent': `linear-gradient(90deg, var(--tw-gradient-stops))`,
                                animationDelay: `${(index + 1) * 100}ms`
                            } as React.CSSProperties}
                        >
                            {/* Icon with Glow */}
                            <div className="relative mb-6">
                                <div className={`absolute inset-0 ${article.bgGlow} opacity-20 blur-2xl rounded-full scale-150`}></div>
                                <div className="relative text-5xl group-hover:scale-110 transition-transform duration-500">
                                    {article.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <p className={`text-xs font-bold uppercase tracking-widest mb-2 bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent`}>
                                    {article.subtitle}
                                </p>
                                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {article.description}
                                </p>

                                {/* Citations */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.citations.map((cite) => (
                                        <span key={cite} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-400">
                                            {cite}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <span className="text-sm text-slate-500">{article.readTime} read</span>
                                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-sm">
                                        Read Article →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center animate-fade-in-up">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-slate-500 dark:text-slate-400">Want to understand how we apply this research?</p>
                        <Link to="/methods" className="btn-premium">
                            View Engine Methodology →
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
