'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DOCS_URL, PILLARS, SITE_NAME } from '@/lib/seo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: PILLARS.build.name, href: PILLARS.build.path },
    { name: PILLARS.ship.name, href: PILLARS.ship.path },
    { name: PILLARS.enterprise.name, href: PILLARS.enterprise.path },
    { name: 'Documentation', href: DOCS_URL },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-5 left-5 right-5 z-50 bg-background/60 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-foreground font-bold text-xl">
              {SITE_NAME}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground-secondary hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/start-now"
              className="ml-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground-secondary hover:text-foreground focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground-secondary hover:text-foreground hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/start-now"
                className="block w-full text-center mt-4 px-3 py-2 rounded-md text-base font-medium text-primary-foreground bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Start Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
