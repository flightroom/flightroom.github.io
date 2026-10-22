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
      "Build applications and AI agents by describing them in plain language",
      "AI writes the code on a branch in your own Git repositories, starting from Flightroom's templates",
      "Pull request review, branch protection and CI stay in place",
      "One-click deploy to Kubernetes through GitOps and Argo CD",
      "Environments mapped to Kubernetes namespaces, with a URL and TLS per environment",
      "Backend templates for Node.js, Python, Spring Boot and Quarkus; web interfaces in React, Angular or Vue",
      "Single sign-on with Microsoft Entra ID, Google and Auth0, with organization and project roles",
      "Bring your own AI model: Claude, GPT on Azure OpenAI, Gemini",
      "Self-host with Helm, Docker Compose, a single container or Terraform/OpenTofu",
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
    name: "How to build and ship an app with Flightroom",
    description:
      "Describe an application or an AI agent, review what the AI wrote, and deploy it to your Kubernetes in one click.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Describe what you need",
        text: "Say what the application or the agent should do. Flightroom starts from one of its templates.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "The AI writes it on a branch",
        text: "The AI writes the code on a branch in your Git repository, using the AI model your organization chose. The base branch is untouched.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Review the pull request",
        text: "Open a pull request. With the base branch protected, your engineers review it and your CI runs before it merges.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deploy in one click",
        text: "Press Deploy. The change is committed to Git and Argo CD syncs it to the Kubernetes environment you picked.",
      },
    ],
  };
}
