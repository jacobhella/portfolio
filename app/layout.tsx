import type { Metadata } from "next";
import { Inter, Poppins, Space_Mono } from "next/font/google";
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import PixelBlast from "@/app/components/PixelBlast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      className={`${inter.variable} ${poppins.variable} ${spaceMono.variable}`}
    >
      <body>
        <div className="root-layout">
          <div className="site-background" aria-hidden="true">
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#a5c9ca"
              patternScale={2}
              patternDensity={0.5}
              enableRipples={false}
              speed={0.5}
              transparent
              edgeFade={0}
            />
          </div>

          <Nav />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
