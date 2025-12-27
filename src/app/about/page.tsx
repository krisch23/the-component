import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";

export const metadata = {
  title: "About — The Component",
  description:
    "The intent behind The Component — learning, experimentation, and building in public.",
};

export default function AboutPage() {
  return (
    <div className="container-narrow">
      {/* Header */}
      <section className="mb-12">
        <h1 className="mb-4">About</h1>
      </section>

      {/* Intent */}
      <section className="mb-12 space-y-6">
        <p className="text-text-secondary">
          The Component is a personal engineering lab. It exists to explore
          ideas at the intersection of AI tools, software craft, and technical
          writing — all built and documented publicly.
        </p>
        <p className="text-text-secondary">
          The name comes from the idea that everything useful starts small: a
          single component, a single experiment, a single note. Over time,
          these pieces compound into something larger.
        </p>
      </section>

      {/* Why Build in Public */}
      <section className="mb-12">
        <h2 className="mb-4">Why build in public?</h2>
        <div className="space-y-4 text-text-secondary">
          <p>
            Building in public forces clarity. When you know someone might see
            your work, you think more carefully about what you&apos;re making and
            why.
          </p>
          <p>
            It&apos;s also a form of accountability. Shipping imperfect work is
            better than perfecting work that never ships. The constraints of
            public visibility help avoid endless polish.
          </p>
          <p>
            Finally, it creates a record. Looking back at old experiments is
            useful — seeing what worked, what didn&apos;t, and how thinking evolved
            over time.
          </p>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="mb-12">
        <h2 className="mb-4">What this is not</h2>
        <div className="space-y-4 text-text-secondary">
          <p>
            This is not a startup. There&apos;s no pitch deck, no growth metrics,
            no MRR goals. Projects here exist because they&apos;re interesting to
            build, not because they&apos;re optimized for a market.
          </p>
          <p>
            This is also not a blog in the traditional sense. Writing here
            serves the experiments — documenting process, sharing learnings,
            and thinking through problems in prose.
          </p>
        </div>
      </section>

      {/* Elsewhere */}
      <section className="mb-12">
        <h2 className="mb-4">Elsewhere</h2>
        <div className="flex gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary no-underline hover:text-text-primary transition-colors"
          >
            Twitter
          </Link>
        </div>
      </section>

      {/* Email Signup */}
      <section>
        <h2 className="mb-4">Stay updated</h2>
        <EmailSignup />
      </section>
    </div>
  );
}

