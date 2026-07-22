"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageName, PAGE_PATHS, CONTACTS } from "@/app/portfolio-data";
import "@/app/globals.css";
import "@/app/components/components.css";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav-header">
      <div className="nav-bar">

        <Link href={PAGE_PATHS.Home} className="nav-logo">
          {CONTACTS.name}
        </Link>

        <nav className="nav-links">
          {(["Work", "Writing", "About", "Contact"] as PageName[]).map((l) => {
            const active = pathname === PAGE_PATHS[l];
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

      </div>
    </header>
  );
}
