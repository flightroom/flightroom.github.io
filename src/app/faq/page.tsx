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
  title: "FAQ: Building and Shipping Apps and Agents",
  description:
    "Answers about Flightroom: who can build apps and AI agents, how one-click deploy and review work, SSO and roles, your own AI models, self-hosting, open source.",
  path: "/faq",
  keywords: [
    "Flightroom FAQ",
    "enterprise AI app builder FAQ",
    "build AI agents FAQ",
    "citizen developer FAQ",
    "self-hosted AI platform FAQ",
    "bring your own AI model",
    "Argo CD GitOps FAQ",
    "AI pull request review",
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
          <p className="mt-5 max-w-xl mx-auto text-xl text-foreground-secondary">
            Building apps and agents, deploying them, and keeping IT in control, answered plainly.
          </p>
        </div>

        <FAQList />

        <div className="mt-16 text-center space-y-3 text-muted-foreground">
          <p>
            Go deeper on how people{" "}
            <Link href={PILLARS.build.path} className="text-primary-strong hover:underline">
              build with AI
            </Link>
            , how{" "}
            <Link href={PILLARS.ship.path} className="text-primary-strong hover:underline">
              one-click deploy
            </Link>{" "}
            works, or what IT controls on the{" "}
            <Link href={PILLARS.enterprise.path} className="text-primary-strong hover:underline">
              enterprise
            </Link>{" "}
            page.
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
