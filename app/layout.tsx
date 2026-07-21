import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A simple portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
