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
      "Flightroom is an open-source platform that takes micro frontends and backend services from template to Kubernetes. It versions every build, releases micro frontends without rebuilding the host, deploys services through GitOps with Argo CD, and lets anyone on the team describe a change in plain language and get it back on a branch or as a pull request.",
  },
  {
    question: "Is Flightroom the same as MFE Orchestrator?",
    answer:
      "Yes. Flightroom is the new name of MFE Orchestrator: same project, same team, wider scope. The micro frontend core is still there, and the platform now also deploys backend services to Kubernetes and makes AI code changes. Some artifacts, such as the all-in-one Docker image, still carry the old name.",
  },
  {
    question: "What does MFE stand for?",
    answer:
      "MFE stands for micro frontend (also written micro-frontend or microfrontend): a single, independently built and deployed piece of a web application, combined with others at runtime to form one product.",
  },
  {
    question: "What is a micro frontend orchestrator?",
    answer:
      "A micro frontend orchestrator is the control plane that decides which version of each micro frontend an environment serves, and delivers that decision to the host application at runtime. Without one, the list of micro frontends and their URLs is hardcoded in the host, so every release means rebuilding and redeploying the host. Flightroom started as exactly this, under the name MFE Orchestrator.",
  },
  {
    question: "Can I release a micro frontend without rebuilding the host?",
    answer:
      "Yes. The host reads the micro frontends it should load at runtime from the configuration Flightroom serves. You publish a new build, deploy it to an environment, and the change is live on the next page load. Every deployment is an immutable snapshot, and per-environment variables reach the browser at boot, so one build runs in every environment.",
  },
  {
    question: "How is Flightroom different from Module Federation alone?",
    answer:
      "Module Federation gives you the loading mechanism; it does not tell you which version to load. Teams usually end up maintaining a remotes file by hand in the host repository, which puts every micro frontend release back behind a host deploy. Flightroom generates the Module Federation configuration for Vite and Webpack and serves the versions per environment, so the mechanism stays and the bookkeeping goes away.",
  },
  {
    question: "How does Flightroom deploy to Kubernetes?",
    answer:
      "Flightroom deploys through Git. Every deploy commits to a configuration repository, with a namespace, ConfigMaps, Secrets and a Gateway per environment, and optionally to an applications repository with a Helm values file per service. Argo CD then syncs those repositories to the cluster. Each environment maps to a Kubernetes namespace, and apps are exposed through the Gateway API with TLS from cert-manager.",
  },
  {
    question: "Do I need Argo CD?",
    answer:
      "Only for the GitOps deploys to Kubernetes, and it has to be version 2.8 or later. Micro frontend releases do not need it. Backend services can also be deployed by your own pipeline, which reports the version back to Flightroom with an API key. When you use Argo CD, one button in the project settings creates the AppProject, the repository credentials and the ApplicationSets for you.",
  },
  {
    question: "Does the Flightroom console need access to my Kubernetes cluster?",
    answer:
      "No. The console talks only to the Argo CD API and to your Git repositories. It commits the desired state to Git, and Argo CD, running in your cluster, syncs it. Argo CD reads the repositories with read-only credentials.",
  },
  {
    question: "Which backend stacks are supported?",
    answer:
      "Flightroom ships service templates for Node.js with Fastify, Python with FastAPI, Spring Boot and Quarkus. Each one builds a Docker image listening on port 8080, with health checks and OpenAPI paths preset, and includes AGENTS.md and CLAUDE.md files so coding agents know the conventions. You can also register a database connection for PostgreSQL, MySQL, MariaDB, SQL Server or Oracle and test it from the console.",
  },
  {
    question: "Can non-developers really change code with Flightroom?",
    answer:
      "Yes, with engineers still in control. A product manager, designer or analyst describes the change in plain words, and Flightroom's AI agent edits the real repository and pushes the result to its own branch. From there they open a pull request, and engineers review and merge it as usual. An admin connects the Git provider and picks the AI model once; after that, every project member can ask. Viewers cannot.",
  },
  {
    question: "Which AI models does Flightroom support?",
    answer:
      "Flightroom works with Claude through the Anthropic API, Azure AI Foundry or AWS Bedrock, with GPT through Azure OpenAI, and with Gemini. Each organization configures its own models and credentials, and admins can restrict which models a project may use or turn AI off for it.",
  },
  {
    question: "Is AI-generated code merged automatically?",
    answer:
      "No. Every proposal is committed to its own ai/ branch and the base branch is untouched until a person acts. You can open a pull request for review, apply the change to the base branch, or discard it. Apply is never a forced push, so a protected branch refuses it. The agent does not run, build or test code, and it cannot change CI files or lockfiles: your CI checks the branch like any other.",
  },
  {
    question: "Can I use Claude, Claude Code or Cursor with Flightroom?",
    answer:
      "Yes. Flightroom runs a remote MCP server that Claude, Claude Code, Cursor, VS Code, Gemini CLI and other MCP clients can connect to. Clients sign in with OAuth 2.1 and PKCE, or a project API key, and your role is checked again on every call. A coding agent on your machine can clone a repository, edit it locally and submit the change, which Flightroom pushes to a new branch with a pull request. On self-hosted installs the MCP server is off until you enable it.",
  },
  {
    question: "Which CI/CD providers and storage does Flightroom work with?",
    answer:
      "Flightroom ships ready-made pipelines for GitHub Actions, GitLab CI and Azure DevOps, and also accepts builds through its API or a manual upload. Micro frontend artifacts are stored in the built-in hub, AWS S3, Azure Blob Storage, Google Cloud Storage, or a custom URL for on-premise hosting.",
  },
  {
    question: "How do rollbacks work for micro frontends?",
    answer:
      "A rollback re-activates the previous deployment snapshot. Every deployment is immutable, so going back is one click and nothing is rebuilt. Because the host is not rebuilt either, the time to recover does not depend on your build pipeline.",
  },
  {
    question: "Does Flightroom support canary releases?",
    answer:
      "Yes, for micro frontends. A canary serves a new version to part of your users while the rest stay on the current one. You choose a random percentage, a split that stays sticky for each session, or an explicit list of enrolled users.",
  },
  {
    question: "Is Flightroom free and open source, and can I self-host it?",
    answer:
      "Yes. Flightroom is open source under the Apache-2.0 license, with templates under MIT. The hosted console is free to start, and self-hosting has no licence cost. You can run it on Kubernetes with the Helm chart, with Docker Compose, as a single all-in-one container, or with Terraform or OpenTofu. Self-hosted installs send one anonymous daily telemetry ping, which you can turn off.",
  },
];
