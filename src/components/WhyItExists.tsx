import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system";
import {
  ArrowRight,
  Bot,
  Check,
  GitPullRequest,
  MessageSquareText,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { PILLARS } from "@/lib/seo";

/**
 * "Anyone can build" is the claim most likely to be read as hype, so the
 * section shows the exact path a request takes and lists the limits next to
 * it. The guardrails are part of the pitch, not small print.
 */

const flow = [
  {
    icon: MessageSquareText,
    title: "Describe the change",
    description:
      "A product manager, designer or analyst writes what should change, in plain words, on the repository it belongs to.",
  },
  {
    icon: Bot,
    title: "AI edits on a branch",
    description:
      "An agent edits a copy of the code and commits to a new ai/… branch. The base branch is untouched. Refine it through chat.",
  },
  {
    icon: GitPullRequest,
    title: "Open a pull request",
    description:
      "One click opens a pull request on GitHub, or a merge request on GitLab or Azure DevOps. Or discard it.",
  },
  {
    icon: ShieldCheck,
    title: "Engineers review, CI runs",
    description:
      "Your team reviews and merges in its usual tool. Your CI builds and tests the code, as it does for every change.",
  },
  {
    icon: Ship,
    title: "Deploy through Argo CD",
    description:
      "The merged version is deployed like any other: committed to Git, synced by Argo CD, one environment at a time.",
  },
];

const guardrails = [
  "Work happens on a new branch. Applying straight to a protected branch is refused.",
  "Branch protection, code review and CI stay exactly where they are.",
  "The agent cannot edit CI files, lockfiles or secret files.",
  "Each request is capped at 20 files, 500 KB and 40 rounds.",
  "Viewers cannot request or apply changes. Roles are checked on every MCP call.",
  "The agent does not run your code. CI is the check.",
];

const WhyItExists = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Anyone can build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Describe the change.
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Get a pull request.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The people closest to the product can ask for a change themselves and hand engineers a
            reviewable pull request instead of a ticket. Engineers keep the final say.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {flow.map((step, index) => (
            <li
              key={step.title}
              className="p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">Step {index + 1}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-surface/50 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-foreground">The guardrails</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {guardrails.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-surface/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Set up once by a developer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A developer or admin connects the repository and configures the AI model for the
                organization. From then on, anyone with the right role can ask for changes.
              </p>
              <p>
                On an empty domain, AI can also propose up to three frontends and three backends.
                Once you confirm, Flightroom creates the repositories from templates, with CI, and
                runs the agent on them.
              </p>
              <Link
                href={PILLARS.ai.path}
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                How AI works in Flightroom
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyItExists;
