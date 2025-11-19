export default function Header() {
  return (
    <div className="flex flex-col items-center space-y-10 max-w-5xl mx-auto px-6">
      <h1 className="text-6xl md:text-8xl font-bold tracking-widest bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
        THE COSMIC VAULT
      </h1>
      
      <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center opacity-90">
        A message in a bottle for the far future.<br />
        Sealed in sapphire, buried on the Moon, etched into diamonds, broadcast into the void.
      </p>
      
      <p className="text-sm md:text-base text-gray-400 font-light">
        <strong>
          Designed to outlast humanity by millions — perhaps billions — of years.
        </strong>
      </p>
      
      <a
        href="https://github.com/0728george/cosmic-vault-omega"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-300 text-sm transition"
      >
        View on GitHub
      </a>
    </div>
  );
}
