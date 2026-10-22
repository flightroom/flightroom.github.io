import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/design-system";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  CheckCircle2,
  Cloud,
  FolderInput,
  GitBranch,
  GitCompare,
  GitMerge,
  History,
  Layers,
  Network,
  Rocket,
  Settings,
  Ship,
  Sparkles,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import { CONSOLE_URL, FORMER_NAME, PILLARS, QUICK_START_URL, SITE_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

/**
 * The micro frontend pillar. This is the product the site used to be about,
 * so it inherits the copy and the keywords that already earned impressions on
 * the home page, which now speaks for the whole platform.
 */

export const metadata: Metadata = pageMetadata({
  title: "Micro Frontend Deployment & Versioning",
  description:
    "Deploy, version and roll back micro frontends without rebuilding the host. Canary releases, per-environment config and Module Federation for Vite and Webpack.",
  path: PILLARS.microFrontends.path,
  keywords: [
    "micro frontend orchestration",
    "micro frontend deployment",
    "micro frontend versioning",
    "micro frontend version management",
    "micro frontend rollback",
    "canary release frontend",
    "module federation",
    "module federation orchestration",
    "deploy micro frontend without rebuilding host",
    "open source micro frontend platform",
  ],
});

const withoutFlightroom = [
  "The list of micro frontends and their URLs lives in the host repository",
  "Releasing one micro frontend means rebuilding and redeploying the shell",
  "Two pipelines have to succeed for one change to reach production",
  "A rollback is a revert, a rebuild and a wait",
  "Teams queue behind each other for a shared release window",
  "Nobody can say with certainty which version is live in UAT",
];

const withFlightroom = [
  "Versions live in a registry, not hardcoded in the host",
  "Publish a micro frontend and assign it to an environment. The shell is untouched",
  "One pipeline per micro frontend, ending in an upload step",
  "A rollback re-activates the previous snapshot",
  "Each team releases on its own schedule",
  "Every environment shows exactly which version it serves",
];

const qualifiers = [
  {
    title: "You run more than one frontend team",
    description: "Several teams contribute to one product and keep colliding in the same release train.",
  },
  {
    title: "You already use Module Federation",
    description:
      "The loading mechanism works, but a remotes configuration file is maintained by hand and committed to the host.",
  },
  {
    title: "Your releases are blocked by the shell",
    description: "A one-line change in a widget still costs a full host build, and the build is slow.",
  },
  {
    title: "You need control over where artifacts live",
    description: "Builds have to sit in your own S3, Azure or Google Cloud storage, or stay on-premise.",
  },
];

const releaseFeatures = [
  {
    icon: Rocket,
    title: "Independent releases",
    description:
      "Release one micro frontend without rebuilding or redeploying the host application. A small change costs a small deploy.",
  },
  {
    icon: History,
    title: "Immutable snapshots, one-click rollback",
    description:
      "Every deployment is an immutable snapshot. Rolling back re-activates the previous one. No revert, no rebuild, no pipeline queue.",
  },
  {
    icon: Settings,
    title: "One build, every environment",
    description:
      "Per-environment and global variables reach the browser at boot through a script injected into the host. DEV, UAT, PROD and any environment you add run the same build.",
  },
  {
    icon: GitCompare,
    title: "Module Federation, generated",
    description:
      "Flightroom generates the Module Federation configuration for Vite and Webpack. No hand-maintained remotes file in the host repository.",
  },
  {
    icon: GitBranch,
    title: "Canary releases",
    description:
      "Send a new version to a random percentage of users, keep it sticky per session, or limit it to an explicit list of enrolled users.",
  },
  {
    icon: Cloud,
    title: "Storage you choose",
    description:
      "Keep artifacts in the built-in hub, AWS S3, Azure Blob Storage or Google Cloud Storage, or point to a custom URL on-premise.",
  },
];

const operateFeatures = [
  {
    icon: GitMerge,
    title: "CI/CD pipelines",
    description:
      "Ready-made pipelines for GitHub Actions, GitLab CI and Azure DevOps. The API and manual upload cover everything else.",
  },
  {
    icon: Layers,
    title: "Builds page",
    description: "Live pipeline status for every micro frontend on one page, next to the versions they produce.",
  },
  {
    icon: Network,
    title: "Dependency analysis",
    description:
      "Cross-repository dependency analysis with peer-dependency alignment, so shared libraries stay on compatible versions.",
  },
  {
    icon: FolderInput,
    title: "Bulk repository import",
    description: "Bring an existing estate in at once by importing many repositories in one pass.",
  },
];

const templates = [
  { name: "React", detail: "Vite and Webpack" },
  { name: "Angular", detail: "Vite and Webpack" },
  { name: "Vue", detail: "Vite and Webpack" },
  { name: "Web components", detail: "React" },
  { name: "single-spa", detail: "Host and remotes" },
  { name: "micro-lc", detail: "Host and remotes" },
];

const steps = [
  {
    title: "Build",
    description:
      "Each micro frontend is built in its own repository, with its own pipeline, in whatever framework the team prefers.",
  },
  {
    title: "Publish",
    description:
      "The pipeline uploads the artifact from GitHub Actions, GitLab CI, Azure DevOps or the API. Flightroom records the version and stores the build.",
  },
  {
    title: "Assign",
    description:
      "Choose which version each environment serves, for everyone at once or gradually with a canary release.",
  },
  {
    title: "Load at runtime",
    description:
      "The host reads its configuration at startup and loads the assigned versions. No host rebuild. Rollback is the same step in reverse.",
  },
];

const runtimeConfig = `{
  "environment": "production",
  "microfrontends": {
    "header": {
      "version": "2.1.0",
      "entry": "https://cdn.example.com/header/2.1.0/remoteEntry.js"
    },
    "checkout": {
      "version": "4.2.0",
      "entry": "https://cdn.example.com/checkout/4.2.0/remoteEntry.js",
      "canary": { "version": "4.3.0-rc.1", "traffic": 10 }
    }
  }
}`;

// Kept on this page rather than in structuredData: the site-wide HowTo now
// describes the whole platform, this one only the micro frontend release.
const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}${PILLARS.microFrontends.path}#howto`,
  name: "How to deploy a micro frontend without rebuilding the host",
  description:
    "Publish a new version of a micro frontend with Flightroom and serve it to an environment without rebuilding the host application.",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

export default function MicroFrontendsPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Micro frontends", path: PILLARS.microFrontends.path }]),
          howTo,
        ]}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Micro frontend deployment &amp; versioning
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Ship
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> micro frontends </span>
                  without rebuilding the host
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  Flightroom stores every build, decides which version each environment serves, and
                  hands your host application the runtime configuration it needs.
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Born as {FORMER_NAME}, now the frontend half of Flightroom.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                    Start free — no install
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link href={QUICK_START_URL}>
                  <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                    <BookOpen className="w-5 h-5" />
                    Quick start — 10 minutes
                  </Button>
                </Link>
              </div>

              <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                {["No host rebuild to release", "Canary releases & rollback", "Vite and Webpack"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The mechanism instead of a picture: what the host actually reads
                at startup is the most convincing thing we can show a developer. */}
            <Card className="bg-surface/50 backdrop-blur-sm border-primary/20 shadow-card min-w-0">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">What your host receives at runtime</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Illustrative configuration for one environment: versions, entry points and an
                  in-flight canary.
                </p>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                  <code>{runtimeConfig}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            One widget changed.
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Why is the shell rebuilding?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Micro frontends promise independent deployment. Most setups do not deliver it, because the
            host still decides at build time what to load. Flightroom moves that decision to runtime.
          </p>
          <p className="text-muted-foreground">
            New to the idea? Read{" "}
            <Link href="/what-is-a-micro-frontend" className="text-primary hover:underline">
              what a micro frontend is
            </Link>{" "}
            or{" "}
            <Link href="/module-federation" className="text-primary hover:underline">
              what Module Federation leaves open
            </Link>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-surface/50 backdrop-blur-sm border-amber-500/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-foreground">Micro frontends wired by hand</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {withoutFlightroom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500/50 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-surface/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-foreground">With Flightroom</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {withFlightroom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            You probably need this if&hellip;
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifiers.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm"
              >
                <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything a micro frontend needs
            <span className="bg-gradient-primary bg-clip-text text-transparent"> after the build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Versions, environments, rollout and storage, plus the runtime wiring your host depends on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releaseFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="bg-surface/50 backdrop-blur-sm border-border/50 hover:bg-surface-variant transition-all duration-300 hover:shadow-glow group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mt-20 mb-10">
          Pipelines and repositories
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operateFeatures.map((feature) => (
            <Card key={feature.title} className="bg-surface/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Templates for the stack
            <span className="bg-gradient-primary bg-clip-text text-transparent"> you already run</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start a host or a remote from a template, or bring your own. Flightroom is
            framework-agnostic: it versions and serves builds, whatever produced them.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {templates.map((template) => (
            <div
              key={template.name}
              className="flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-surface/30"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <Boxes className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground">{template.name}</div>
                <div className="text-sm text-muted-foreground">{template.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              How it
              <span className="bg-gradient-primary bg-clip-text text-transparent"> works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four steps, and only one of them happens at release time.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step, index) => (
              <li key={step.title} className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <p className="text-center text-muted-foreground">
            The exact integration for your host is in the{" "}
            <Link href={QUICK_START_URL} className="text-primary hover:underline">
              quick start
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Bridge to the other pillars */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            When the frontend is
            <span className="bg-gradient-primary bg-clip-text text-transparent"> not the whole product</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The micro frontend core sits next to the rest of Flightroom and uses the same projects,
            environments and repositories.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-surface/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Ship className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Run the shell on Kubernetes</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The host shell can also run as a container, deployed to Kubernetes through GitOps and
                Argo CD next to your backend services.
              </p>
              <Link
                href={PILLARS.kubernetes.path}
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Kubernetes in Flightroom
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-surface/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Ask for a change in plain words</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Anyone on the team can describe a change to a micro frontend and get it back on a
                branch or as a pull request. Review and CI stay in place.
              </p>
              <Link href={PILLARS.ai.path} className="inline-flex items-center gap-1 text-primary hover:underline">
                AI in Flightroom
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Release your next micro frontend
                <span className="bg-gradient-primary bg-clip-text text-transparent"> without touching the host</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect a repository, publish a build, and assign it to an environment. Free to start
                on the hosted console, free to self-host.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start free — no install
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href={QUICK_START_URL}>
                <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                  <BookOpen className="w-5 h-5" />
                  Quick start — 10 minutes
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Running it yourself?{" "}
              <Link href="/start-now" className="text-primary hover:underline">
                Self-host Flightroom
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <PillarLinks current="microFrontends" />
    </div>
  );
}
