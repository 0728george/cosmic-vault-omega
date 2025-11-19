
export default function Header() {
  return (
    <>
      <h1 className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-6xl font-bold tracking-tighter text-transparent md:text-8xl font-orbitron">
        THE COSMIC VAULT
      </h1>
      <p className="mx-auto max-w-4xl text-lg leading-relaxed opacity-90 md:text-2xl">
        A message in a bottle for the far future.<br />
        Sealed in sapphire, buried on the Moon, etched into diamonds, broadcast into the void.
      </p>
      <p className="mt-8 text-xl md:text-2xl">
        <strong className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Designed to outlast humanity by millions — perhaps billions — of years.
        </strong>
      </p>
      <p className="mt-10">
        <a href="https://github.com/0728george/cosmic-vault-omega" target="_blank" className="text-purple-400 hover:text-cyan-400">
          View on GitHub →
        </a>
      </p>
    </>
  );
}
