import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container-narrow py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-text-primary no-underline hover:text-accent transition-colors"
          >
            the-component
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-sm text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className="text-sm text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="text-sm text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

