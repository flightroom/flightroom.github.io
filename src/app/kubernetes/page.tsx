import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle,
  Database,
  FileCode,
  GitBranch,
  GitCommit,
  Globe,
  History,
  Lock,
  MonitorSmartphone,
  RefreshCw,
  Server,
  ShieldCheck,
  Ship,
  Terminal,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import { CONSOLE_URL, DOCS_URL, GITHUB_REPO_URL, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Kubernetes GitOps with Argo CD and Gateway API",
  description:
    "Deploy backend services and frontends to Kubernetes with GitOps. Flightroom commits to Git, Argo CD syncs the cluster, the Gateway API exposes each environment.",
  path: "/kubernetes",
  keywords: [
    "kubernetes developer platform",
    "argo cd gitops",
    "argo cd applicationset",
    "gitops deployment tool",
    "gateway api httproute",
    "traefik gateway api",
    "deploy microservices kubernetes",
    "kubernetes namespace per environment",
    "helm values gitops",
    "self-hosted developer platform",
  ],
});

// The deploy path, left to right. Each step names the real object it produces
// so a platform engineer can map it onto their own cluster.
const flow = [
  {
    icon: MonitorSmartphone,
    title: "Console",
    body: "You deploy a service, a frontend or a whole domain to an environment.",
  },
  {
    icon: GitCommit,
    title: "Git",
    body: "The configuration repo and the applications repo get a commit with the manifests and Helm values.",
  },
  {
    icon: RefreshCw,
    title: "Argo CD",
    body: "ApplicationSets turn each environment and each app into an Application, synced automatically.",
  },
  {
    icon: Boxes,
    title: "Namespaces",
    body: "Each environment runs in its own Kubernetes namespace.",
  },
  {
    icon: Globe,
    title: "Gateway API",
    body: "A Gateway per environment host, an HTTPRoute per app, TLS from cert-manager.",
  },
];

const argoObjects = [
  {
    title: "An AppProject",
    body: "Scoped to the project's two repositories and to the namespaces of its environments.",
  },
  {
    title: "Read-only repository credentials",
    body: "GitLab deploy tokens are created and rotated for you. GitHub and Azure DevOps take a read-only token. Tokens are stored encrypted.",
  },
  {
    title: "An environments ApplicationSet",
    body: "One Application per environment, with automated sync, prune and self-heal.",
  },
  {
    title: "One ApplicationSet per app",
    body: "Each backend service and each containerised frontend gets one Application per environment.",
  },
];

const argoGuards = [
  "Namespaces are never pruned or deleted, so an emptied repository cannot take running apps down with it.",
  "Before writing anything, every name is checked. If one is taken, initialization stops with nothing changed.",
  "Only a project owner or an organization admin can initialize. Other members see the status.",
  "The console talks to the Argo CD API only. It never holds credentials for your cluster.",
];

// Health and OpenAPI paths as preset in the templates, so the chart's probes
// and the console's API docs work on the first deploy.
const templates = [
  { name: "Node.js & Fastify", health: "/health/live", openApi: "/openapi.json" },
  { name: "Python & FastAPI", health: "/health/live", openApi: "/openapi.json" },
  { name: "Spring Boot", health: "/actuator/health/liveness", openApi: "/v3/api-docs" },
  { name: "Quarkus", health: "/q/health/live", openApi: "/q/openapi.json" },
];

const helmInstall = String.raw`git clone ${GITHUB_REPO_URL}.git
cd flightroom
helm install flightroom ./helm/mfe-orchestrator \
  --namespace flightroom --create-namespace \
  --set env.NOSQL_DATABASE_URL="mongodb://user:pass@mongodb:27017" \
  --set env.REDIS_URL="redis://redis:6379" \
  --set envSecrets.JWT_SECRET="$(openssl rand -hex 32)"`;

const requirements = [
  { label: "Kubernetes", detail: "Environments deploy to the cluster Argo CD runs in." },
  { label: "Argo CD 2.8 or later", detail: "Reachable over HTTPS from Flightroom, with an API token for its account." },
  { label: "Traefik v3", detail: "With its Gateway API provider on, plus the Gateway API CRDs. Only needed for exposure." },
  { label: "cert-manager", detail: "With a ClusterIssuer, for TLS. Without one, environments answer over plain HTTP." },
  { label: "A Git provider", detail: "GitHub, GitLab or Azure DevOps, for the configuration and applications repositories." },
];

function SectionHeading({ icon: Icon, children }: Readonly<{ icon: typeof Ship; children: React.ReactNode }>) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{children}</h2>
    </div>
  );
}

export default function KubernetesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Kubernetes", path: "/kubernetes" }])} />

      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-20">
        <header className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-sm text-primary">
            <Ship className="h-4 w-4" />
            Kubernetes management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ship services to Kubernetes through Git
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Flightroom writes every deploy to Git. Argo CD syncs your cluster from it. The console
            never needs credentials for your cluster, and nobody hand-writes YAML for each new
            service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Open the console
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                <BookOpen className="w-5 h-5" />
                Read the docs
              </Button>
            </a>
          </div>
        </header>

        <section className="space-y-8">
          <SectionHeading icon={GitBranch}>How a deploy flows</SectionHeading>
          <ol className="flex flex-col lg:flex-row lg:items-stretch gap-2">
            {flow.map(({ icon: Icon, title, body }, index) => (
              <li key={title} className="flex flex-col lg:flex-row items-center gap-2 lg:flex-1">
                <div className="w-full h-full rounded-xl border border-primary/20 bg-surface/30 p-4 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
                {index < flow.length - 1 && (
                  <>
                    <ArrowDown className="h-5 w-5 text-primary/70 shrink-0 lg:hidden" aria-hidden />
                    <ArrowRight className="h-5 w-5 text-primary/70 shrink-0 hidden lg:block" aria-hidden />
                  </>
                )}
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">Configuration repository</h3>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>One folder per environment, holding its Namespace, ConfigMaps, Secrets and Gateway.</p>
                <pre className="text-sm overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                  <code>{`dev/
  namespace.yaml
  configMaps/*.yaml
  secrets/*.yaml
  gateway.yaml`}</code>
                </pre>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <h3 className="text-lg font-semibold text-foreground">Applications repository</h3>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>One branch per environment, with a Helm values file per app and a bundled chart.</p>
                <pre className="text-sm overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
                  <code>{`branch dev
  orders-api.yaml
  checkout-shell.yaml
  microservice-chart/`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={RefreshCw}>One click to wire Argo CD</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You already run Argo CD. <strong className="text-foreground">Initialize Argo CD</strong>,
            in the project settings, hands it your repositories through its API. It creates:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {argoObjects.map(({ title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
          <ul className="space-y-3">
            {argoGuards.map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Server}>Services from templates</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A new backend service starts from a template repository, with CI already in place. Every
            template builds a Docker image that listens on port 8080, with health checks and an
            OpenAPI path preset.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map(({ name, health, openApi }) => (
              <div key={name} className="rounded-xl border border-primary/20 bg-surface/30 p-4 space-y-2">
                <h3 className="font-semibold text-foreground">{name}</h3>
                <dl className="text-xs text-muted-foreground space-y-1">
                  <div>
                    <dt className="inline">Port </dt>
                    <dd className="inline font-mono text-foreground">8080</dd>
                  </div>
                  <div>
                    <dt className="inline">Health </dt>
                    <dd className="inline font-mono text-foreground break-all">{health}</dd>
                  </div>
                  <div>
                    <dt className="inline">OpenAPI </dt>
                    <dd className="inline font-mono text-foreground break-all">{openApi}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <ul className="space-y-3">
            {[
              "Each template ships an AGENTS.md and a CLAUDE.md, so coding agents follow its conventions from the first change.",
              "CI registers every image version. Deploy through GitOps and Argo CD, or from your own pipeline reporting back with an API key.",
              "A frontend shell can run as a container too, and deploys the same way as a service.",
              "Functional domains group services and frontends, so a whole domain can go to an environment in one deploy.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Boxes className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Environments are namespaces</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Each environment of a project maps to a Kubernetes namespace. Its ConfigMaps and
                Secrets are managed in the console and committed to the configuration repository on
                every deploy.
              </p>
              <p>
                Secrets are committed as Kubernetes Secret manifests, so keep that repository private
                and limit who can read it.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Database connections</h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Register PostgreSQL, MySQL, MariaDB, SQL Server and Oracle connections and test them
                from the console.
              </p>
              <p>Flightroom does not provision databases. You bring the ones you already run.</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Globe}>Exposure with the Gateway API</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Set a domain on the project and a subdomain on each environment. Give an app an exposure
            path. Every deploy commits the Gateway and the routes, and Argo CD applies them with the
            rest of the environment.
          </p>
          <div className="rounded-xl border border-primary/20 bg-surface/30 p-4 overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="font-normal pb-2 pr-6">Environment</th>
                  <th className="font-normal pb-2">Route</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr>
                  <td className="py-1 pr-6">dev</td>
                  <td className="py-1">https://dev.example.com/api/orders</td>
                </tr>
                <tr>
                  <td className="py-1 pr-6">uat</td>
                  <td className="py-1">https://uat.example.com/api/orders</td>
                </tr>
                <tr>
                  <td className="py-1 pr-6">production</td>
                  <td className="py-1">https://example.com/api/orders</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "One Gateway per environment on its own host. Production takes the bare domain.",
              "One HTTPRoute per app on its exposure path. The prefix is stripped, so the app answers at its root.",
              "TLS certificates from cert-manager, an HTTP to HTTPS redirect, and HSTS on HTTPS answers.",
              "Two apps on the same path, or two environments on the same host, refuse the deploy.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            Exposure uses Traefik v3 as the Gateway API provider. Moving off one Kong per environment?
            The docs include a migration guide that moves apps over one at a time.
          </p>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={History}>Git is the source of truth</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GitCommit,
                title: "Every deploy is a commit",
                body: "The history of each environment is the history of its repositories. Who changed what, and when, is already recorded.",
              },
              {
                icon: History,
                title: "Rollback is a Git operation",
                body: "Revert the commit, or select the previous version and deploy again. Argo CD brings the cluster back in line.",
              },
              {
                icon: Lock,
                title: "No commit, no deploy",
                body: "Flightroom commits before it records the deployment. If the commit fails, nothing is deployed.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="border-primary/40">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileCode className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">What you need</h2>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {requirements.map(({ label, detail }) => (
                  <div key={label} className="sm:flex sm:gap-4">
                    <dt className="font-semibold text-foreground sm:w-56 shrink-0">{label}</dt>
                    <dd className="text-muted-foreground">{detail}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-muted-foreground mt-6">
                Flightroom does not create clusters, scale workloads or show pod logs. Those stay
                with Kubernetes, Argo CD and the tools you already use.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <SectionHeading icon={Terminal}>Run Flightroom itself on Kubernetes</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The repository includes a Helm chart. Point it at your own MongoDB and Redis: the chart
            does not bundle them. Autoscaling of the console is optional, through an HPA.
          </p>
          <pre className="text-sm text-muted-foreground overflow-x-auto p-4 bg-background/50 rounded-lg border border-border/30">
            <code>{helmInstall}</code>
          </pre>
          <p className="text-muted-foreground">
            Prefer something else? Flightroom also runs with Docker Compose, as a single all-in-one
            container, or from Terraform and OpenTofu. See the{" "}
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              documentation
            </a>{" "}
            or the{" "}
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              source on GitHub
            </a>.
          </p>
        </section>
      </div>

      <PillarLinks current="kubernetes" />

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Connect your Argo CD and{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">deploy your first service</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Free to start on the hosted console. Open source under Apache-2.0, so you can self-host it
            whenever you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Start free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/start-now">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
