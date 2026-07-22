import { PageName, SOCIALS, CONTACTS } from "@/app/portfolio-data";
import { SocialIcon, EmailIcon } from "@/app/components/icons";
import "@/app/components/components.css";

interface NavProps {
  activePage: PageName;
  navigate: (page: PageName) => void;
}

export function Footer({ activePage, navigate }: NavProps) {
  return (
    <footer className="footer divider-top">
      <div className="layout-container footer-row">
        <div className="footer-columns">
          <div>
            <button onClick={() => navigate("Home")} className="btn-reset footer-brand">
              {CONTACTS.name}
            </button>
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
              <button onClick={() => navigate(l)} className={`btn-reset footer-link ${l === activePage ? "footer-link--active" : ""}`}>
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}