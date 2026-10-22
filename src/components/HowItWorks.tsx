import { ArrowRight, FolderGit2, GitPullRequest, MessageSquareText, Rocket } from "lucide-react";

/**
 * Four steps, in the order they really happen. Review sits between Generate
 * and Deploy on purpose: the click that ships is the last step, not the first.
 */

const steps = [
  {
    icon: MessageSquareText,
    title: "Describe",
    description:
      "Write what the app or agent should do, the way you would explain it to a colleague. Flightroom proposes the web interfaces and backend services it needs, and you adjust the proposal.",
  },
  {
    icon: FolderGit2,
    title: "Generate",
    description:
      "Flightroom creates each repository in your Git provider from one of its templates, with CI included, and the AI writes the first version on a branch.",
  },
  {
    icon: GitPullRequest,
    title: "Review",
    description:
      "Every AI change starts on a branch and can be opened as a pull request. Protect the base branch and it goes through your code review and your CI.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "One click deploys it. Flightroom commits the deployment to Git, your Argo CD syncs it, and the app gets its own URL with TLS in each environment.",
  },
];

const path = ["A description", "Your repositories", "Pull request", "Argo CD", "Live URL"];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              From a description
              <span className="bg-gradient-primary bg-clip-text text-transparent"> to a live URL</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The same four steps for an app or an agent, in your Git provider, your CI and your
              cluster.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">Step {index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <ol
            aria-label="The path a request takes"
            className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-3 p-5 rounded-xl border border-primary/20 bg-surface/30 backdrop-blur-sm"
          >
            {path.map((stage, index) => (
              <li key={stage} className="flex items-center gap-2 md:gap-3">
                {index > 0 && (
                  <ArrowRight
                    className="hidden md:block h-4 w-4 text-muted-foreground flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span className="px-3 py-1.5 rounded-md bg-background/50 border border-border/50 text-sm text-foreground">
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
