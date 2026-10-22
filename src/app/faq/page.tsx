import { Metadata } from "next";
import Link from "next/link";
import './style.css'
import FAQList from './FAQList';
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import JsonLd from "@/components/JsonLd";
import { CONSOLE_URL, PILLARS, pageMetadata } from "@/lib/seo";
import { Button } from "@/components/design-system";
import { ArrowRight, Rocket } from "lucide-react";
import { breadcrumbSchema, faqPageSchema } from "@/lib/structuredData";

// The canonical URL here used to point at /about, which told Google this page
// was a duplicate of a different page and made it a candidate for being dropped
// from the index entirely. pageMetadata derives it from the path instead.
export const metadata: Metadata = pageMetadata({
  title: "FAQ: Micro Frontends, Kubernetes and AI",
  description:
    "Answers about Flightroom: micro frontend releases without host rebuilds, GitOps deploys to Kubernetes with Argo CD, AI changes as pull requests, self-hosting.",
  path: "/faq",
  keywords: [
    "Flightroom FAQ",
    "MFE Orchestrator FAQ",
    "micro frontend FAQ",
    "what does MFE stand for",
    "micro frontend orchestrator",
    "Argo CD GitOps FAQ",
    "AI pull request FAQ",
    "self-hosted developer platform",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={[faqPageSchema(), breadcrumbSchema([{ name: "FAQ", path: "/faq" }])]} />

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Flightroom, micro frontends, Kubernetes and AI, answered plainly.
          </p>
        </div>

        <FAQList />

        <div className="mt-16 text-center space-y-3 text-muted-foreground">
          <p>
            Go deeper on{" "}
            <Link href={PILLARS.microFrontends.path} className="text-primary hover:underline">
              micro frontends
            </Link>
            ,{" "}
            <Link href={PILLARS.kubernetes.path} className="text-primary hover:underline">
              Kubernetes
            </Link>{" "}
            or{" "}
            <Link href={PILLARS.ai.path} className="text-primary hover:underline">
              AI
            </Link>
            . New to the architecture? Start with{" "}
            <Link href="/what-is-a-micro-frontend" className="text-primary hover:underline">
              what a micro frontend is
            </Link>
            , or how it compares to{" "}
            <Link href="/module-federation" className="text-primary hover:underline">
              plain Module Federation
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
      <WaitingListSection />
    </>
  );
}
