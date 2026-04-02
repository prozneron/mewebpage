import type { Metadata } from "next";
import { Outfit, Rubik, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ron — Full-Stack Developer & Web Creator",
  description:
    "Programmer and web creator. I build sites and apps for businesses and ideas—Next.js, React, modern web craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.className} ${outfit.variable} ${rubik.variable} ${syne.variable} ${jetbrainsMono.variable} min-h-screen antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
