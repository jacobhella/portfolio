import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacob Hellström",
  description: "The portfolio of Jacob Hellström, a software engineer and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceMono.variable}`}
    >
      <body>
        <div className="root-layout">
          <Nav />

          <main style={{ position: "relative", zIndex: 1 }}>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
