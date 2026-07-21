"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { WorkPage } from "@/pages/WorkPage";
import { WritingPage } from "@/pages/WritingPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { PageName } from "@/app/portfolio-data";

export default function App() {
  const [activePage, setActivePage] = useState<PageName>("Home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (page: PageName) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages: Record<PageName, React.ReactNode> = { 
    Home: <HomePage navigate={navigate} />, 
    Work: <WorkPage />, 
    Writing: <WritingPage />, 
    About: <AboutPage />, 
    Contact: <ContactPage /> 
  };

  return (
    <div className="root-layout">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Inter:ital,wght@0,400;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #0F0F0D; color: #F7F5F0; }
        .bg-lines { position: fixed; inset: 0; pointer-events: none; z-index: 0; display: grid; grid-template-columns: repeat(9, 1fr); }
        .bg-line { border-left: 1px solid rgba(15,15,13,0.055); height: 100vh; }
        @media (max-width: 768px) { .bg-line:nth-child(n+4) { display: none; } }
        @media (max-width: 768px) {
          .grid-2col { grid-template-columns: 1fr !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>

      <Nav activePage={activePage} navigate={navigate} scrolled={scrolled} />

      <main style={{ position: "relative", zIndex: 1 }}>
        {pages[activePage]}
      </main>

      <Footer activePage={activePage} navigate={navigate} />
    </div>
  );
}
