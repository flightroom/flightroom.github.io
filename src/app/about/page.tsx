import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import { ArrowRight, Building2, Clock, GitBranch, GitPullRequest, HardDrive, KeyRound, Scale, UserCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import { CONSOLE_URL, GITHUB_REPO_URL, PILLARS, SITE_NAME, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Why We Built Flightroom",
  description:
    "The people who know what software is needed should be able to build it with AI, in your repositories, on your infrastructure, under your sign-on and roles.",
  path: "/about",
  keywords: [
    "about flightroom",
    "open source enterprise ai platform",
    "it backlog business apps",
    "gitops platform",
    "self-hosted ai app builder",
  ],
});

// What an enterprise needs around AI-written code before it can run in
// production. Each item maps to something Flightroom actually does.
const enterpriseNeeds = [
  "The code in the company's own repositories, not in someone else's sandbox",
  "Review by the engineers who own those repositories",
  "Deploys onto the company's own infrastructure",
  "Sign-in through the company's identity provider, with roles that decide who does what",
];

const principles = [
  {
    icon: Scale,
    title: "Open source",
    body: "Apache-2.0, with the templates under MIT. Self-hosting is free, and you can read every line that runs.",
  },
  {
    icon: GitBranch,
    title: "Git is the source of truth",
    body: "AI changes arrive as branches and pull requests. Deploys to Kubernetes are commits that your Argo CD syncs.",
  },
  {
    icon: HardDrive,
    title: "Your infrastructure, your models",
    body: "Run Flightroom in your cloud or on-prem. Apps run on your Kubernetes, and the AI is the model your organization connects.",
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
            The people who know what software their team needs should be able to build it. The
            company should still own the code, the infrastructure and the keys.
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">The people who know are waiting</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In every company, the people closest to the work know exactly what tool would help.
            Operations wants a dashboard over two systems. Finance wants an approval flow that is not
            a spreadsheet. Customer care wants an assistant that drafts replies from the order history.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each of those becomes a request in the IT backlog, behind work that matters more to
            someone else. Most never get built.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">AI writes the code. Enterprises need the rest</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI models can now write a working app or agent from a plain description. That is not
            enough for a company to run it. Before anything reaches production, an enterprise needs:
          </p>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                {enterpriseNeeds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
              <KeyRound className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What Flightroom does</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {SITE_NAME} is that platform. Anyone with a member role describes what they need, and{" "}
            <Link href={PILLARS.build.path} className="text-primary-strong hover:underline">
              the AI writes it
            </Link>{" "}
            in the company&apos;s Git repositories, starting from Flightroom&apos;s templates. A{" "}
            <Link href={PILLARS.ship.path} className="text-primary-strong hover:underline">
              Deploy button
            </Link>{" "}
            ships it to the company&apos;s Kubernetes through GitOps and Argo CD.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IT connects the Git provider, the AI model, single sign-on and roles, and decides which
            branches are protected. Teams then build within those rules. See{" "}
            <Link href={PILLARS.enterprise.path} className="text-primary-strong hover:underline">
              what that covers
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
              <GitPullRequest className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">What we hold to</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
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
