import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  Cpu,
  FileLock,
  GitBranch,
  GitPullRequest,
  Headset,
  KeyRound,
  LayoutTemplate,
  ListChecks,
  MessageSquare,
  Palette,
  Plug,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserCog,
  Users,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import AiChangeMock from "@/components/ai/AiChangeMock";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import { CONSOLE_URL, DOCS_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "AI Code Changes as Pull Requests, for Everyone",
  description:
    "Describe a change in plain words. Flightroom's AI agent edits your real repository on a branch and hands back a pull request your engineers review and merge.",
  path: "/ai",
  keywords: [
    "AI code changes",
    "AI pull request",
    "natural language to code",
    "citizen developer",
    "vibe coding for teams",
    "AI coding agent for teams",
    "MCP server",
    "remote MCP server",
    "Claude Code MCP",
    "Cursor MCP",
    "AI app generator from templates",
    "bring your own LLM",
  ],
});

const personas = [
  {
    icon: UserCog,
    role: "Product managers",
    request: "Add a “Save for later” link under each item in the cart.",
  },
  {
    icon: Palette,
    role: "Designers",
    request: "Use the new brand colors on the login page and make the primary button larger.",
  },
  {
    icon: BarChart3,
    role: "Analysts",
    request: "Add a CSV export to the orders table, with the date and the total.",
  },
  {
    icon: Headset,
    role: "Support",
    request: "When a card is declined, tell the customer what to try next instead of “Error 402”.",
  },
];

const steps = [
  {
    title: "Describe it",
    description:
      "Type the change in plain words on a micro frontend, a backend service or a whole domain. Keep chatting to refine it.",
  },
  {
    title: "Review it",
    description:
      "The agent edits a clone of the real repository and the console pushes the result to its own branch. You see every file it changed.",
  },
  {
    title: "Ship it",
    description:
      "Open a pull request for your engineers, apply it to the base branch, or discard it. Your CI runs as it always does.",
  },
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
    title: "Roles decide who asks",
    description:
      "Project members can request changes. Viewers can read the requests but cannot ask for, apply or discard one.",
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
      <JsonLd schema={breadcrumbSchema([{ name: "AI", path: "/ai" }])} />

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              Anyone can build
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Everyone on the team can build.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Every change starts on a branch.
              </span>
            </h1>
            {/* Written to stand alone as the answer to "what does the AI do". */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Describe a change in plain words. Flightroom&apos;s agent edits the real repository on a
              branch, and you get back a pull request your engineers review and merge. Product
              managers, designers, analysts and support hand engineers a reviewable change instead of a ticket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Try it in the console
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

        {/* Describe / review / ship */}
        <section className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Describe it. Review it.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Ship it.</span>
          </h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-primary/20 bg-surface/30 p-6">
                <span className="text-sm font-mono text-primary">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Personas */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who asks for changes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The people closest to the problem write the request. Engineers spend their time on
              review instead of on translating tickets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {personas.map(({ icon: Icon, role, request }) => (
              <Card key={role} className="border-primary/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{role}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="flex gap-2 text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0 text-primary/70" />
                    <span>&ldquo;{request}&rdquo;</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Idea to running software */}
        <section className="max-w-5xl mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <LayoutTemplate className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl tracking-normal font-semibold text-foreground">
                  From an idea to a first version
                </h2>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Generate a domain</h3>
                <p>
                  On an empty functional domain, describe what it should do and press Generate. The
                  agent proposes the components it needs, up to 3 frontends and 3 backends, each with
                  a name, a template and a repository. You edit the list before anything is created.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Real repositories, with CI</h3>
                <p>
                  On confirmation the console creates each repository from its template, CI
                  pipeline included, in your GitHub, GitLab or Azure DevOps. Then the agent writes
                  the first version on top.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">One agent, many repositories</h3>
                <p>
                  Edit with AI on a domain sees up to 10 repositories at once, so one request can
                  change an API and the screens that call it. You still get one proposal per
                  repository, reviewed on its own.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guardrails */}
        <section className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The guardrails
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Review, branch protection and CI stay where they are. Protect the base branch and
              every AI change goes through review.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guardrails.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-primary/20 bg-surface/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
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

        {/* Models */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20 h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
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
                credentials, stored encrypted. Admins can restrict a project to some of them, or
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
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
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
                and ask in plain words: create environments, check which version runs where, start a
                deploy. It acts with your permissions, never more.
              </p>
              <p>
                Anything destructive, such as a deploy, a rollback or a deletion, stops on a
                confirmation card that names exactly what will change. It runs only when you
                confirm, and every write it makes is recorded in the audit log.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* MCP */}
        <section className="max-w-5xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
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
                projects, manage micro frontends and services, and deploy, with the same rules as
                the console.
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
                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <KeyRound className="h-4 w-4 text-primary" />
                    OAuth 2.1 sign-in
                  </h3>
                  <p className="text-sm">
                    Sign in with PKCE, pick the projects and whether the client may change things.
                    A project API key works for clients that cannot do OAuth.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Role checked on every call
                  </h3>
                  <p className="text-sm">
                    Demote a member and their client loses write access on its next request. A
                    viewer&apos;s client can only read.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <Terminal className="h-4 w-4 text-primary" />
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
                Every service template ships an AGENTS.md and a CLAUDE.md, so a coding agent knows
                the conventions of a repository from its first commit. On a self-hosted install the
                MCP server is off until you turn it on.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Setup */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Set up once, then everyone asks</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-6">
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <Boxes className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Connect your Git provider</h3>
              <p className="text-sm text-muted-foreground">
                An admin connects GitHub, GitLab or Azure DevOps to the project.
              </p>
            </li>
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Pick a model</h3>
              <p className="text-sm text-muted-foreground">
                Add Claude, GPT or Gemini to the organization with your own credentials.
              </p>
            </li>
            <li className="rounded-xl border border-primary/20 bg-surface/30 p-6 space-y-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Invite the team</h3>
              <p className="text-sm text-muted-foreground">
                Everyone with a member role can describe a change. Engineers review what comes back.
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

      <PillarLinks current="ai" />
      <WaitingListSection />
    </>
  );
}
