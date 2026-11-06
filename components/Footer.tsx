"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-background mt-auto py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted">
          {year !== null ? (
            <>© {year} Oddballs. All rights reserved.</>
          ) : (
            <>© Oddballs. All rights reserved.</>
          )}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/games" className="hover:text-foreground transition-colors">
            Games
          </Link>
          <Link href="/podcast" className="hover:text-foreground transition-colors">
            Podcast
          </Link>
        </div>
      </div>
    </footer>
  );
}