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
      <Nav activePage={activePage} navigate={navigate} scrolled={scrolled} />

      <main style={{ position: "relative", zIndex: 1 }}>
        {pages[activePage]}
      </main>

      <Footer activePage={activePage} navigate={navigate} />
    </div>
  );
}
