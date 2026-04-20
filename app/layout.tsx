import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "MovieGeek",
  description: "Log and review your favourite movies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className={`${manrope.variable} antialiased min-h-full flex flex-col`}>
        <header className="bg-purple-700 border-b border-neutral-300">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
            <span className="text-2xl font-black text-white">MovieGeek</span>
            <span className="text-white">Set Up Your Accout</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
