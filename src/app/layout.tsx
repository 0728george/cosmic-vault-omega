import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import Sidebar from "@/components/Sidebar";  // ← ADD THIS

export const metadata: Metadata = {
  title: "The Cosmic Vault",
  description: "Humanity's message to the deep future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Background />
        <Sidebar />  {/* ← ADD THIS */}
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
