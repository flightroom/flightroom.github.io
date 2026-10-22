/**
 * Sitemap generation. Priorities are set per page rather than left flat: the
 * homepage and the three pillar pages are what we want crawled most often,
 * while the orphaned pricing page is excluded and the legal pages are
 * de-prioritised.
 */
const HIGH_PRIORITY = ['/', '/micro-frontends', '/kubernetes', '/ai'];
const MEDIUM_PRIORITY = ['/what-is-a-micro-frontend', '/module-federation'];
const LOW_PRIORITY = ['/privacy-policy', '/cookie-policy'];

module.exports = {
  siteUrl: 'https://flightroom.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './out',
  // /pricing is unlinked and marked noindex, so it should not be advertised in
  // the sitemap either. The social card is an asset, not a page.
  exclude: ['/admin/**', '/pricing', '/opengraph-image.png'],
  robotsTxtOptions: {
    // The documentation is a separate Docusaurus build served under
    // /documentation, so next-sitemap — which only walks ./out — never sees it.
    // Docusaurus emits its own sitemap there; this line names it for every
    // other crawler and keeps robots.txt honest about where content lives.
    additionalSitemaps: ['https://mfe-orchestrator.dev/documentation/sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/pricing'],
      },
    ],
  },
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (HIGH_PRIORITY.includes(path)) {
      priority = 1.0;
    } else if (MEDIUM_PRIORITY.includes(path)) {
      priority = 0.8;
    } else if (LOW_PRIORITY.includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
