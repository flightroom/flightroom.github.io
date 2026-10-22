import Link from "next/link";
import { ArrowRight, History } from "lucide-react";
import { FORMER_NAME, PILLARS } from "@/lib/seo";

/** Visitors arriving from old links and searches need to know they are in the right place. */
export default function Heritage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-6 items-start p-6 md:p-10 rounded-2xl border border-primary/20 bg-surface/30 backdrop-blur-sm">
          <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
            <History className="h-6 w-6" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Born as
              <span className="bg-gradient-primary bg-clip-text text-transparent"> {FORMER_NAME}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Same project, same team, new name, wider scope. The micro frontend control plane is still the core: versions, environments,
              canary releases and rollback work as they always have.
            </p>
            <p className="text-lg text-muted-foreground">
              What changed is the rest of the stack. Flightroom now also scaffolds and deploys your
              backend services, and handles the Kubernetes side through GitOps and Argo CD.
            </p>
            <Link
              href={PILLARS.microFrontends.path}
              className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              See the micro frontend features
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
