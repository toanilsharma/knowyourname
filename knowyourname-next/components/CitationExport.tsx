"use client";
import React, { useState } from 'react';

interface CitationExportProps {
    title: string;
    authors: string[];
    year: string;
    journal?: string;
    url: string;
    abstract?: string;
}

export const CitationExport: React.FC<CitationExportProps> = ({
    title,
    authors,
    year,
    journal = 'Know Your Name Research Library',
    url,
    abstract = ''
}) => {
    const [copied, setCopied] = useState<string | null>(null);

    const generateBibTeX = (): string => {
        const authorString = authors.join(' and ');
        const key = `${authors[0]?.split(' ').pop() || 'unknown'}${year}`;
        return `@article{${key},
  title = {${title}},
  author = {${authorString}},
  journal = {${journal}},
  year = {${year}},
  url = {${url}},
  note = {Accessed: ${new Date().toISOString().split('T')[0]}}
}`;
    };

    const generateRIS = (): string => {
        const authorLines = authors.map(a => `AU  - ${a}`).join('\n');
        return `TY  - JOUR
TI  - ${title}
${authorLines}
JO  - ${journal}
PY  - ${year}
UR  - ${url}
AB  - ${abstract}
ER  -`;
    };

    const generateAPA = (): string => {
        const authorString = authors.length > 1
            ? `${authors.slice(0, -1).join(', ')}, & ${authors[authors.length - 1]}`
            : authors[0];
        return `${authorString} (${year}). ${title}. ${journal}. ${url}`;
    };

    const handleCopy = (type: 'bibtex' | 'ris' | 'apa') => {
        const text = type === 'bibtex' ? generateBibTeX() : type === 'ris' ? generateRIS() : generateAPA();
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleDownload = (type: 'bibtex' | 'ris') => {
        const text = type === 'bibtex' ? generateBibTeX() : generateRIS();
        const extension = type === 'bibtex' ? 'bib' : 'ris';
        const mimeType = type === 'bibtex' ? 'application/x-bibtex' : 'application/x-research-info-systems';

        const blob = new Blob([text], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `citation.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                Cite This Article
            </h3>

            {/* APA Citation */}
            <div className="mb-4 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">APA Format</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-mono leading-relaxed break-all">
                    {generateAPA()}
                </p>
                <button
                    onClick={() => handleCopy('apa')}
                    className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                    {copied === 'apa' ? '✓ Copied!' : 'Copy APA'}
                </button>
            </div>

            {/* Export Buttons */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => handleCopy('bibtex')}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                    <span>📋</span>
                    {copied === 'bibtex' ? 'Copied!' : 'Copy BibTeX'}
                </button>
                <button
                    onClick={() => handleDownload('bibtex')}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                    <span>⬇️</span>
                    Download .bib
                </button>
                <button
                    onClick={() => handleDownload('ris')}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                    <span>⬇️</span>
                    Download .ris
                </button>
            </div>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
                RIS format is compatible with EndNote, Zotero, and Mendeley.
            </p>
        </div>
    );
};
