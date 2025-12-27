import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  href: string;
}

export function ArticleCard({
  title,
  description,
  date,
  href,
}: ArticleCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="py-5 border-b border-border last:border-b-0">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <time className="shrink-0 text-xs font-mono text-text-muted">
            {date}
          </time>
        </div>
        <p className="text-sm text-text-secondary">{description}</p>
      </article>
    </Link>
  );
}

