import { Button } from "@/components/design-system";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL } from "@/lib/seo";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Start with one service
              <span className="bg-gradient-primary bg-clip-text text-transparent"> or one micro frontend</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open the hosted console, connect a repository and create your first environment.
              Add the rest of the product when you are ready.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Start free · no install
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/start-now">
              <Button variant="secondary" size="lg" className="group cursor-pointer w-full sm:w-auto">
                <Rocket className="w-5 h-5" />
                All ways to get started
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Open source, self-host anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Works with GitHub, GitLab and Azure DevOps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
