import { Bot, Database, KeyRound, Server } from "lucide-react";

/**
 * "Agent" is the claim most likely to be over-read, so this section says
 * exactly what one is here: an app the AI writes, which calls a model. There
 * is no separate agent runtime, and the copy does not imply one.
 */

const parts = [
  {
    icon: Server,
    title: "A service from a template",
    description:
      "The AI writes it as a backend service, for example Python with FastAPI or Node.js with Fastify, with health checks and an API description preset.",
  },
  {
    icon: KeyRound,
    title: "It reasons with your model",
    description:
      "The agent calls the AI model your team chooses. Its API key is kept as a secret of each environment, outside the code.",
  },
  {
    icon: Database,
    title: "It works with your systems",
    description:
      "It reads and writes through your own APIs and databases. Connections to PostgreSQL, MySQL, MariaDB, SQL Server and Oracle can be registered and tested in the console.",
  },
];

export default function WhatIsAnAgent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left min-w-0">
            <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What is an agent
              <span className="bg-gradient-primary bg-clip-text text-transparent"> in Flightroom?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              An agent is an app: a service that reasons with the AI model you choose and calls your
              systems and data.
            </p>
            <p className="text-muted-foreground">
              It is built, reviewed and deployed exactly like any other app. The code sits in your
              repository, your CI tests it, and you can read every line it runs.
            </p>
          </div>

          <ul className="lg:col-span-3 space-y-4 min-w-0">
            {parts.map((part) => (
              <li
                key={part.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <part.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{part.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{part.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
