'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { DOCS_URL, FORMER_NAME, GITHUB_URL, SITE_NAME } from '@/lib/seo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Micro frontends', href: '/micro-frontends' },
    { name: 'Kubernetes', href: '/kubernetes' },
    { name: 'AI', href: '/ai' },
    { name: 'What is a micro frontend?', href: '/what-is-a-micro-frontend' },
    { name: 'Module Federation', href: '/module-federation' },
    { name: 'Documentation', href: DOCS_URL },
    { name: 'FAQ', href: '/faq' },
    { name: 'Get started', href: '/start-now' },
    { name: 'About', href: '/about' },
    { name: 'GitHub', href: GITHUB_URL },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: 'https://www.iubenda.com/privacy-policy/73426124', className: 'iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe' },
    { name: 'Cookie Policy', href: 'https://www.iubenda.com/privacy-policy/73426124/cookie-policy', className: 'iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe' },
  ];

  useEffect(() => {
    // Wait for Iubenda to load and set the data-tp-float attribute
    const setIubendaPosition = () => {
      const iubendaBtn = document.querySelector('button.iubenda-tp-btn.iubenda-cs-preferences-link');
      if (iubendaBtn) {
        iubendaBtn.setAttribute('data-tp-float', 'bottom-left');
      }
    };

    // Try immediately
    setIubendaPosition();

    // Also try after a delay in case the button loads later
    const timeout = setTimeout(setIubendaPosition, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer className="relative bg-black/30 backdrop-blur-md border-t border-primary/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">{SITE_NAME}</h3>
            <p className="text-white/60 text-sm">
              Open-source platform for micro frontends and services on Kubernetes, with AI-assisted
              changes that arrive as pull requests.
            </p>
            <p className="text-white/40 text-xs mt-2">Formerly {FORMER_NAME}.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${link.className} text-white/60 hover:text-white text-sm transition-colors`}
                    title={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
      <script type="text/javascript" src="/js/iubenda.js"></script>
    </footer>
  );
}
