import { Metadata } from "next";
import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@/components/design-system";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  CheckCircle,
  ClipboardCheck,
  Container,
  Cpu,
  FileCode,
  GitBranch,
  GitPullRequest,
  KeyRound,
  Layers,
  Lock,
  ScrollText,
  Server,
  ShieldCheck,
  Unlock,
  Users,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PillarLinks from "@/components/PillarLinks";
import { CONSOLE_URL, DOCKER_IMAGE, DOCS_URL, GITHUB_REPO_URL, PILLARS, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = pageMetadata({
  title: "Enterprise AI App Platform, Self-Hosted",
  description:
    "Self-host Flightroom on your Kubernetes. Your SSO, roles, Git review and AI models on Azure or AWS govern every app and agent your business teams build.",
  path: "/enterprise",
  keywords: [
    "self-hosted AI platform",
    "enterprise citizen development",
    "citizen developer governance",
    "AI app builder SSO",
    "Microsoft Entra ID SSO",
    "bring your own AI model",
    "Azure AI Foundry Claude",
    "AWS Bedrock Claude",
    "Azure OpenAI enterprise",
    "Kubernetes self-hosted platform",
    "GitOps governance",
    "open source internal developer platform",
  ],
});

// Who does what, once. The page's whole argument is this split.
const split = [
  {
    icon: Building2,
    title: "IT connects it once",
    body: "An admin connects your Git provider, your AI model and your Argo CD, and decides who belongs to which project.",
  },
  {
    icon: Users,
    title: "Teams build inside it",
    body: "Anyone with a member role describes an app or an agent. The AI writes it on a branch of your repositories, starting from Flightroom's templates.",
  },
  {
    icon: GitPullRequest,
    title: "Engineers keep review",
    body: "Every AI change starts on a branch. Protect the base branch and it goes through review. Then one click deploys it to your cluster.",
  },
];

const installs = [
  {
    icon: Layers,
    title: "Helm chart",
    body: "Install on your own Kubernetes. Point it at your MongoDB and Redis: the chart does not bundle them.",
    href: `${DOCS_URL}/docs/self-hosting/helm`,
  },
  {
    icon: Server,
    title: "Docker Compose",
    body: "Flightroom, MongoDB and Redis on one host, for a pilot or a small team.",
    href: `${DOCS_URL}/docs/self-hosting/docker-compose`,
  },
  {
    icon: Container,
    title: "All-in-one container",
    body: `One image, ${DOCKER_IMAGE}, with everything persistent in a single volume.`,
    href: `${DOCS_URL}/docs/self-hosting/docker`,
  },
  {
    icon: FileCode,
    title: "Terraform and OpenTofu",
    body: "Modules that run Flightroom, MongoDB and Redis on a Docker host, kept with the rest of your infrastructure code.",
    href: `${DOCS_URL}/docs/self-hosting/terraform`,
  },
];

const roles = [
  {
    scope: "Organization",
    items: [
      { role: "Owner and Admin", power: "Administer the organization: AI models, members, and every project in it." },
      { role: "Member", power: "Reaches only the projects they were invited to." },
    ],
  },
  {
    scope: "Project",
    items: [
      { role: "Owner and Member", power: "Build: create repositories, ask the AI for changes, deploy." },
      {
        role: "Viewer",
        power:
          "Cannot ask for or apply AI changes, create or rename repositories, change storages or databases, deploy through GitOps, or use the write tools of the MCP server and the console assistant.",
      },
    ],
  },
];

const providers = [
  { model: "Claude", via: "Anthropic, Azure AI Foundry or AWS Bedrock" },
  { model: "GPT", via: "Azure OpenAI" },
  { model: "Gemini", via: "Gemini API" },
];

const guardrails = [
  "Every AI change lands on its own branch. The base branch stays untouched until someone merges or applies it.",
  "The agent cannot edit CI files or lockfiles, and cannot read credential files such as .env or keys.",
  "Each request is capped: 20 files, 500 KB and 40 model rounds.",
  "The AI does not run your code. Your CI builds and tests the change, as it would any other.",
  "In the console assistant, a deploy, a rollback or a delete waits for a confirmation card.",
];

const audit = [
  {
    title: "Assistant and MCP actions",
    body: "The console assistant and the MCP server write one structured line per action: the tool, the project, the outcome (denied and declined included) and the user, OAuth grant or API key behind it. Arguments are cut down to ids and short values, never secrets or free text.",
  },
  {
    title: "AI usage",
    body: "Every assistant answer and every AI change job records who asked, in which project, on which model, and how many tokens it took.",
  },
  {
    title: "Deploys",
    body: "With GitOps on, every deploy is a commit to your configuration and applications repositories before it is recorded. The history of an environment is the history of those repositories.",
  },
];

const securityNotes = [
  {
    icon: Lock,
    title: "Stored credentials",
    href: `${DOCS_URL}/docs/self-hosting/encryption-at-rest`,
    body: "Set SECRETS_ENCRYPTION_KEY and repository tokens, storage keys, database passwords, the Argo CD token, AI model keys and service secret values are encrypted in the database with AES-256-GCM, and the API stops returning them. Without the key they are stored in the clear, so set it on day one.",
  },
  {
    icon: KeyRound,
    title: "Kubernetes Secrets in Git",
    body: "Per-environment secrets are committed to the configuration repository as plain Kubernetes Secret manifests, base64 encoded, not encrypted. Keep that repository private and limit who can read it.",
  },
  {
    icon: Bot,
    title: "MCP server",
    body: "Off by default on self-hosted installs. When you turn it on, clients sign in with OAuth 2.1 and PKCE, the user's role is checked again on every call, and each grant or API key is rate limited.",
  },
  {
    icon: ShieldCheck,
    title: "Telemetry and error reporting",
    body: "A self-hosted install sends one anonymous daily ping: a random installation id, the version and a few aggregate counts. TELEMETRY_DISABLED=true or DO_NOT_TRACK=1 turns it off. Error reports go to Sentry only if you set a DSN.",
  },
];

const checklist = [
  { label: "Kubernetes and Argo CD 2.8+", detail: "Argo CD reachable over HTTPS with an API token. Environments become namespaces in the cluster it manages." },
  { label: "A Git provider", detail: "GitHub, GitLab or Azure DevOps, for the app repositories and the GitOps repositories." },
  { label: "An AI model subscription", detail: "Anthropic, Azure AI Foundry, AWS Bedrock, Azure OpenAI or Gemini. One is enough to start." },
  { label: "Exposure", detail: "Traefik v3 with its Gateway API provider, the Gateway API CRDs, and cert-manager with a ClusterIssuer for TLS." },
  { label: "Single sign-on", detail: "Microsoft Entra ID, Google or Auth0. Optional: local accounts work too." },
  { label: "To self-host", detail: "MongoDB, Redis and an SMTP server for invitations and password resets, plus your own JWT_SECRET and SECRETS_ENCRYPTION_KEY." },
];

function SectionHeading({ icon: Icon, children }: Readonly<{ icon: typeof Server; children: React.ReactNode }>) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary-strong shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{children}</h2>
    </div>
  );
}

function CheckList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-muted-foreground">
          <CheckCircle className="h-5 w-5 text-primary-strong mt-0.5 shrink-0" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EnterprisePage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Enterprise", path: "/enterprise" }])} />

      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-20">
        <header className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-sm text-primary-strong">
            <Building2 className="h-4 w-4" />
            For IT, security and platform teams
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            An AI app platform your IT can self-host, govern and audit
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Business teams build apps and AI agents in Flightroom. It runs in your cloud or on-prem,
            signs people in with your identity provider, writes code to your Git, reviews it with your
            rules, uses your AI models and deploys through your Argo CD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group cursor-pointer w-full sm:w-auto">
                Open the console
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/start-now">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                Plan a rollout
              </Button>
            </Link>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="cursor-pointer w-full sm:w-auto">
                <BookOpen className="w-5 h-5" />
                Read the docs
              </Button>
            </a>
          </div>
        </header>

        <section className="space-y-8">
          <SectionHeading icon={ClipboardCheck}>IT sets the guardrails once. Teams build inside them.</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {split.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
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

        <section className="space-y-8">
          <SectionHeading icon={Server}>Your infrastructure</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Run Flightroom where your other systems run: on-prem or in any cloud. The hosted console
            is there to evaluate it, free to start.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {installs.map(({ icon: Icon, title, body, href }) => (
              <Card key={title} className="border-primary/20 min-w-0">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2 break-words">
                  <p>{body}</p>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-strong hover:underline">
                      Installation guide
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <CheckList
            items={[
              "The console never holds credentials for your cluster. It commits to Git and talks to the Argo CD API, and Argo CD syncs the cluster.",
              "Argo CD is reached over HTTPS. Plain HTTP has to be switched on explicitly, for a local cluster.",
              "Every environment of a project is a namespace. With exposure on, it also gets its own host and TLS certificate.",
            ]}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Users}>Your identity and roles</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            People sign in with{" "}
            <a href={`${DOCS_URL}/docs/self-hosting/enable-sso/Azure`} target="_blank" rel="noopener noreferrer" className="text-primary-strong hover:underline">
              Microsoft Entra ID
            </a>
            ,{" "}
            <a href={`${DOCS_URL}/docs/self-hosting/enable-sso/Google`} target="_blank" rel="noopener noreferrer" className="text-primary-strong hover:underline">
              Google
            </a>{" "}
            or{" "}
            <a href={`${DOCS_URL}/docs/self-hosting/enable-sso/Auth0`} target="_blank" rel="noopener noreferrer" className="text-primary-strong hover:underline">
              Auth0
            </a>
            , or with local accounts. Then two layers of roles decide what they can reach and what
            they can change.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map(({ scope, items }) => (
              <Card key={scope} className="border-primary/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground">{scope} roles</h3>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-3">
                    {items.map(({ role, power }) => (
                      <div key={role}>
                        <dt className="font-semibold text-foreground">{role}</dt>
                        <dd className="text-muted-foreground">{power}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            ))}
          </div>
          <CheckList
            items={[
              "A project membership can be limited to some functional domains, so a team sees and changes only its own apps.",
              "Scoped API keys with an expiry date let your CI register versions and deploy without a personal login.",
              "On the MCP server and in the console assistant, viewers get read tools only.",
            ]}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading icon={GitBranch}>Your code and your process</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Your repositories",
                body: "Code lives in your GitHub, GitLab or Azure DevOps, in repositories created from templates with CI already set up.",
              },
              {
                title: "Your review rules",
                body: "Every AI change starts on a branch and can be opened as a pull or merge request. Protect the base branch and it refuses a direct push, so your review policy applies as it does today.",
              },
              {
                title: "Git as the audit trail",
                body: "Every deploy is a commit. If the commit fails, nothing deploys. Who shipped what, and when, is already in your Git history.",
              },
            ].map(({ title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Cpu}>Your AI models</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Organization admins add the models Flightroom may use, with your own keys. Run Claude on
            Azure AI Foundry or AWS Bedrock, or GPT on Azure OpenAI, and prompts and code go through
            the cloud contract you already have.
          </p>
          <div className="rounded-xl border border-primary/20 bg-surface/30 p-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="font-normal pb-2 pr-6">Model</th>
                  <th className="font-normal pb-2">Through</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {providers.map(({ model, via }) => (
                  <tr key={model}>
                    <td className="py-1 pr-6 font-semibold">{model}</td>
                    <td className="py-1">{via}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CheckList
            items={[
              "Restrict each project to some of the organization's models, or give it none and AI is off for that project.",
              "Mark one model as the default, and cap the reasoning effort a model may be asked for, to keep costs predictable.",
              "Token usage is recorded per user, per project and per model.",
            ]}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading icon={ShieldCheck}>Guardrails on every AI change</SectionHeading>
          <CheckList items={guardrails} />
          <p className="text-muted-foreground">
            The full picture of how people build with AI is on{" "}
            <Link href={PILLARS.build.path} className="text-primary-strong hover:underline">
              {PILLARS.build.name}
            </Link>
            .
          </p>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={ScrollText}>Audit trail</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {audit.map(({ title, body }) => (
              <Card key={title} className="border-primary/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Audit lines go to the server log as structured JSON, ready for the log platform you already
            run. There is no audit screen in the console.
          </p>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Lock}>Security, stated plainly</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {securityNotes.map(({ icon: Icon, title, body, href }) => (
              <Card key={title} className="border-primary/20 min-w-0">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground break-words space-y-2">
                  <p>{body}</p>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-strong hover:underline">
                      Encryption at rest
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Requests are rate limited per IP, with a lower ceiling for assistant questions. Run
            self-hosted installs on a private network or behind your identity-aware proxy.
          </p>
        </section>

        <section className="space-y-8">
          <SectionHeading icon={Unlock}>Open source, no lock-in</SectionHeading>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Flightroom is open source under Apache-2.0, and the templates under MIT. Read the code
            your security review asks about on{" "}
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-primary-strong hover:underline">
              GitHub
            </a>
            .
          </p>
          <CheckList
            items={[
              "The code of every app is in your Git provider.",
              "The manifests and Helm values of every environment are in your Git provider too.",
              "Argo CD is yours. If you stop using Flightroom, it keeps syncing from those repositories and your apps keep running.",
            ]}
          />
        </section>

        <section>
          <Card className="border-primary/40">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-strong">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">What you need for a rollout</h2>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {checklist.map(({ label, detail }) => (
                  <div key={label} className="sm:flex sm:gap-4">
                    <dt className="font-semibold text-foreground sm:w-56 shrink-0">{label}</dt>
                    <dd className="text-muted-foreground min-w-0 break-words">{detail}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-muted-foreground mt-6">
                Flightroom does not create clusters or databases, scale workloads or show pod logs, and
                it has no SAML or SCIM provisioning today. People are invited to organizations and
                projects from the console.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <PillarLinks current="enterprise" />

      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Start with one team and{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">one project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Try it on the hosted console, free to start. When it fits, install it in your own cluster
            and connect your SSO, your Git and your models.
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
