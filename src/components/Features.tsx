import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system";
import { ArrowRight, Check, Layers, Ship, Sparkles } from "lucide-react";
import { PILLARS } from "@/lib/seo";

/**
 * The three pillars, each with enough concrete detail to be checked against
 * the product. PillarLinks is the short cross-link row used on other pages;
 * the home page needs the longer version.
 */

const pillars = [
  {
    ...PILLARS.kubernetes,
    title: "Kubernetes management",
    linkLabel: "Kubernetes management",
    icon: Ship,
    summary: "Backend services and containers, deployed through Git and Argo CD.",
    points: [
      "Every deploy is a Git commit: namespaces, ConfigMaps, Secrets and Helm values per environment.",
      "One click sets up Argo CD: an AppProject and ApplicationSets with automated sync, prune and self-heal.",
      "Service templates for Node.js + Fastify, Python + FastAPI, Spring Boot and Quarkus.",
      "Exposure through the Gateway API, with TLS from cert-manager and HTTPS redirects.",
    ],
  },
  {
    ...PILLARS.microFrontends,
    title: "Micro frontend management",
    linkLabel: "Micro frontend management",
    icon: Layers,
    summary: "Release each part of the UI on its own, without rebuilding the host.",
    points: [
      "Every deployment is an immutable snapshot. Rollback re-activates the previous one.",
      "One build for every environment: variables reach the browser at boot.",
      "Canary releases by percentage, sticky per session, or for a named list of users.",
      "Module Federation config generated for Vite and Webpack. React, Angular, Vue and more.",
    ],
  },
  {
    ...PILLARS.ai,
    title: "AI for everyone",
    linkLabel: "AI in Flightroom",
    icon: Sparkles,
    summary: "An agent that works in your repositories, on the model you choose.",
    points: [
      "Edit with AI on a micro frontend, a service, or a whole domain of up to 10 repositories.",
      "Generate a domain: up to 3 frontends and 3 backends created from templates, with CI.",
      "Bring your own model: Claude, GPT on Azure OpenAI, or Gemini.",
      "A remote MCP server for Claude Code, Cursor, VS Code and Gemini CLI.",
    ],
  },
];

const Features = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          The frontend, the backend
          <span className="bg-gradient-primary bg-clip-text text-transparent"> and the cluster</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          One console for the whole path to production. Use all three parts, or start with the
          one you need today.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <Card
            key={pillar.path}
            className="bg-surface/50 backdrop-blur-sm border-primary/20 flex flex-col hover:shadow-glow transition-shadow duration-300"
          >
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">{pillar.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{pillar.summary}</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 mb-6">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.path}
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                More on {pillar.linkLabel}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
