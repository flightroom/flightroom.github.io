import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import { ArrowRight, GitBranch, GitPullRequest, HardDrive, Layers, Scale, Server, Sparkles, UserCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import { CONSOLE_URL, FORMER_NAME, GITHUB_REPO_URL, PILLARS, SITE_NAME, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Why We Built Flightroom",
  description:
    "Flightroom began as MFE Orchestrator, to release micro frontends without rebuilding the shell. Why it grew to cover backend services, Kubernetes and AI changes.",
  path: "/about",
  keywords: [
    "about flightroom",
    "mfe orchestrator rename",
    "open source developer platform",
    "micro frontend platform history",
    "gitops developer platform",
  ],
});

const firstAttempt = [
  "A shell application that played the role of the classic frontend",
  "Each micro frontend in its own repository, built as a web component",
  "Every micro frontend published as a private library",
  "All of them installed as dependencies of the shell and released together",
];

const whatBroke = [
  "Releasing one micro frontend took two builds: its own, then the shell's",
  "The shell build grew until it ran out of memory",
  "Deploys took longer and longer",
  "Versions were hard to track across teams",
  "Rollbacks were slow",
];

const principles = [
  {
    icon: Scale,
    title: "Open source",
    body: "Apache-2.0, with the templates under MIT. Self-hosting is free.",
  },
  {
    icon: GitBranch,
    title: "Git is the source of truth",
    body: "Deploys to Kubernetes are commits that Argo CD syncs. AI changes arrive as branches and pull requests.",
  },
  {
    icon: HardDrive,
    title: "Your infrastructure, your storage",
    body: "Builds go to the storage you choose, services run on your cluster through your Argo CD, and you pick the AI model.",
  },
  {
    icon: UserCheck,
    title: "Review stays yours",
    body: "An AI change lands on a branch first. Code review, CI and branch protection stay in place. Protect the base branch and every AI change goes through review: a protected branch refuses a direct push.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "About", path: "/about" }])} />

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
        <header className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Why we built {SITE_NAME}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We wanted to release one micro frontend without rebuilding the shell. That tool worked,
            and then we needed the rest of the product on the same road: backend services,
            Kubernetes, and a way for more people to contribute changes.
          </p>
          <p className="text-sm text-muted-foreground">
            {SITE_NAME} was previously called {FORMER_NAME}. Same project, new name.
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Layers className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">It started with micro frontends</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team split the frontend across repositories so that every release had a reference
            tag. Months later we could still say exactly what we had shipped. The way we wired the
            pieces together cost us the independence we were after.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">What we tried first</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  {firstAttempt.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">What broke</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  {whatBroke.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So we stopped bundling micro frontends into the shell and loaded them at runtime instead.
            Every build is stored, each environment serves the versions assigned to it, and a
            rollback re-activates the previous deployment without a rebuild. That was the first version,
            and it is still the core of{" "}
            <Link href={PILLARS.microFrontends.path} className="text-primary hover:underline">
              Flightroom&apos;s micro frontend management
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Server className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why it grew into services and Kubernetes</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A frontend is only half a feature. The same team that released micro frontends on their
            own schedule still shipped the APIs behind them the old way. We wanted the backend on the
            same paved road.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So Flightroom now starts services from templates and deploys them to{" "}
            <Link href={PILLARS.kubernetes.path} className="text-primary hover:underline">
              Kubernetes through Git and Argo CD
            </Link>
            , with one namespace per environment and Gateway API routes in front. Frontends and the
            services they call are grouped in functional domains and ship together.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why AI</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The people who know what should change are often not the people who can write the code. A
            product manager spots the wrong label, a designer wants the spacing fixed, an analyst needs
            one more column. Each of those used to become a ticket and a wait.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With{" "}
            <Link href={PILLARS.ai.path} className="text-primary hover:underline">
              AI in Flightroom
            </Link>
            , they describe the change in plain words and get it back on a branch or as a pull request.
            Engineers review it like any other contribution. The platform already knew where every
            repository, environment and pipeline was, so it was the natural place to put this.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <GitPullRequest className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What we hold to</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <PillarLinks />

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">See it for yourself</h2>
          <p className="text-lg text-muted-foreground">
            Start free on the hosted console, or read the source and run it on your own
            infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Start free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
