import { ArticleCard } from "@/components/ArticleCard";

export const metadata = {
  title: "Articles — The Component",
  description:
    "Notes, build logs, and technical deep dives from The Component.",
};

export default function ArticlesPage() {
  return (
    <div className="container-narrow">
      {/* Header */}
      <section className="mb-12">
        <h1 className="mb-4">Notes & Write-ups</h1>
        <p className="text-text-secondary max-w-lg">
          A collection of build logs, technical deep dives, and experiment
          reports. Writing helps clarify thinking — these are my notes from
          the lab.
        </p>
      </section>

      {/* What to Expect */}
      <section className="mb-12 p-5 border border-border rounded-lg bg-surface">
        <p className="text-sm text-text-secondary mb-3">
          Content here will include:
        </p>
        <ul className="text-sm text-text-muted space-y-1">
          <li>
            <span className="text-text-secondary">Build logs</span> — documenting
            what I&apos;m building and why
          </li>
          <li>
            <span className="text-text-secondary">Technical deep dives</span> —
            exploring tools, patterns, and problems
          </li>
          <li>
            <span className="text-text-secondary">Experiment reports</span> — what
            worked, what didn&apos;t, and what I learned
          </li>
        </ul>
      </section>

      {/* Articles List */}
      <section>
        <ArticleCard
          title="Why build in public?"
          description="Some thoughts on learning by shipping, even when things are unfinished."
          date="Dec 2024"
          href="/articles"
        />
        <ArticleCard
          title="First entry"
          description="A placeholder for the first real article. More soon."
          date="Dec 2024"
          href="/articles"
        />
      </section>

      {/* Empty State Note */}
      <section className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          This is the beginning. Articles will be added as experiments
          progress and lessons emerge.
        </p>
      </section>
    </div>
  );
}

