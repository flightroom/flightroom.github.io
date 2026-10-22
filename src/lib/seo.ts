import type { Metadata } from "next";

export const SITE_URL = "https://flightroom.dev";
export const CONSOLE_URL = "https://console.flightroom.dev";
/**
 * The docs are still published from the old host: the flightroom/documentation
 * repository has no Pages site yet, and flightroom.dev/documentation is a 404.
 * Switch this (and the docs sitemap in next-sitemap.config.js) once it moves.
 */
export const DOCS_URL = "https://mfe-orchestrator.dev/documentation";
/** The docs' golden path: zero to a deployed micro frontend and a rollback in ~10 minutes. */
export const QUICK_START_URL = `${DOCS_URL}/docs/quick-start`;
export const GITHUB_URL = "https://github.com/flightroom";
export const GITHUB_REPO_URL = "https://github.com/flightroom/flightroom";
/** The project's X account. It predates the rename, so it still carries the old handle. */
export const X_URL = "https://x.com/mfeorchestrator";
/** The all-in-one image that actually exists on Docker Hub today. */
export const DOCKER_IMAGE = "lory1990/mfe-orchestrator:all-in-one";

/**
 * The social card. src/app/opengraph-image.png is picked up by Next's file
 * convention for "/" only, so every other page shipped without an og:image and
 * previewed as a bare link on Slack, LinkedIn and the AI answer engines that
 * render a card. Naming it here gives all of them one.
 */
const OG_IMAGE = `${SITE_URL}/opengraph-image.png`;

export const SITE_NAME = "Flightroom";
/** The name the project had until October 2026, kept so old links and searches still connect. */
export const FORMER_NAME = "MFE Orchestrator";

/**
 * The product definition. Every page derives its copy from these lines so the
 * positioning stays identical across the site, the metadata and the JSON-LD.
 */
export const PRODUCT = {
  /** The category we want to be found in. */
  category: "Open-source platform for micro frontends and services on Kubernetes",
  /** The promise, in the words a team would use. */
  oneLiner: "Build, ship and run your whole product on Kubernetes.",
  /** The mechanism, for people who need to know how before they trust it. */
  definition:
    "Flightroom is an open-source platform that takes micro frontends and backend services from template to Kubernetes. It versions every build, releases micro frontends without rebuilding the host, deploys services through GitOps with Argo CD, and lets anyone on the team describe a change in plain language and get it back as a pull request.",
} as const;

/**
 * The three pillars every page hangs off. Kept here so the home page, the
 * navigation and the structured data name them the same way.
 */
export const PILLARS = {
  microFrontends: { name: "Micro frontends", path: "/micro-frontends" },
  kubernetes: { name: "Kubernetes", path: "/kubernetes" },
  ai: { name: "AI", path: "/ai" },
} as const;

/**
 * "MFE" alone is an ambiguous acronym, so the vocabulary here always pairs it
 * with the spelled-out term, and covers the three spellings people actually
 * type: "micro frontend", "micro-frontend" and "microfrontend".
 */
export const CORE_KEYWORDS = [
  "Flightroom",
  "micro frontend platform",
  "micro frontend orchestration",
  "Kubernetes developer platform",
  "Argo CD GitOps",
  "internal developer platform",
  "AI code changes pull request",
  "MFE orchestrator",
  "Module Federation",
];

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/faq". Used for canonical and og:url. */
  path: string;
  keywords?: string[];
  /** Set for pages that should stay out of the index (orphaned, thin, legal). */
  noindex?: boolean;
}

/**
 * Builds a full metadata object for a page. Centralised because the previous
 * per-page copies drifted: one page canonicalised itself to a different URL,
 * and none of them set an OG image.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  noindex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [...keywords, ...CORE_KEYWORDS],
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
