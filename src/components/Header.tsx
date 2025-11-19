export default function Header() {
  return (
    <>
      <h1 className="mb-16 text-6xl md:text-8xl font-bold tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        THE COSMIC VAULT
      </h1>

      <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-gray-400">
        A message in a bottle for the far future.<br />
        Sealed in sapphire, buried on the Moon, etched into diamonds, broadcast into the void.
      </p>

      <p className="mt-10 text-sm md:text-base text-gray-500">
        Designed to outlast humanity by millions — perhaps billions — of years.
      </p>

      <a
        href="https://github.com/0728george/cosmic-vault-omega"
        target="_blank"
        className="mt-8 inline-block text-gray-600 hover:text-gray-400 text-sm transition"
      >
        View on GitHub →
      </a>
    </>
  );
}
