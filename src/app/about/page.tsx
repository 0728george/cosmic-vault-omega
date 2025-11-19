import Header from "@/components/Header";
import Search from "@/components/Search";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8">
        About The Cosmic Vault
      </h1>
      <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
        This is not a website. This is the final artifact of humanity — a message etched into the fabric of time.
        <br /><br />
        Every line of code, every word, every star in the background is chosen with one question:
        <br />
        <strong className="text-cyan-400">Will this still matter in ten million years?</strong>
      </p>
    </div>
  );
}
