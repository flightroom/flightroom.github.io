import { faqs } from "./faqs";
import { CONSOLE_URL, DOCS_URL, FORMER_NAME, GITHUB_URL, PRODUCT, SITE_NAME, SITE_URL, X_URL } from "./seo";

/**
 * JSON-LD builders. Google reads these to understand what the product is and
 * to render rich results — the FAQ one is the realistic path to a first click
 * on question-shaped queries, which is what most of our impressions are.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    // The project was called MFE Orchestrator until October 2026.
    alternateName: FORMER_NAME,
    url: SITE_URL,
    description: PRODUCT.definition,
    // Every profile the project actually holds. An entity anchored in one
    // place is a weak entity: these are how an answer engine confirms that the
    // GitHub organisation, the X account and this site are one thing.
    sameAs: [GITHUB_URL, X_URL],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: PRODUCT.definition,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: PRODUCT.category,
    description: PRODUCT.definition,
    url: SITE_URL,
    downloadUrl: GITHUB_URL,
    softwareHelp: DOCS_URL,
    operatingSystem: "Any (web-based, or self-hosted with Docker, Helm on Kubernetes, or Terraform/OpenTofu)",
    isAccessibleForFree: true,
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: CONSOLE_URL,
      description: "Free to start on the hosted console; free to self-host.",
    },
    featureList: [
      "Micro frontend version management per environment",
      "Deploy a micro frontend without rebuilding the host application",
      "Canary releases and one-click rollback to a previous snapshot",
      "Module Federation configuration for Vite and Webpack",
      "Backend service templates for Node.js, Python, Spring Boot and Quarkus",
      "GitOps deploys to Kubernetes with Argo CD",
      "Gateway API exposure per environment",
      "Plain-language change requests delivered as branches or pull requests",
      "Bring your own AI model: Claude, GPT on Azure OpenAI, Gemini",
      "Remote MCP server for Claude, Claude Code, Cursor, VS Code and Gemini CLI",
    ],
    author: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * A single question/answer pair rendered as a standalone QAPage-style entity,
 * used by the definitional pages so their answer is eligible on its own.
 */
export function definedTermSchema({
  name,
  description,
  path,
  alternateNames = [],
}: {
  name: string;
  description: string;
  path: string;
  alternateNames?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}${path}#term`,
    name,
    description,
    alternateName: alternateNames,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Micro frontend architecture",
      url: `${SITE_URL}/what-is-a-micro-frontend`,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to ship a change with Flightroom",
    description:
      "Go from a template or an existing repository to a change running in an environment, with a pull request and CI in between.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Create from a template or connect a repository",
        text: "Start a micro frontend or a backend service from a template, or connect an existing GitHub, GitLab or Azure DevOps repository.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Make the change and open a pull request",
        text: "Edit the code yourself, or describe the change in plain language and let the AI agent propose it on a branch. Open a pull request for review.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Let CI build and register the version",
        text: "The pipeline builds the artifact or image and registers the new version with Flightroom.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deploy to an environment",
        text: "Micro frontends are served at runtime without rebuilding the host. Services are committed to Git and synced to Kubernetes by Argo CD. Rollback re-activates the previous snapshot.",
      },
    ],
  };
}
