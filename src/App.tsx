import { useEffect, useState } from "react";
import { marked } from "marked";
import vaultData from "../data/vault.json";

interface VaultEntry {
  id: string;
  title: string;
  author: string;
  date: string;
  file: string;
}

export default function App() {
  const [entries, setEntries] = useState<VaultEntry[]>([]);
  const [selected, setSelected] = useState<VaultEntry | null>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setEntries(vaultData);
    if (vaultData.length > 0) setSelected(vaultData[0]);
  }, []);

  useEffect(() => {
    if (selected) {
      fetch(selected.file)
        .then(r => r.text())
        .then(text => setContent(marked(text)));
    }
  }, [selected]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cosmic Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          The Cosmic Vault
        </h1>
        <p className="mt-4 text-xl opacity-80">
          Humanity's message to the deep future — preserved forever
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 pb-20">
        {/* Entry List */}
        <aside className="md:col-span-1 space-y-3">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Vault Contents</h2>
          {entries.map(entry => (
            <button
              key={entry.id}
              onClick={() => setSelected(entry)}
              className={`block w-full text-left p-4 rounded-lg transition-all ${
                selected?.id === entry.id
                  ? "bg-cyan-900 bg-opacity-50 border border-cyan-500"
                  : "bg-white bg-opacity-5 hover:bg-opacity-10"
              }`}
            >
              <div className="font-medium">{entry.title}</div>
              <div className="text-sm opacity-70">{entry.author} — {entry.date}</div>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 prose prose-invert prose-lg max-w-none">
          {selected && (
            <article>
              <header className="mb-10 pb-6 border-b border-gray-800">
                <h2 className="text-4xl font-bold text-cyan-400">{selected.title}</h2>
                <p className="text-lg opacity-80 mt-2">
                  by {selected.author} — {selected.date}
                </p>
              </header>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          )}
        </main>
      </div>

      <footer className="text-center py-8 text-sm opacity-60">
        Built with ♥ for eternity • Free for all sentient beings, now and forever
      </footer>
    </div>
  );
}
