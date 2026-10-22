import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system";
import { ArrowRight, Building2, Check, Rocket, Sparkles } from "lucide-react";
import { PILLARS } from "@/lib/seo";

/**
 * The three pillars, each with enough concrete detail to be checked against
 * the product. PillarLinks is the short cross-link row used on other pages;
 * the home page needs the longer version.
 */

const pillars = [
  {
    ...PILLARS.build,
    icon: Sparkles,
    summary: "Describe an app or an agent. The AI writes the code in your repositories.",
    points: [
      "Generate on an empty domain: the AI proposes up to 3 web interfaces and 3 backend services, and you edit the proposal.",
      "Each repository is created from one of Flightroom's templates, with CI included.",
      "Refine through chat. Every change lands on its own branch, ready to open as a pull request.",
      "Web interfaces in React, Angular or Vue. Services in Node.js, Python, Spring Boot or Quarkus.",
      "Or work from Claude, ChatGPT, Cursor or VS Code: a remote MCP server gives them your projects, with your role.",
    ],
  },
  {
    ...PILLARS.ship,
    icon: Rocket,
    summary: "A Deploy button ships it to your Kubernetes through GitOps and Argo CD.",
    points: [
      "Every deploy is a Git commit your Argo CD syncs. The console never holds cluster credentials.",
      "Flightroom sets up Argo CD for you, with one Application per app and environment, automated sync and self-heal.",
      "Dev, UAT, production or your own environments, each a Kubernetes namespace.",
      "Each app gets its own URL in every environment, with TLS from cert-manager.",
    ],
  },
  {
    ...PILLARS.enterprise,
    icon: Building2,
    summary: "Your sign-on, your roles, your AI models, your cloud.",
    points: [
      "Single sign-on with Microsoft Entra ID, Google or Auth0, or local accounts.",
      "Organization and project roles. Viewers cannot request or apply AI changes.",
      "Bring your own model: Claude via Anthropic, Azure AI Foundry or AWS Bedrock, GPT via Azure OpenAI, or Gemini.",
      "Self-host on your Kubernetes, in your cloud or on-prem. Open source under Apache-2.0.",
    ],
  },
];

const Features = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Build with AI, deploy to Kubernetes,
          <span className="bg-gradient-primary bg-clip-text text-transparent"> govern it with your own tools</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          One platform from the first description to a live URL, on infrastructure you already run.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <Card
            key={pillar.path}
            className="bg-surface/50 backdrop-blur-sm border-primary/20 flex flex-col hover:shadow-glow transition-shadow duration-300 min-w-0"
          >
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-primary-strong" />
              </div>
              <CardTitle className="text-2xl text-foreground">{pillar.name}</CardTitle>
              <p className="text-muted-foreground mt-2">{pillar.summary}</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 mb-6">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 text-primary-strong flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.path}
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-strong"
              >
                More on {pillar.name}
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
