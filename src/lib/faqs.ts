/**
 * Single source of truth for the FAQ: the page renders it and the FAQPage
 * JSON-LD is generated from it, so a rich result can never describe an answer
 * that is no longer on the page.
 *
 * Answers are plain text on purpose — structured data does not accept markup,
 * and each one opens with a direct sentence so it can stand alone as a snippet.
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is Flightroom?",
    answer:
      "Flightroom is an open-source enterprise platform where anyone can build applications and AI agents by describing them. The AI writes the code on a branch of your own Git repositories, starting from Flightroom's templates; protect the base branch and it goes through review. One click deploys it to your Kubernetes through GitOps and Argo CD, with your single sign-on, your roles and your AI models.",
  },
  {
    question: "Who can build with Flightroom?",
    answer:
      "Anyone with a member role on a project can build. That includes people in operations, finance, HR, sales operations, marketing and customer care, not only developers. An admin connects the Git provider, the AI model and Argo CD once; after that, teams build inside those guardrails while engineers keep review through branch protection.",
  },
  {
    question: "Can non-developers really build apps?",
    answer:
      "Yes, by describing what they need instead of writing code. A person types a request in plain words, the AI writes the change on a branch of the repository, and they refine it through chat. On an empty domain, Generate proposes up to three interfaces and three backend services, creates the repositories from templates with CI, and writes the first version. Protect the base branch and the change goes through the same pull request review as any other code.",
  },
  {
    question: "What is an agent in Flightroom?",
    answer:
      "An agent is an app: a service that reasons with an AI model and calls your systems. You ask for it like any other app, the AI writes it from a backend template such as Python with FastAPI or Node.js with Fastify, and it calls the model your team chooses, with its API keys kept as per-environment secrets. Flightroom does not add a separate agent runtime; the agent is deployed and reviewed like every other service.",
  },
  {
    question: "How does one-click deploy work?",
    answer:
      "A Deploy button commits the new version to your Git repositories, and your Argo CD syncs it to the cluster. Each environment, such as dev, uat and prod, is a Kubernetes namespace, with its own URL and TLS certificate once exposure is set up. If the commit fails, nothing is deployed, and rolling back means deploying the previous version the same way.",
  },
  {
    question: "Is AI-generated code merged or deployed automatically?",
    answer:
      "No. The AI works on its own branch and never touches the base branch until a person acts. From there you open a pull or merge request for review, apply the change to the base branch (a protected branch refuses it), or discard it. Your CI builds and tests the change, and deploying is a separate click. In the console assistant, deploys, rollbacks and deletes wait for a confirmation.",
  },
  {
    question: "Where does the code live?",
    answer:
      "The code lives in your own GitHub, GitLab or Azure DevOps repositories. Flightroom creates them from templates with CI in place, and the deployment manifests and Helm values of every environment are committed to your repositories too. The code and the deployment manifests live in your Git; the console's own database holds settings, variables, secret values and AI conversations.",
  },
  {
    question: "Which AI models does Flightroom use? Can we use our own Azure or AWS contract?",
    answer:
      "Flightroom uses the models your organization configures, with your own keys: Claude through Anthropic, Azure AI Foundry or AWS Bedrock, GPT through Azure OpenAI, and Gemini. Using Azure AI Foundry, AWS Bedrock or Azure OpenAI keeps the traffic under the cloud contract you already have. Admins can restrict each project to some models, or turn AI off for a project entirely.",
  },
  {
    question: "Does our data leave our infrastructure?",
    answer:
      "That depends on where you run Flightroom and which model you choose. Self-hosted in your cloud or data center, the console, its database and your code stay with you, and prompts go only to the model provider you configured, which can be your own Azure or AWS account. On the hosted console, Flightroom stores your project data on its servers: AI changes clone the repository there, and repository tokens and model keys are stored there too. Self-hosting keeps all of it in your infrastructure. Self-hosted installs send one anonymous daily telemetry ping, which you can turn off.",
  },
  {
    question: "Which single sign-on providers are supported?",
    answer:
      "Flightroom signs people in with Microsoft Entra ID, Google or Auth0, or with local accounts. SAML and SCIM provisioning are not supported today; people are invited to organizations and projects from the console.",
  },
  {
    question: "What roles and permissions are there?",
    answer:
      "There are two layers of roles. In an organization, Owners and Admins administer it and reach every project, while Members reach only the projects they were invited to. In a project, Owners and Members build and deploy. Viewers cannot ask for or apply AI changes, create or rename repositories, change storages or databases, deploy through GitOps, or use the write tools of the MCP server and the console assistant. A membership can also be limited to some functional domains, and project API keys are scoped and carry an expiry date.",
  },
  {
    question: "Does the Flightroom console need access to our Kubernetes cluster?",
    answer:
      "No. The console never holds credentials for your cluster. It commits to your Git repositories and talks to the Argo CD API, and Argo CD, which you already run, syncs the cluster. Argo CD gets read-only credentials for the repositories.",
  },
  {
    question: "What do we need to run Flightroom?",
    answer:
      "You need a GitHub, GitLab or Azure DevOps account and a subscription to one supported AI model. For one-click GitOps deploys you also need a Kubernetes cluster with Argo CD 2.8 or later, and to expose apps on their own URLs, Traefik v3 with the Gateway API CRDs and cert-manager. To self-host the console, install it with the Helm chart, Docker Compose, the all-in-one container or Terraform, with MongoDB, Redis and an SMTP server.",
  },
  {
    question: "Which languages and templates are available?",
    answer:
      "Backend services start from Node.js with Fastify, Python with FastAPI, Spring Boot or Quarkus templates, and web interfaces from React, Angular or Vue templates. Every backend template builds a Docker image on port 8080 with health checks and an OpenAPI path preset, and ships an AGENTS.md and a CLAUDE.md so coding agents follow its conventions.",
  },
  {
    question: "Can apps use our existing databases?",
    answer:
      "Yes. You register connections to the PostgreSQL, MySQL, MariaDB, SQL Server or Oracle databases you already run and test them from the console, so an app can work with existing company data. Flightroom does not provision databases.",
  },
  {
    question: "Can we use Claude, Cursor or other AI tools through MCP?",
    answer:
      "Yes. Flightroom has a remote MCP server for Claude, Claude Code, Cursor, VS Code and Gemini CLI. Clients sign in with OAuth 2.1 and PKCE, the user's role is checked again on every call, and calls are rate limited. On self-hosted installs it is off until an operator turns it on.",
  },
  {
    question: "Is Flightroom open source and free? Can we self-host it?",
    answer:
      "Yes. Flightroom is open source under the Apache-2.0 license, with templates under MIT. Self-hosting is free, on your own Kubernetes or any host that runs Docker, on-prem or in any cloud, and the hosted console is free to start.",
  },
  {
    question: "What happens if we stop using Flightroom?",
    answer:
      "Your apps keep running. Apps deployed through GitOps have their code and their deployment manifests in your own Git repositories, and your own Argo CD keeps syncing the cluster from them.",
  },
];
