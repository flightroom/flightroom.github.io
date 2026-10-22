import { Bot, FileCode, GitBranch, GitPullRequest, Check, X } from "lucide-react";

const changedFiles = [
  { path: "src/components/CheckoutButton.tsx", added: 2, removed: 2 },
  { path: "src/locales/en.json", added: 1, removed: 0 },
  { path: "src/locales/it.json", added: 14, removed: 0 },
];

/**
 * A static picture of "Edit with AI" in the console. The buttons are spans on
 * purpose: nothing here is clickable, and a fake button would promise a demo
 * the page does not have.
 */
export default function AiChangeMock() {
  return (
    <figure
      className="rounded-xl border border-primary/20 bg-surface/40 shadow-lg overflow-hidden"
      aria-label="Illustration: a request typed in plain words, and the change the agent proposes on a branch"
    >
      <div className="flex items-center gap-2 border-b border-primary/10 px-4 py-3 text-sm text-muted-foreground">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/15" />
        <span className="ml-2 truncate">checkout · Edit with AI</span>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary/15 px-4 py-3 text-sm text-foreground">
            Make the checkout button say &ldquo;Pay now&rdquo; and add an Italian translation.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="p-2 h-fit rounded-lg bg-primary/10 text-primary">
            <Bot className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1 space-y-3 rounded-2xl rounded-tl-sm border border-primary/10 bg-background/60 px-4 py-3 text-sm">
            <p className="text-foreground">
              Changed 3 files. The button label now comes from the translations, with an Italian
              file next to the English one.
            </p>
            <ul className="space-y-1.5 font-mono text-xs">
              {changedFiles.map((file) => (
                <li key={file.path} className="flex items-center gap-2 min-w-0">
                  <FileCode className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                  <span className="truncate text-muted-foreground">{file.path}</span>
                  <span className="ml-auto flex-shrink-0 text-emerald-400">+{file.added}</span>
                  <span className="flex-shrink-0 text-rose-400">-{file.removed}</span>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <GitBranch className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="font-mono truncate">ai/checkout-…</span>
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
