import React from 'react';
import { cn } from '@/lib/utils';

interface ArticleProseProps {
    children: React.ReactNode;
    className?: string;
}

export const ArticleProse: React.FC<ArticleProseProps> = ({ children, className }) => {
    return (
        <article className={cn(
            "prose prose-lg dark:prose-invert max-w-3xl mx-auto px-6",
            "prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight",
            "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6",
            "prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-8",
            "prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",
            "prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold",
            "first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:mt-[-4px]",
            className
        )}>
            {children}
        </article>
    );
};
