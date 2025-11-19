import type { Metadata } from "next";
import "./globals.css";
import Background from "../components/Background";

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
        {children}
      </body>
    </html>
  );
}
