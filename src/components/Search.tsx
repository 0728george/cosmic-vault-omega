"use client";

import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import vaultData from "@/lib/vault.json";

type Entry = {
  slug: string;
  title: string;
  content: string;
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Entry[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const entries: Entry[] = vaultData.entries.map((path) => {
      const slug = path.split("/").pop()!.replace(".md", "");
      const title = slug.replace(/^\d+-/, "").replace(/-/g, " ");
      return { slug, title, content: "" }; // content filled later if needed
    });

    const fuse = new Fuse(entries, {
      keys: ["title", "content"],
      threshold: 0.3,
    });

    setResults(fuse.search(query).map((r) => r.item));
  }, [query]);

  return (
    <div className="mt-16 w-full max-w-3xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the archives of eternity…"
        className="w-full rounded-full border border-purple-500/30 bg-black/40 px-10 py-5 text-xl backdrop-blur-md focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
      />
      {results.length > 0 && (
        <div className="mt-6 space-y-4 rounded-xl border border-purple-500/20 bg-black/50 p-6 backdrop-blur-md">
          {results.map((r) => (
            <a
              key={r.slug}
              href={`/${r.slug}`}
              className="block rounded-lg p-4 hover:bg-purple-500/10 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400 capitalize">
                {r.title}
              </h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
