# Flightroom website

Source of [flightroom.dev](https://flightroom.dev), the public site for Flightroom, the open-source enterprise platform where anyone builds apps and AI agents by describing them, and ships them in one click to Kubernetes. Next.js 15 static export, Tailwind v4, React 19.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3020
```

`@flightroom/design-system` comes from GitHub Packages. Authenticate first:

```bash
pnpm config set //npm.pkg.github.com/:_authToken <token with read:packages>
```

## Build

```bash
pnpm build    # static export to ./out, then next-sitemap writes sitemap and robots.txt
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `./out` to GitHub Pages. Pull requests against `main` run the same build without deploying.

## Where things live

- `src/lib/seo.ts`: shared constants (site name, URLs, Docker image, product definition, page metadata helper). Pages import from here instead of hardcoding.
- `src/lib/structuredData.ts`: JSON-LD builders.
- `src/lib/faqs.ts`: FAQ content, also used for the FAQ structured data.
- `next-sitemap.config.js`: sitemap priorities and robots.txt.
- `public/llms.txt`: pointer for LLM crawlers.

## Social card

`src/app/opengraph-image.png` is a committed PNG. To regenerate it after changing copy, follow the steps in the header comment of `scripts/opengraph-image.tsx`.
