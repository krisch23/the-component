import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Component",
  description:
    "A personal engineering lab. Building GenAI tools, software experiments, and technical writing in public.",
  openGraph: {
    title: "The Component",
    description:
      "A personal engineering lab. Building GenAI tools, software experiments, and technical writing in public.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

