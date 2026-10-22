import { Button } from "@/components/design-system";
import { ArrowRight, Building2, Github } from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL, GITHUB_REPO_URL, PILLARS } from "@/lib/seo";
import ChangePanel from "@/components/home/ChangePanel";

const highlights = [
  "Code in your GitHub, GitLab or Azure DevOps",
  "Deploys through your Argo CD",
  "Sign in with Microsoft Entra ID, Google or Auth0",
  "Every AI change starts on a branch",
];

const Hero = () => {
  return (
    <section className="py-10 relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 pt-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 min-w-0">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Apps and AI agents, shipped in one click
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your teams build apps and AI agents.
                <span className="bg-gradient-primary bg-clip-text text-transparent"> One click ships them, inside IT&apos;s rules.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Anyone in the company describes an app or an AI agent. The AI writes it on a branch of
                your own repositories, starting from Flightroom&apos;s templates. Protect the base branch
                and it goes through review. Then one click deploys it to your Kubernetes, with your
                single sign-on, your roles and your AI models.
              </p>
            </div>

            {/* The console is the fastest path to value; the enterprise page is
                for the buyer who has to know where the guardrails sit first. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                  Start free · no install
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href={PILLARS.enterprise.path}>
                <Button variant="secondary" size="lg" className="group cursor-pointer w-full sm:w-auto">
                  <Building2 className="w-5 h-5" />
                  See the enterprise setup
                </Button>
              </Link>
            </div>

            {/* Proof in checkable facts: the license, where it runs, whose model. */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <Link
                href={GITHUB_REPO_URL}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Apache-2.0 open source
              </Link>
              <span className="hidden sm:inline text-border">|</span>
              <Link href="/start-now" className="hover:text-foreground transition-colors">
                Self-host on your Kubernetes
              </Link>
              <span className="hidden sm:inline text-border">|</span>
              <Link href={PILLARS.build.path} className="hover:text-foreground transition-colors">
                Bring your own AI model
              </Link>
            </div>
          </div>

          <ChangePanel />
        </div>

        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-center gap-4 lg:gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
          {highlights.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className={`w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0 ${
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
