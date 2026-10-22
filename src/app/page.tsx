import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyItExists from "../components/WhyItExists";
import CTA from "../components/CTA";
import Heritage from "@/components/home/Heritage";
import OpenSource from "@/components/home/OpenSource";
import { Metadata } from "next";
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { howToSchema, softwareApplicationSchema } from "@/lib/structuredData";

const TITLE = "Micro Frontends & Services on Kubernetes | Flightroom";

export const metadata: Metadata = {
  ...pageMetadata({
    title: TITLE,
    description:
      "Flightroom is the open-source platform to build, ship and run micro frontends and backend services on Kubernetes, with GitOps, Argo CD and AI pull requests.",
    path: "/",
    keywords: [
      "Kubernetes developer platform",
      "micro frontend platform",
      "GitOps deployment Argo CD",
      "deploy microservices to Kubernetes",
      "AI code change pull request",
      "open source internal developer platform",
      "MFE Orchestrator",
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
      <Features />
      <WhyItExists />
      <HowItWorks />
      <Heritage />
      <OpenSource />
      <CTA />
      <WaitingListSection />
    </div>
  );
}
