import { ArrowRight } from "lucide-react";

/**
 * Services and micro frontends share the first steps and diverge at deploy
 * time. The two lanes below the steps make that split visible, so neither
 * audience has to guess which half of the page applies to them.
 */

const steps = [
  {
    title: "Start from a template",
    description:
      "Pick a service template (Node.js + Fastify, Python + FastAPI, Spring Boot, Quarkus) or a micro frontend host or remote for React, Angular or Vue. Service templates ship AGENTS.md and CLAUDE.md, so coding agents follow the conventions.",
  },
  {
    title: "Build in your CI",
    description:
      "Ready-made pipelines for GitHub Actions, GitLab CI and Azure DevOps. CI registers each image version or uploads each micro frontend build. An API covers everything else.",
  },
  {
    title: "Deploy per environment",
    description:
      "For services and container frontends, each environment is a Kubernetes namespace. Micro frontends are served per environment from their deployment. Deploy one app, or a whole functional domain at once.",
  },
  {
    title: "Expose and roll back",
    description:
      "Services get an HTTPRoute on their environment's Gateway, with TLS from cert-manager. A service rolls back by deploying its previous image version again. A micro frontend rolls back by re-activating its previous snapshot, with no rebuild.",
  },
];

const lanes = [
  {
    name: "Backend services",
    stages: ["Template", "CI builds the image", "Commit to Git", "Argo CD syncs", "HTTPRoute on the Gateway"],
  },
  {
    name: "Micro frontends",
    stages: ["Template", "CI uploads the build", "Immutable snapshot", "Host loads it at runtime", "One-click rollback"],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              From template
              <span className="bg-gradient-primary bg-clip-text text-transparent"> to production</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four steps for a backend service or a micro frontend. The two split at deploy time.
            </p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <li key={step.title} className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="space-y-4">
            {lanes.map((lane) => (
              <div
                key={lane.name}
                className="p-5 rounded-xl border border-primary/20 bg-surface/30 backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {lane.name}
                </h3>
                <ol className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                  {lane.stages.map((stage, index) => (
                    <li key={stage} className="flex items-center gap-2 md:gap-3">
                      {index > 0 && (
                        <ArrowRight
                          className="hidden md:block h-4 w-4 text-muted-foreground flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span className="px-3 py-1.5 rounded-md bg-background/50 border border-border/50 text-sm text-foreground">
                        {stage}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
