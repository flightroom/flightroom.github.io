/**
 * Sitemap generation. Priorities are set per page rather than left flat: the
 * homepage and the three pillar pages are what we want crawled most often,
 * while the orphaned pricing page is excluded and the legal pages are
 * de-prioritised.
 */
const HIGH_PRIORITY = ['/', '/ai', '/kubernetes', '/enterprise'];
const LOW_PRIORITY = ['/privacy-policy', '/cookie-policy'];

module.exports = {
  siteUrl: 'https://flightroom.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './out',
  // /pricing is unlinked and marked noindex, so it should not be advertised in
  // the sitemap either. The social card is an asset, not a page. The three
  // old micro frontend URLs are noindex redirect stubs to the home page.
  exclude: [
    '/admin/**',
    '/pricing',
    '/opengraph-image.png',
    '/micro-frontends',
    '/what-is-a-micro-frontend',
    '/module-federation',
  ],
  robotsTxtOptions: {
    // The documentation is a separate Docusaurus build served under
    // /documentation, so next-sitemap, which only walks ./out, never sees it.
    // Docusaurus emits its own sitemap there; this line names it for crawlers.
    additionalSitemaps: ['https://flightroom.dev/documentation/sitemap.xml'],
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
