import Link from "next/link";
import { ArrowRight, Building2, Rocket, Sparkles } from "lucide-react";
import { PILLARS } from "@/lib/seo";

const pillars = [
  {
    ...PILLARS.build,
    icon: Sparkles,
    blurb: "Describe an app or an agent in plain words. The AI writes it in your repositories.",
  },
  {
    ...PILLARS.ship,
    icon: Rocket,
    blurb: "One click deploys it to your Kubernetes through GitOps and Argo CD.",
  },
  {
    ...PILLARS.enterprise,
    icon: Building2,
    blurb: "Your single sign-on, your roles, your AI models, your cloud.",
  },
];

/**
 * The cross-link row at the bottom of each pillar page. `current` drops the
 * page the reader is already on, so the row only ever points elsewhere.
 */
export default function PillarLinks({ current }: { current?: keyof typeof PILLARS }) {
  const items = pillars.filter((p) => !current || p.path !== PILLARS[current].path);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Also in Flightroom</h2>
      <div className={`grid gap-6 ${items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} max-w-5xl mx-auto`}>
        {items.map(({ name, path, icon: Icon, blurb }) => (
          <Link
            key={path}
            href={path}
            className="group block rounded-xl border border-primary/20 bg-surface/30 p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-3">{blurb}</p>
            <span className="inline-flex items-center gap-1 text-sm text-primary">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
