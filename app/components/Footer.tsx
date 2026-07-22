"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageName, PAGE_PATHS, SOCIALS, CONTACTS, isActivePath } from "@/app/portfolio-data";
import { SocialIcon, EmailIcon } from "@/app/components/icons";
import "@/app/components/components.css";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="footer divider-top">
      <div className="layout-container footer-row">
        <div className="footer-columns">
          <div>
            <Link href={PAGE_PATHS.Home} className="footer-brand">
              {CONTACTS.name}
            </Link>
            <p className="footer-location">{CONTACTS.location}</p>
          </div>

          <ul className="footer-list">
            <li>
              <a href={`mailto:${CONTACTS.email}`} className="footer-social-link social-link">
                <EmailIcon className="social-icon" />
                {CONTACTS.email}
              </a>
            </li>
            {SOCIALS.map((l) => (
              <li key={l.name}>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="footer-social-link social-link">
                  <SocialIcon name={l.name} className="social-icon" />
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="footer-list">
          {(["Work", "Writing", "About", "Contact"] as PageName[]).map((l) => (
            <li key={l}>
              <Link href={PAGE_PATHS[l]} className={`footer-link ${isActivePath(pathname, PAGE_PATHS[l]) ? "footer-link--active" : ""}`}>
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
