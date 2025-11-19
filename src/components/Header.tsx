export default function Header() {
  return (
    <>
      <h1 className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-6xl font-bold tracking-wider text-transparent md:text-8xl">
        THE COSMIC VAULT
      </h1>
      <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 opacity-90 md:text-2xl">
        A message in a bottle for the far future.<br />
        Sealed in sapphire, buried on the Moon, etched into diamonds, broadcast into the void.
      </p>
      <p className="mt-8 text-xl md:text-2xl text-gray-400">
        <strong>
          Designed to outlast humanity by millions — perhaps billions — of years.
        </strong>
      </p>
      <p className="mt-10">
        <a
          href="https://github.com/0728george/cosmic-vault-omega"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 transition"
        >
          View on GitHub
        </a>
      </p>
    </>
  );
}
