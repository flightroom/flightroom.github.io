import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyItExists from "../components/WhyItExists";
import CTA from "../components/CTA";
import WhatIsAnAgent from "@/components/home/WhatIsAnAgent";
import Guardrails from "@/components/home/Guardrails";
import OpenSource from "@/components/home/OpenSource";
import { Metadata } from "next";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { howToSchema, softwareApplicationSchema } from "@/lib/structuredData";

const TITLE = "Build and Ship AI Apps and Agents | Flightroom";

export const metadata: Metadata = {
  ...pageMetadata({
    title: TITLE,
    description:
      "Flightroom lets anyone in your company build apps and AI agents by describing them, then ship them in one click to your Kubernetes, inside IT's guardrails.",
    path: "/",
    keywords: [
      "build AI agents for business",
      "enterprise AI app platform",
      "AI internal tools builder",
      "one-click deploy to Kubernetes",
      "self-hosted AI app builder",
      "open source citizen development platform",
    ],
  }),
  // The layout's title template does not apply to the root page, which sits in
  // the layout's own segment. `absolute` makes that explicit, so the brand is
  // written here once and never doubled if the routing changes.
  title: { absolute: TITLE },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd schema={[softwareApplicationSchema(), howToSchema()]} />
      <Hero />
      <WhyItExists />
      <WhatIsAnAgent />
      <Features />
      <HowItWorks />
      <Guardrails />
      <OpenSource />
      <CTA />
      <WaitingListSection />
    </div>
  );
}
