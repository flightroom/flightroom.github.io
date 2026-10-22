import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  FileLock2,
  GitPullRequest,
  KeyRound,
  ScrollText,
  UserCog,
} from "lucide-react";
import { PILLARS } from "@/lib/seo";

/**
 * The strip a CIO office reads first. Every line maps to a feature that
 * exists today; the detail lives on /enterprise.
 */

const guardrails = [
  {
    icon: KeyRound,
    title: "Single sign-on",
    description: "Microsoft Entra ID, Google or Auth0, or local accounts.",
  },
  {
    icon: UserCog,
    title: "Roles",
    description: "Owner, Admin and Member for the organization; Owner, Member and Viewer per project.",
  },
  {
    icon: GitPullRequest,
    title: "Branches and review",
    description: "Every AI change starts on a branch. Protect the base branch and it goes through your pull request review and CI.",
  },
  {
    icon: FileLock2,
    title: "Limits on the AI",
    description: "It cannot edit CI files or lockfiles, cannot read credential files, and each request has a size cap.",
  },
  {
    icon: ScrollText,
    title: "Audit of assistant actions",
    description: "The console assistant asks for confirmation before deploy, rollback or delete, and its actions are logged.",
  },
  {
    icon: BrainCircuit,
    title: "Your models",
    description: "Choose the AI models for your organization: Claude, GPT on Azure OpenAI, or Gemini.",
  },
  {
    icon: Cloud,
    title: "Your cloud",
    description: "Self-host in your cloud or on-prem. Deploys go through your Argo CD; the console holds no cluster credentials.",
  },
];

export default function Guardrails() {
  return (
    <section className="py-20 bg-surface/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-strong">
              IT stays in control
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What IT controls
              <span className="bg-gradient-primary bg-clip-text text-transparent"> on every app and agent</span>
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guardrails.map((item) => (
              <li
                key={item.title}
                className="p-5 rounded-xl border border-primary/20 bg-background/50 min-w-0"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong inline-flex mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
              </li>
            ))}
            <li className="min-w-0">
              <Link
                href={PILLARS.enterprise.path}
                className="group h-full flex flex-col justify-center gap-2 p-5 rounded-xl border border-primary/40 bg-primary/5 hover:border-primary/70 transition-colors"
              >
                <span className="font-semibold text-foreground">The enterprise setup</span>
                <span className="text-sm text-muted-foreground">
                  Sign-on, roles, models, hosting and the AI&apos;s limits, in detail.
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-strong">
                  Read more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
