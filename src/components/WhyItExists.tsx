import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Headphones,
  Landmark,
  Megaphone,
  Users,
  Warehouse,
  AppWindow,
} from "lucide-react";
import { PILLARS } from "@/lib/seo";

/**
 * Who builds. The examples are internal tools and agents a business team would
 * plausibly ask for: each one is an app or a service that reads company data
 * through a registered connection or an API, which is what Flightroom builds.
 */

const teams = [
  {
    icon: Warehouse,
    team: "Operations",
    kind: "Agent",
    example:
      "Checks stock levels in the warehouse database when the buyer asks and drafts a reorder list to approve.",
  },
  {
    icon: Landmark,
    team: "Finance",
    kind: "App",
    example:
      "A budget tracker that shows each cost center's spend against plan, straight from the finance database.",
  },
  {
    icon: Users,
    team: "HR",
    kind: "App",
    example:
      "An onboarding portal where each new hire sees their checklist, documents and first-week schedule.",
  },
  {
    icon: Briefcase,
    team: "Sales operations",
    kind: "Agent",
    example:
      "Summarizes an account from CRM data on request, so the account manager walks into the call prepared.",
  },
  {
    icon: Headphones,
    team: "Customer care",
    kind: "Agent",
    example:
      "Suggests a reply to each new support ticket from the product manuals, for the team to edit and send.",
  },
  {
    icon: Megaphone,
    team: "Marketing",
    kind: "App",
    example:
      "A campaign request form that routes each brief to the right team and shows where it stands.",
  },
];

const WhyItExists = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who builds</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Built by the people
            <span className="bg-gradient-primary bg-clip-text text-transparent"> who know the work</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The tool a team needs is usually small, specific and stuck at the bottom of a backlog.
            With Flightroom, the team describes it and gets it built, in the same repositories and
            under the same review as everything else.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teams.map((item) => (
            <li
              key={item.team}
              className="p-6 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.team}</h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-2.5 py-0.5 text-xs text-primary">
                  {item.kind === "Agent" ? <Bot className="h-3 w-3" /> : <AppWindow className="h-3 w-3" />}
                  {item.kind}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.example}</p>
            </li>
          ))}
        </ul>

        <p className="max-w-3xl mx-auto mt-10 text-center text-sm text-muted-foreground">
          IT sets it up once: an admin adds the AI model to the organization and connects the Git
          provider to the project. From then on, anyone with a member role can build, and a
          protected base branch keeps every change under review.{" "}
          <Link
            href={PILLARS.build.path}
            className="group inline-flex items-center gap-1 font-medium text-primary"
          >
            How building with AI works
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WhyItExists;
