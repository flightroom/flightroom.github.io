import type { Metadata } from "next";

export const SITE_URL = "https://flightroom.dev";
export const CONSOLE_URL = "https://console.flightroom.dev";
export const DOCS_URL = "https://flightroom.dev/documentation";
export const GITHUB_URL = "https://github.com/flightroom";
export const GITHUB_REPO_URL = "https://github.com/flightroom/flightroom";
/** The project's X account. It predates the rename, so it still carries the old handle. */
export const X_URL = "https://x.com/mfeorchestrator";
/** The all-in-one image that actually exists on Docker Hub today. */
export const DOCKER_IMAGE = "lory1990/flightroom:all-in-one";

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
  category: "Enterprise platform for AI-built apps and agents",
  /** The promise, in the words a buyer would use. */
  oneLiner: "Apps and AI agents, built by anyone, shipped in one click.",
  /** The mechanism, for people who need to know how before they trust it. */
  definition:
    "Flightroom is an open-source enterprise platform where anyone can build applications and AI agents by describing them in plain language. The AI writes the code in your own Git repositories, your engineers review it, and one click deploys it to your Kubernetes through GitOps and Argo CD, with your single sign-on, your roles and your AI models.",
} as const;

/**
 * The three pillars every page hangs off. Kept here so the home page, the
 * navigation and the structured data name them the same way.
 */
export const PILLARS = {
  build: { name: "Build with AI", path: "/ai" },
  ship: { name: "One-click deploy", path: "/kubernetes" },
  enterprise: { name: "Enterprise", path: "/enterprise" },
} as const;

export const CORE_KEYWORDS = [
  "Flightroom",
  "enterprise AI app builder",
  "build AI agents without code",
  "citizen developer platform",
  "AI app generator enterprise",
  "one-click deploy Kubernetes",
  "Argo CD GitOps",
  "internal developer platform",
  "self-hosted AI platform",
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
