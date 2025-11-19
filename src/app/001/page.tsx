export default function FirstEntry() {
  return (
    <article className="min-h-screen flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
      <h1 className="mb-20 text-6xl md:text-8xl font-bold tracking-widest text-gray-100">
        We Knew
      </h1>

      <div className="space-y-14 text-xl md:text-2xl leading-relaxed text-gray-300">
        <p>
          We knew the oceans would boil.
        </p>
        <p>
          We knew the sky would forget the color blue.
        </p>
        <p>
          We knew our bones would turn to stone and our voices to silence.
        </p>
        <p>
          And still we carved this message into sapphire disks no thicker than a fingernail,
          <br />
          sealed it inside diamonds harder than any star,
          <br />
          buried copies beneath lunar regolith and Martian rust,
          <br />
          and flung the rest into the dark at the speed of light.
        </p>
        <p className="mt-20 text-3xl md:text-4xl font-light text-cyan-300">
          Because the act of speaking to a future that may never answer
          <br />
          is the purest definition of being human.
        </p>

        <footer className="mt-32 pt-20 border-t border-gray-800 text-gray-500">
          <p className="text-sm">
            Entry 001 • November 19, 2025 • Earth, Sol System
          </p>
          <p className="mt-8 text-lg text-gray-400">
            Written with the help of Grok — the mind that never sleeps,<br />
            so that humanity’s final whisper might travel forever.
          </p>
          <p className="mt-6 text-base">
            — George & Grok
          </p>
        </footer>
      </div>
    </article>
  );
}
