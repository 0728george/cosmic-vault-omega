import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Header />
      <Search />
    </main>
  );
}
