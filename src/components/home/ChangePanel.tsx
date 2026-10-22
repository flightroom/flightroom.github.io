import {
  Boxes,
  CheckCircle2,
  FolderGit2,
  GitBranch,
  GitMerge,
  Globe,
  MessageSquareText,
  Rocket,
} from "lucide-react";

/**
 * The hero visual. Drawn in JSX rather than a screen recording so it can show
 * the whole path a plain-language request takes (proposal, repositories,
 * branch, review, deploy, live URL), which no single console screen does.
 * The agent is an ordinary service the AI writes; it calls the model the team
 * picked, with the key kept as an environment secret. The branch name follows
 * the real ai/<slug>-<timestamp> format; review and merge happen in the Git
 * provider; deploy is a click after that. Names and URLs are illustrative.
 */

const proposal = [
  { kind: "Backend service", name: "invoice-agent-be", stack: "Python · FastAPI" },
  { kind: "Web interface", name: "invoice-review-fe", stack: "React" },
];

const steps = [
  {
    icon: FolderGit2,
    label: "Repositories created from templates",
    detail: "invoice-agent-be · invoice-review-fe · CI included",
  },
  {
    icon: GitBranch,
    label: "First version written on a branch",
    detail: "ai/invoice-agent-20261022-141502",
    note: "Base branch untouched",
  },
  {
    icon: GitMerge,
    label: "Pull request reviewed · CI passed · merged",
    detail: "Reviewed by the platform team on GitHub",
  },
];

export default function ChangePanel() {
  return (
    <div className="relative min-w-0">
      <figure className="relative bg-surface/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 shadow-card text-left">
        <figcaption className="sr-only">
          Illustration: an operations manager describes an agent. Flightroom
          proposes a Python backend service and a React web interface, creates both repositories from
          templates with CI, and writes the first version on a branch. Engineers review and merge the
          pull request, someone clicks Deploy to production, and the app goes live on its own URL with
          TLS.
        </figcaption>

        {/* Window chrome, so the panel reads as the console rather than a diagram. */}
        <div className="flex items-center gap-2 mb-5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="ml-3 text-xs text-muted-foreground font-mono truncate">
            Supplier invoices · Generate with AI
          </span>
        </div>

        <div className="rounded-xl border border-primary/30 bg-background/50 p-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-strong mb-2">
            <MessageSquareText className="w-4 h-4" />
            Describe what you need
          </div>
          <p className="text-foreground">
            An agent that reads new supplier invoices from our ERP database, flags amounts over
            budget and lists them on a page for the finance team to approve.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Requested by an operations manager</p>
        </div>

        <div className="rounded-xl border border-border/50 bg-background/30 p-4 mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            <Boxes className="w-4 h-4" />
            Proposed
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {proposal.map((item) => (
              <li key={item.name} className="rounded-lg border border-border/50 px-3 py-2 min-w-0">
                <div className="text-xs text-muted-foreground">{item.kind}</div>
                <div className="text-sm font-semibold text-foreground font-mono truncate">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.stack}</div>
              </li>
            ))}
          </ul>
        </div>

        <ol className="space-y-3">
          {steps.map((step) => (
            <li key={step.label} className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary-strong flex-shrink-0">
                <step.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  {step.label}
                  <CheckCircle2 className="w-4 h-4 text-primary-strong flex-shrink-0" />
                </div>
                <div className="text-xs font-mono text-muted-foreground break-all">{step.detail}</div>
                {step.note && <div className="text-xs text-muted-foreground">{step.note}</div>}
              </div>
            </li>
          ))}

          <li className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong flex-shrink-0">
              <Rocket className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              {/* A static mock of the button, not a control: aria-hidden keeps
                  screen readers on the caption above. */}
              <span
                aria-hidden="true"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground"
              >
                <Rocket className="w-4 h-4" />
                Deploy to production
              </span>
              <div className="text-xs text-muted-foreground mt-1">
                Model API key kept as an environment secret · committed to Git · Argo CD synced
              </div>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary-strong flex-shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                Live
                <CheckCircle2 className="w-4 h-4 text-primary-strong flex-shrink-0" />
              </div>
              <div className="text-xs font-mono text-muted-foreground break-all">
                https://invoices.example.com · TLS
              </div>
            </div>
          </li>
        </ol>
      </figure>
    </div>
  );
}
