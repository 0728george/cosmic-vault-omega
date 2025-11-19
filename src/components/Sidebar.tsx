import Link from "next/link";

const tabs = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "About", href: "/about", icon: "ℹ️" },
  { name: "Manifesto", href: "/manifesto", icon: "📜" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className="group flex items-center gap-4 text-3xl text-gray-600 hover:text-cyan-400 transition"
        >
          <span>{tab.icon}</span>
          <span className="text-sm opacity-0 group-hover:opacity-100 transition">
            {tab.name}
          </span>
        </Link>
      ))}
    </aside>
  );
}
