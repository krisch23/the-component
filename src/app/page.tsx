import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import { EmailSignup } from "@/components/EmailSignup";

export default function Home() {
  return (
    <div className="container-narrow">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="mb-4">Building in public.</h1>
        <p className="text-lg text-text-secondary max-w-lg">
          The Component is a personal engineering lab — a space for GenAI tools,
          software experiments, and technical writing. Everything ships publicly.
        </p>
      </section>

      {/* Active Experiments */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2>Active Experiments</h2>
          <Link
            href="/projects"
            className="text-sm text-text-muted no-underline hover:text-text-secondary transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          <ProjectCard
            title="Project Alpha"
            description="A placeholder experiment. Real projects will replace this as they're built."
            status="building"
            lastUpdated="Dec 2024"
          />
        </div>
      </section>

      {/* Writing & Notes */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2>Writing & Notes</h2>
          <Link
            href="/articles"
            className="text-sm text-text-muted no-underline hover:text-text-secondary transition-colors"
          >
            View all →
          </Link>
        </div>
        <div>
          <ArticleCard
            title="Why build in public?"
            description="Some thoughts on learning by shipping, even when things are unfinished."
            date="Dec 2024"
            href="/articles"
          />
        </div>
      </section>

      {/* Guides - Coming Later */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="inline">Guides</h2>
          <span className="ml-3 text-xs font-mono text-text-muted bg-surface px-2 py-1 rounded">
            coming soon
          </span>
        </div>
        <p className="text-sm text-text-muted">
          Step-by-step technical guides based on what I learn while building.
          These will arrive as experiments mature.
        </p>
      </section>

      {/* Email Signup */}
      <section>
        <h2 className="mb-4">Follow along</h2>
        <EmailSignup />
      </section>
    </div>
  );
}

