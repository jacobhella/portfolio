"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageName, PAGE_PATHS, CONTACTS, isActivePath } from "@/app/portfolio-data";
import { HamburgerIcon, CloseIcon } from "@/app/components/icons";
import "@/app/globals.css";
import "@/app/components/components.css";

const NAV_LINKS: PageName[] = ["Work", "Writing", "About", "Contact"];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-bar">

        <Link href={PAGE_PATHS.Home} className="nav-logo" onClick={() => setMenuOpen(false)}>
          {CONTACTS.name}
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => {
            const active = isActivePath(pathname, PAGE_PATHS[l]);
            return (
              <Link
                key={l}
                href={PAGE_PATHS[l]}
                className={`nav-link ${active ? "nav-link--active" : ""}`}
              >
                {l}

                {/* Active Indicator Underline */}
                <span
                  className="nav-underline"
                  style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
                />
              </Link>
            );
          })}
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon className="nav-hamburger-icon" /> : <HamburgerIcon className="nav-hamburger-icon" />}
        </button>

      </div>

      {menuOpen && (
        <nav className="nav-links-mobile">
          {NAV_LINKS.map((l) => {
            const active = isActivePath(pathname, PAGE_PATHS[l]);
            return (
              <Link
                key={l}
                href={PAGE_PATHS[l]}
                className={`nav-link-mobile ${active ? "nav-link-mobile--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
