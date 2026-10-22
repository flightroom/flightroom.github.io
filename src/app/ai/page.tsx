import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Cpu,
  Database,
  FileLock,
  GitBranch,
  GitPullRequest,
  Headset,
  KeyRound,
  LayoutTemplate,
  ListChecks,
  Megaphone,
  MessageSquare,
  Plug,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Truck,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import AiChangeMock from "@/components/ai/AiChangeMock";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import { CONSOLE_URL, DOCS_URL, PILLARS, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Build Apps and AI Agents in Plain Language",
  description:
    "Anyone in the company describes the app or AI agent they need. Flightroom's AI writes it in your repositories from Flightroom's templates, for engineers to review.",
  path: PILLARS.build.path,
  keywords: [
    "AI app builder",
    "build AI agents",
    "enterprise AI app builder",
    "citizen developer",
    "natural language to code",
    "AI internal tools builder",
    "AI agent builder for business teams",
    "AI code generation from templates",
    "AI pull request",
    "remote MCP server",
    "Claude Code MCP",
    "bring your own LLM",
  ],
});

const generateSteps = [
  {
    title: "Describe it",
    description:
      "Open an empty domain, write what the team needs and press Generate.",
  },
  {
    title: "Edit the plan",
    description:
      "The AI proposes up to 3 web interfaces and 3 backend services, each with a name, a template and a repository. Change the list before anything is created.",
  },
  {
    title: "Get real repositories",
    description:
      "On confirmation the console creates each repository from its template, CI pipeline included, in your GitHub, GitLab or Azure DevOps.",
  },
  {
    title: "Get a first version",
    description:
      "The agent writes the first version on top, on a branch per repository. One AI job spans up to 10 repositories, so an API and the screens that call it change together.",
  },
];

const improveSteps = [
  {
    title: "Ask for the change",
    description:
      "Pick any app, service or whole domain and describe the change: a new field, a new rule, a new screen.",
  },
  {
    title: "Refine through chat",
    description:
      "Keep talking to the agent until it is right. Each answer replaces the previous proposal on the same branch, and you see every file it changed.",
  },
  {
    title: "Open a pull request, apply or discard",
    description:
      "Hand engineers a pull request to review, apply it to the base branch where that is allowed, or throw it away. Your CI runs as it always does.",
  },
];

const personas = [
  {
    icon: Truck,
    role: "Operations",
    request: "A page where warehouse leads log late deliveries, with a weekly count per carrier.",
  },
  {
    icon: Wallet,
    role: "Finance",
    request: "An agent that checks each expense claim against the travel policy and flags the ones over the limit before approval.",
  },
  {
    icon: UserCog,
    role: "HR",
    request: "An agent that answers employees' questions on leave and travel from the policy documents we give it.",
  },
  {
    icon: Megaphone,
    role: "Marketing",
    request: "An agent that drafts three subject lines for every campaign email, in our tone of voice.",
  },
  {
    icon: BarChart3,
    role: "Sales operations",
    request: "A form for discount requests that routes anything above 15% to the regional manager.",
  },
  {
    icon: Headset,
    role: "Customer care",
    request: "Add the customer's last three orders to the ticket screen, next to the conversation.",
  },
];

const backendTemplates = [
  { name: "Node.js & Fastify", language: "TypeScript" },
  { name: "Python & FastAPI", language: "Python" },
  { name: "Spring Boot", language: "Java" },
  { name: "Quarkus", language: "Java" },
];

const guardrails = [
  {
    icon: GitBranch,
    title: "A branch of its own",
    description:
      "Every proposal is committed to an ai/… branch. The base branch stays untouched until someone acts on it.",
  },
  {
    icon: GitPullRequest,
    title: "Review where you already review",
    description:
      "Open a pull request on GitHub or Azure DevOps, or a merge request on GitLab. The request is quoted in the description.",
  },
  {
    icon: ShieldCheck,
    title: "Branch protection holds",
    description:
      "Apply pushes straight to the base branch, but never forced. A protected branch refuses it and the console suggests a pull request.",
  },
  {
    icon: FileLock,
    title: "Hands off CI, lockfiles and secrets",
    description:
      "The agent cannot change CI configuration or lockfiles, and cannot read files that usually hold credentials, such as .env or private keys.",
  },
  {
    icon: ListChecks,
    title: "Bounded requests",
    description:
      "At most 20 files and 500 KB written, and 40 model rounds, per request. Token usage is shown for every one.",
  },
  {
    icon: Users,
    title: "Roles decide who builds",
    description:
      "Project members can ask for changes. Viewers can read the requests but cannot ask for, apply or discard one.",
  },
];

const models = [
  { family: "Claude", where: "Anthropic API, Azure AI Foundry, AWS Bedrock" },
  { family: "GPT", where: "Azure OpenAI" },
  { family: "Gemini", where: "Gemini API" },
];

const mcpClients = ["Claude", "Claude Code", "Cursor", "VS Code", "Gemini CLI"];

export default function AiPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: PILLARS.build.name, path: PILLARS.build.path }])} />

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="min-w-0 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary-strong">
              <Sparkles className="h-4 w-4" />
              {PILLARS.build.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Describe the app or the agent.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                The AI builds it.
              </span>
            </h1>
            {/* Written to stand alone as the answer to "what does Build with AI do". */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Anyone in the company, from finance to customer care, describes what they need.
              Flightroom&apos;s AI writes it on a branch of your own Git repositories, starting from
              Flightroom&apos;s templates. Protect the base branch and it goes through review. Then one
              click deploys it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start building free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                  <BookOpen className="w-5 h-5" />
                  Read the docs
                </Button>
              </a>
            </div>
          </div>
          <AiChangeMock />
        </header>

        {/* Generate on an empty domain */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From an empty domain{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">to a first version</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A domain groups the interfaces and services of one business capability. Start with
              nothing in it and one request gets you working code.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generateSteps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-primary/20 bg-surface/30 p-6">
                <span className="text-sm font-mono text-primary-strong">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Keep improving */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Keep improving it</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The first version is a start. The people who use the app ask for the next change
              themselves, on any app or service of the project.
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-6">
            {improveSteps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-primary/20 bg-surface/30 p-6">
                <span className="text-sm font-mono text-primary-strong">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="text-center text-muted-foreground">
            Once it is merged,{" "}
            <Link href={PILLARS.ship.path} className="text-primary-strong hover:underline">
              one click deploys it
            </Link>{" "}
            to your Kubernetes.
          </p>
        </section>

        {/* Agents */}
        <section className="max-w-5xl mx-auto space-y-8">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <Bot className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl tracking-normal font-semibold text-foreground">
                  What an agent is in Flightroom
                </h2>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-muted-foreground leading-relaxed">
              <div className="min-w-0 space-y-2">
                <h3 className="font-medium text-foreground">An agent is an app</h3>
                <p>
                  It is a service that reasons with a model and calls your systems. The AI writes it
                  like any other service, usually from the Python &amp; FastAPI or the Node.js &amp;
                  Fastify template, and your engineers review it the same way.
                </p>
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="font-medium text-foreground">Your model, your keys</h3>
                <p>
                  The agent calls the AI model your team chooses. Its API key is a secret of the
                  service, set per environment, so test and production can use different keys.
                </p>
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="flex items-center gap-2 font-medium text-foreground">
                  <Database className="h-4 w-4 text-primary-strong" />
                  Your existing data
                </h3>
                <p>
                  Register the databases it should reach (PostgreSQL, MySQL, MariaDB, SQL Server or
                  Oracle) and test the connection from the console. The service declares the
                  variables it needs, and the credentials stay in per-environment secrets.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personas */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What teams ask for</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people closest to the problem write the request. Engineers spend their time on
              review instead of on translating tickets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map(({ icon: Icon, role, request }) => (
              <Card key={role} className="border-primary/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{role}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="flex gap-2 text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0 text-primary-strong/70" />
                    <span>&ldquo;{request}&rdquo;</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section className="max-w-5xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <LayoutTemplate className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl tracking-normal font-semibold text-foreground">
                  Templates you build on
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The AI never starts from a blank page. Every new app begins from a template your
                engineers can read, with a Docker image, health checks and an OpenAPI description
                already in place.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="min-w-0 space-y-3">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <Server className="h-4 w-4 text-primary-strong" />
                    Backend services and agents
                  </h3>
                  <ul className="divide-y divide-primary/10 rounded-lg border border-primary/10">
                    {backendTemplates.map((template) => (
                      <li key={template.name} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
                        <span className="text-foreground">{template.name}</span>
                        <span>{template.language}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-0 space-y-3">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <LayoutTemplate className="h-4 w-4 text-primary-strong" />
                    Web interfaces
                  </h3>
                  <p className="text-sm">
                    Screens, forms and dashboards in React, Angular or Vue, built and deployed as
                    their own app.
                  </p>
                  <p className="text-sm">
                    Every template ships an AGENTS.md and a CLAUDE.md, so any coding agent, ours or
                    yours, knows the conventions of a repository from its first commit. Templates are
                    MIT licensed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guardrails */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The guardrails</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every AI change starts on a branch. Review, branch protection and CI stay where they
              are: protect the base branch and every AI change goes through review.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guardrails.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-primary/20 bg-surface/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          {/* The agent never runs code. Saying so plainly is what makes the
              rest of the page credible to an engineer. */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-2">
            <h3 className="font-semibold text-foreground">Your CI stays the judge</h3>
            <p className="text-muted-foreground leading-relaxed">
              The agent reads and writes files. It does not install, build or test anything: your
              pipeline checks every branch it pushes, exactly as it checks a colleague&apos;s. Since a
              pushed branch runs CI with the repository secrets, keep deploy secrets on protected
              branches. Teams can also write an AI context for each project, domain and service,
              so the agent follows their conventions.
            </p>
          </div>
        </section>

        {/* Models and assistant */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <Cpu className="h-6 w-6" />
                </div>
                <h2 className="text-2xl tracking-normal font-semibold text-foreground">
                  Bring your own model
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Each organization configures the models it is allowed to use, with its own
                credentials, encrypted at rest when SECRETS_ENCRYPTION_KEY is set. Admins can restrict a project to some of them, or
                turn AI off for it.
              </p>
              <dl className="divide-y divide-primary/10 rounded-lg border border-primary/10">
                {models.map((model) => (
                  <div key={model.family} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3">
                    <dt className="font-medium text-foreground sm:w-20">{model.family}</dt>
                    <dd className="text-sm text-muted-foreground">{model.where}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <Card className="border-primary/20 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-2xl tracking-normal font-semibold text-foreground">
                  An assistant in the console
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Press{" "}
                <kbd className="rounded border border-primary/30 bg-surface px-1.5 py-0.5 font-mono text-sm text-foreground">
                  ⌘J
                </kbd>{" "}
                and ask: create environments, check which version runs where, start a
                deploy. It acts with your permissions, never more.
              </p>
              <p>
                Anything destructive, such as a deploy, a rollback or a deletion, stops on a
                confirmation card that names exactly what will change. It runs only when you
                confirm, and every write it makes is written to the server log.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* MCP */}
        <section className="max-w-5xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <Plug className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl tracking-normal font-semibold text-foreground">
                  Use the AI tools you already have
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Flightroom runs a remote MCP server. Connect your own client and it can read your
                projects, manage apps and services, and deploy, with the same rules as the console.
              </p>
              <ul className="flex flex-wrap gap-2">
                {mcpClients.map((client) => (
                  <li
                    key={client}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-foreground"
                  >
                    {client}
                  </li>
                ))}
              </ul>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="min-w-0 space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <KeyRound className="h-4 w-4 text-primary-strong" />
                    OAuth 2.1 sign-in
                  </h3>
                  <p className="text-sm">
                    Sign in with PKCE, pick the projects and whether the client may change things.
                    A project API key works for clients that cannot do OAuth.
                  </p>
                </div>
                <div className="min-w-0 space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary-strong" />
                    Role checked on every call
                  </h3>
                  <p className="text-sm">
                    Demote a member and their client loses write access on its next request. A
                    viewer&apos;s client can only read.
                  </p>
                </div>
                <div className="min-w-0 space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <Terminal className="h-4 w-4 text-primary-strong" />
                    Your agent, our pull request
                  </h3>
                  <p className="text-sm">
                    A coding agent such as Claude Code can get a repository to clone, edit it
                    locally and submit the change. Flightroom pushes it to a new branch and opens
                    the pull request.
                  </p>
                </div>
              </div>
              <p className="text-sm">
                On a self-hosted install the MCP server is off until you turn it on.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Setup */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Set up once, then everyone builds</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IT or a platform admin does the first two steps. After that, building is open to every
              member of the project.
            </p>
          </div>
          <ol className="grid md:grid-cols-3 gap-6">
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <Boxes className="h-5 w-5 text-primary-strong" />
              <h3 className="font-semibold text-foreground">Connect your Git provider</h3>
              <p className="text-sm text-muted-foreground">
                An admin connects GitHub, GitLab or Azure DevOps to the project.
              </p>
            </li>
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <Cpu className="h-5 w-5 text-primary-strong" />
              <h3 className="font-semibold text-foreground">Pick a model</h3>
              <p className="text-sm text-muted-foreground">
                Add Claude, GPT or Gemini to the organization with your own credentials.
              </p>
            </li>
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <MessageSquare className="h-5 w-5 text-primary-strong" />
              <h3 className="font-semibold text-foreground">Invite the team</h3>
              <p className="text-sm text-muted-foreground">
                Everyone with a member role can describe an app, an agent or a change. Protect the
                base branch and engineers review what comes back.
              </p>
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Start free in the console
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/start-now">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                Get started
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <PillarLinks current="build" />
      <WaitingListSection />
    </>
  );
}
