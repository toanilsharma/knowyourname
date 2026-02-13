import React from 'react';

interface MarkdownLiteProps {
    text: string;
    className?: string;
}

export const MarkdownLite: React.FC<MarkdownLiteProps> = ({ text, className }) => {
    if (!text) return null;

    // Split by **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <span className={className}>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                        <strong key={i} className="font-bold text-slate-900 dark:text-white">
                            {part.slice(2, -2)}
                        </strong>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </span>
    );
};
