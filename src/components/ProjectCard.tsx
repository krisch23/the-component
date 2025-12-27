import Link from "next/link";

type Status = "building" | "shipped" | "paused";

interface ProjectCardProps {
  title: string;
  description: string;
  status: Status;
  lastUpdated?: string;
  href?: string;
}

const statusStyles: Record<Status, string> = {
  building: "bg-accent/10 text-accent border-accent/20",
  shipped: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  paused: "bg-zinc-500/10 text-text-muted border-zinc-500/20",
};

const statusLabels: Record<Status, string> = {
  building: "Building",
  shipped: "Shipped",
  paused: "Paused",
};

function CardContent({
  title,
  description,
  status,
  lastUpdated,
}: Omit<ProjectCardProps, "href">) {
  return (
    <article className="border border-border rounded-lg p-5 bg-surface hover:border-border/80 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>
        <span
          className={`shrink-0 px-2 py-0.5 text-xs font-mono rounded border ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>
      <p className="text-sm text-text-secondary mb-3">{description}</p>
      {lastUpdated && (
        <p className="text-xs font-mono text-text-muted">
          Last updated: {lastUpdated}
        </p>
      )}
    </article>
  );
}

export function ProjectCard({
  title,
  description,
  status,
  lastUpdated,
  href,
}: ProjectCardProps) {
  if (href) {
    return (
      <Link href={href} className="block group">
        <CardContent
          title={title}
          description={description}
          status={status}
          lastUpdated={lastUpdated}
        />
      </Link>
    );
  }

  return (
    <div className="block">
      <CardContent
        title={title}
        description={description}
        status={status}
        lastUpdated={lastUpdated}
      />
    </div>
  );
}
