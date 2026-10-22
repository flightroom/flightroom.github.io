import React from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/design-system";
import { Server, Zap } from 'lucide-react';
import Link from 'next/link';
import { WaitingListSection } from "@/components/waitingList/WaitingListSection";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  CONSOLE_URL,
  DOCKER_IMAGE,
  DOCS_URL,
  GITHUB_REPO_URL,
  SITE_NAME,
  pageMetadata,
} from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Get Started: Hosted or Self-Hosted",
  description:
    "Start on the free hosted console, or self-host Flightroom with Docker, Docker Compose, a Helm chart on Kubernetes or Terraform and OpenTofu.",
  path: "/start-now",
  keywords: [
    "self-hosted AI app builder",
    "Flightroom Helm chart",
    "Flightroom docker compose",
    "install Flightroom",
    "enterprise AI agent platform",
  ],
})

const selfHostOptions = [
  {
    name: "All-in-one container",
    text: "One container for a quick trial on a laptop.",
    code: `docker run -d --name flightroom -p 8080:80 -v flightroom-data:/data \\\n  -e SECRETS_ENCRYPTION_KEY="$(openssl rand -base64 32)" \\\n  ${DOCKER_IMAGE}`,
  },
  {
    name: "Docker Compose",
    text: "Clone the repository and bring the stack up.",
    code: `git clone ${GITHUB_REPO_URL}.git\ncd flightroom\ndocker compose up -d`,
  },
  {
    name: "Helm chart on Kubernetes",
    text: "The chart supports an optional HPA. MongoDB and Redis are not bundled, so bring your own.",
    href: `${DOCS_URL}/docs/self-hosting/helm`,
  },
  {
    name: "Terraform / OpenTofu",
    text: "Provision the install as code.",
  },
];

const nextSteps = [
  { title: "Connect your Git provider", text: "GitHub, GitLab or Azure DevOps. Your code stays in your repositories.", href: `${DOCS_URL}/docs/repositories/connect/github`, cta: "Read the docs" },
  { title: "Choose your AI model", text: "Bring your own: Claude, GPT on Azure OpenAI or Gemini. Set once per organization.", href: DOCS_URL, cta: "Read the docs" },
  { title: "Connect Argo CD", text: "Connect it once in project settings and Flightroom sets up GitOps deploys to your Kubernetes. Needs Argo CD 2.8+.", href: `${GITHUB_REPO_URL}/blob/development/docs/ARGOCD.md`, cta: "Read the guide" },
  { title: "Invite your team", text: "Add members from the console. Roles decide who can build, review and deploy.", href: CONSOLE_URL, cta: "Open the console" },
];

export default function StartNowPage() {
  return (<>
    <div className="container mx-auto px-4 py-12 space-y-8">
      <JsonLd schema={breadcrumbSchema([{ name: "Get started", path: "/start-now" }])} />
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Get started with {SITE_NAME}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Use the free hosted console, or run {SITE_NAME} in your own infrastructure.
          Both are free.
        </p>
      </div>

      {/* min-w-0 on the cards: without it the docker run line in a grid item
          sets the column width and the page scrolls sideways on phones. */}
      <div className="grid md:grid-cols-2 gap-8 [&>*]:min-w-0">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Hosted console</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Nothing to install. Sign in, connect your Git provider and describe your first app.
                Free to start.
              </p>
              <div className="pt-4 flex justify-center">
                <a
                  href={CONSOLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 backdrop-blur-sm border-2 border-primary/50 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-6 h-6 text-white" />
                  Open the console
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Server className="h-6 w-6" />
              </div>
              <CardTitle>Self-host</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {selfHostOptions.map((option) => (
                <div key={option.name}>
                  <h4 className="font-medium">{option.name}</h4>
                  <p className="text-sm text-muted-foreground">{option.text}</p>
                  {option.href && (
                    <a href={option.href} className="text-sm text-primary hover:underline">
                      Helm chart docs
                    </a>
                  )}
                  {option.code && (
                    <pre className="mt-2 bg-muted/50 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                      <code>{option.code}</code>
                    </pre>
                  )}
                </div>
              ))}
              <p className="text-sm text-muted-foreground">
                After the all-in-one container starts, open <span className="font-mono">http://localhost:8080</span> and
                create the first user. Its data lives in the <span className="font-mono">flightroom-data</span> volume.
                Self-hosted installs send one anonymous daily telemetry ping, which you can turn off.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild>
                  <Link href={`${DOCS_URL}/docs/self-hosting/docker-compose`} className="w-full sm:w-auto">
                    Self-hosting docs
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <a
                    href={GITHUB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Next steps</h2>
        <div className="grid sm:grid-cols-2 gap-4 [&>*]:min-w-0">
          {nextSteps.map((step, index) => (
            <Card key={step.title} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">{index + 1}. {step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{step.text}</p>
                <Button variant="secondary" asChild>
                  <Link href={step.href}>{step.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <WaitingListSection />
    </>
  );
}
