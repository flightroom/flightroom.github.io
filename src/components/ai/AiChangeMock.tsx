import { Bot, Check, FileCode, GitBranch, GitPullRequest, LayoutTemplate, Server, X } from "lucide-react";

const proposed = [
  { icon: Server, kind: "Backend service", name: "Invoice agent", template: "Python & FastAPI", repo: "invoice-agent-be" },
  { icon: LayoutTemplate, kind: "Web interface", name: "Invoice review", template: "React", repo: "invoice-review-fe" },
];

const changedFiles = [
  { path: "app/main.py", added: 48, removed: 3 },
  { path: "app/matching.py", added: 112, removed: 0 },
  { path: "app/purchase_orders.py", added: 64, removed: 0 },
  { path: "README.md", added: 21, removed: 2 },
];

/**
 * A static picture of Generate on an empty domain. The buttons are spans on
 * purpose: nothing here is clickable, and a fake button would promise a demo
 * the page does not have.
 */
export default function AiChangeMock() {
  return (
    <figure
      className="min-w-0 rounded-xl border border-primary/20 bg-surface/40 shadow-lg overflow-hidden"
      aria-label="Illustration: a business request for an agent, the services the AI proposes, and the first version on a branch"
    >
      <div className="flex items-center gap-2 border-b border-primary/10 px-4 py-3 text-sm text-muted-foreground">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/15" />
        <span className="ml-2 truncate">Supplier invoices · Generate</span>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary/15 px-4 py-3 text-sm text-foreground">
            We need an agent that checks each supplier invoice against its purchase order and flags
            the ones that don&apos;t match, with a page where finance reviews them.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary-strong">
            <Bot className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1 space-y-3 rounded-2xl rounded-tl-sm border border-primary/10 bg-background/60 px-4 py-3 text-sm">
            <p className="text-foreground">I propose two components for this domain:</p>
            <ul className="space-y-2">
              {proposed.map(({ icon: Icon, kind, name, template, repo }) => (
                <li key={repo} className="flex items-start gap-2 min-w-0 rounded-lg border border-primary/10 px-3 py-2">
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-strong" />
                  <div className="min-w-0">
                    <p className="text-foreground">
                      {name} <span className="text-xs text-muted-foreground">· {kind}</span>
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {template} template · <span className="font-mono">{repo}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Repositories created from their templates, CI included. First version written:
            </p>

            <div>
              <div className="flex gap-1 text-xs font-mono" aria-hidden="true">
                <span className="rounded-t-md border border-b-0 border-primary/20 bg-primary/10 px-2 py-1 text-foreground truncate">
                  invoice-agent-be
                </span>
                <span className="rounded-t-md px-2 py-1 text-muted-foreground truncate">invoice-review-fe</span>
              </div>
              <ul className="space-y-1.5 border-t border-primary/20 pt-2 font-mono text-xs">
                {changedFiles.map((file) => (
                  <li key={file.path} className="flex items-center gap-2 min-w-0">
                    <FileCode className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                    <span className="truncate text-muted-foreground">{file.path}</span>
                    <span className="ml-auto flex-shrink-0 text-success">+{file.added}</span>
                    <span className="flex-shrink-0 text-destructive">-{file.removed}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
              <GitBranch className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="font-mono truncate">ai/invoice-agent-20261020-090000</span>
              <span className="flex-shrink-0">from main</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:pl-11" aria-hidden="true">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            <GitPullRequest className="h-3.5 w-3.5" />
            Open pull request
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-3 py-1.5 text-xs font-medium text-foreground">
            <Check className="h-3.5 w-3.5" />
            Apply
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/10 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <X className="h-3.5 w-3.5" />
            Discard
          </span>
        </div>
      </div>
    </figure>
  );
}
