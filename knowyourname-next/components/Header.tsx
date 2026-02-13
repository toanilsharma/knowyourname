'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from './ui/Button';
import { Menu, X, Moon, Sun, Beaker, BookOpen, Search, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Analysis Lab', path: '/', icon: <Beaker className="w-4 h-4" /> },
        { name: 'The Science', path: '/science', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Encyclopedia', path: '/encyclopedia', icon: <Search className="w-4 h-4" /> },
        { name: 'Methodology', path: '/methods', icon: <Info className="w-4 h-4" /> },
    ];

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200/50 dark:border-slate-800/50 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3 relative z-50">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center font-serif font-bold text-xl shadow-lg relative">
                                K
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-lg leading-none text-slate-900 dark:text-white">KnowYourName</span>
                            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Laboratory</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                href={link.path}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2",
                                    pathname === link.path 
                                        ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white" 
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900"
                                )}
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3 relative z-50">
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={toggleTheme}
                            className="rounded-full"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </Button>

                        <div className="hidden md:block">
                            <Link href="/contact">
                                <Button variant="primary" size="sm" className="rounded-full px-6">
                                    Contact
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Field */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.path} 
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full mt-4 justify-center">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
