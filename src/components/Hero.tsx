import { Button } from "@/components/design-system";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL, GITHUB_REPO_URL, QUICK_START_URL } from "@/lib/seo";
import ChangePanel from "@/components/home/ChangePanel";

const highlights = [
  "Micro frontends without host rebuilds",
  "GitOps deploys through Argo CD",
  "AI changes in plain language",
  "Bring your own AI model",
];

const Hero = () => {
  return (
    <section className="py-10 relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 pt-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Open-source platform for Kubernetes
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                From idea to Kubernetes,
                <span className="bg-gradient-primary bg-clip-text text-transparent"> with the whole team</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Flightroom builds, ships and runs your product on Kubernetes: micro frontends,
                backend services and GitOps deploys through Argo CD. With AI, anyone on the team
                can build: a request in plain words comes back as code on its own branch.
              </p>
            </div>

            {/* The console is the fastest path to value; the quick start is for
                readers who want to see the steps before signing in. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start free · no install
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href={QUICK_START_URL}>
                <Button variant="secondary" size="lg" className="group cursor-pointer w-full sm:w-auto">
                  <BookOpen className="w-5 h-5" />
                  Quick start · 10 min
                </Button>
              </Link>
            </div>

            {/* Proof in verifiable facts: the license, the pull count and the
                self-host escape hatch. */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <Link
                href={GITHUB_REPO_URL}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Apache-2.0 open source
              </Link>
              <span className="hidden sm:inline text-border">|</span>
              <span>4,000+ Docker pulls</span>
              <span className="hidden sm:inline text-border">|</span>
              <Link href="/start-now" className="hover:text-foreground transition-colors">
                Self-host with Helm or one container
              </Link>
            </div>
          </div>

          <ChangePanel />
        </div>

        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center gap-4 lg:gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
          {highlights.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className={`w-2 h-2 bg-primary rounded-full animate-pulse ${
                  ["", "animation-delay-200", "animation-delay-400", "animation-delay-600"][index]
                }`}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
