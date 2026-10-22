import { CheckCircle2, GitBranch, GitMerge, GitPullRequest, MessageSquareText, Rocket, Ship } from "lucide-react";

/**
 * The hero visual. Drawn in JSX rather than a screen recording so it can show
 * the whole path a plain-language request takes (prompt, branch, review, CI,
 * deploy, Argo CD), which no single console screen does. The branch name
 * follows the real ai/<slug>-<timestamp> format; review and merge happen in
 * the Git provider; names and numbers are illustrative.
 */

const steps = [
  {
    icon: GitBranch,
    label: "Branch created",
    detail: "ai/checkout-service-20261022-141502",
    note: "3 files changed · main untouched",
  },
  {
    icon: GitPullRequest,
    label: "Pull request #42 opened",
    detail: "Opened on GitHub · base branch main",
  },
  {
    icon: GitMerge,
    label: "CI passed · approved · merged",
    detail: "Image checkout-service:1.4.0 registered",
  },
  {
    icon: Rocket,
    label: "Deployed to uat",
    detail: "A developer clicks Deploy · values committed to Git",
  },
  {
    icon: Ship,
    label: "Argo CD: Synced",
    detail: "checkout-service · uat",
  },
];

export default function ChangePanel() {
  return (
    <div className="relative">
      <figure className="relative bg-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 shadow-card text-left">
        <figcaption className="sr-only">
          Illustration: a product manager describes a change in plain language, the AI agent commits
          it to a new branch, a pull request is reviewed and merged after CI, a developer deploys the
          new version to UAT, and Argo CD syncs it.
        </figcaption>

        {/* Window chrome, so the panel reads as the console rather than a diagram. */}
        <div className="flex items-center gap-2 mb-5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="ml-3 text-xs text-muted-foreground font-mono truncate">
            checkout-service · Edit with AI
          </span>
        </div>

        <div className="rounded-xl border border-primary/30 bg-background/50 p-4 mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <MessageSquareText className="w-4 h-4" />
            Describe a change
          </div>
          <p className="text-foreground">
            Make shipping free for orders over €50, and return the amount still missing with each cart.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Requested by the product manager</p>
        </div>

        <ol className="space-y-3">
          {steps.map((step) => (
            <li key={step.label} className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <step.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  {step.label}
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-xs font-mono text-muted-foreground break-all">{step.detail}</div>
                {step.note && <div className="text-xs text-muted-foreground">{step.note}</div>}
              </div>
            </li>
          ))}
        </ol>
      </figure>
    </div>
  );
}
