"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to an API
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <div className="border border-border rounded-lg p-6 bg-surface">
      <p className="text-sm text-text-secondary mb-4">
        Get updates when new tools and write-ups are published.
      </p>
      {status === "success" ? (
        <p className="text-sm text-accent">Thanks. You&apos;ll hear from me soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-background border border-border rounded px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-surface-raised border border-border rounded text-sm text-text-primary hover:bg-border transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

