import Link from "next/link";
import { ArrowRight, Container, Github, GitBranch, Scale } from "lucide-react";
import { DOCKER_IMAGE, GITHUB_REPO_URL } from "@/lib/seo";

const items = [
  {
    icon: Scale,
    title: "Apache-2.0",
    description: "The platform is open source under Apache-2.0. Templates are MIT.",
  },
  {
    icon: GitBranch,
    title: "No lock-in",
    description:
      "Code lives in your GitHub, GitLab or Azure DevOps. Deploys are Git commits your Argo CD syncs.",
  },
  {
    icon: Container,
    title: "Install your way",
    description:
      "A Helm chart on your Kubernetes, Docker Compose, Terraform or OpenTofu, or a single container. Or start on the hosted console.",
  },
];

const RUN_COMMAND = `docker run -p 8080:80 -v flightroom-data:/data -e SECRETS_ENCRYPTION_KEY="$(openssl rand -base64 32)" ${DOCKER_IMAGE}`;

export default function OpenSource() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Open source, and
              <span className="bg-gradient-primary bg-clip-text text-transparent"> self-hosted where you choose</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm min-w-0"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-primary/20 bg-background/50">
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground mb-1">Try it on your machine</div>
              <code className="text-sm text-foreground font-mono break-all">{RUN_COMMAND}</code>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm flex-shrink-0">
              <Link
                href={GITHUB_REPO_URL}
                className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                Source on GitHub
              </Link>
              <Link
                href="/start-now"
                className="group inline-flex items-center gap-1 text-primary hover:text-foreground transition-colors"
              >
                Self-hosting options
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Self-hosted installs send one anonymous telemetry ping a day. You can turn it off.
          </p>
        </div>
      </div>
    </section>
  );
}
