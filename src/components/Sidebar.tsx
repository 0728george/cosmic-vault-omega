import Link from "next/link";

const tabs = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "About", href: "/about", icon: "ℹ️" },
  { name: "Manifesto", href: "/manifesto", icon: "📜" },
  { name: "Archive", href: "/archive", icon: "📦" },
];

export default function Sidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className="group flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition text-sm"
        >
          <span className="text-2xl">{tab.icon}</span>
          <span className="opacity-0 group-hover:opacity-100 transition">
            {tab.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
