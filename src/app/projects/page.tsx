import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — The Component",
  description:
    "Active experiments and tools being built at The Component.",
};

export default function ProjectsPage() {
  return (
    <div className="container-narrow">
      {/* Header */}
      <section className="mb-12">
        <h1 className="mb-4">Active Experiments</h1>
        <p className="text-text-secondary max-w-lg">
          This is a public lab. Projects here are in various stages — some
          shipping, some breaking, some just ideas taking shape. Everything
          is built in the open.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="space-y-4">
        <ProjectCard
          title="Project Alpha"
          description="A placeholder experiment. This will be replaced with a real project once development begins."
          status="building"
          lastUpdated="Dec 2024"
        />
        <ProjectCard
          title="Project Beta"
          description="Another placeholder. Ideas are forming but nothing has shipped yet."
          status="paused"
        />
      </section>

      {/* Empty State Fallback */}
      <section className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-text-muted">
          More experiments will appear here as they&apos;re built. Check back soon,
          or subscribe for updates.
        </p>
      </section>
    </div>
  );
}

