"use client";

export default function Search() {
  return (
    <div className="mt-16 w-full max-w-3xl">
      <input
        type="text"
        placeholder="Search the archives of eternity…"
        className="w-full rounded-full border border-purple-500/30 bg-black/40 px-10 py-5 text-xl backdrop-blur-md focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
      />
      <div className="mt-6 text-center text-purple-300">Search coming in v1.1</div>
    </div>
  );
}
