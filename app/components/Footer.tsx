import { PageName, SOCIALS, CONTACTS } from "@/app/portfolio-data";
import "@/app/components/components.css";

interface NavProps {
  activePage: PageName;
  navigate: (page: PageName) => void;
}

export function Footer({ activePage, navigate }: NavProps) {
  return (
    <footer className="footer divider-top">
      <div className="layout-container footer-row">
        <div>
          <button onClick={() => navigate("Home")} className="btn-reset footer-brand">
            {CONTACTS.name}
          </button>
          <p className="footer-location">{CONTACTS.location}</p>
        </div>

        <div className="footer-columns">
          <ul className="footer-list">
            {(["Work", "Writing", "About", "Contact"] as PageName[]).map((l) => (
              <li key={l}>
                <button onClick={() => navigate(l)} className={`btn-reset footer-link ${l === activePage ? "footer-link--active" : ""}`}>
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <ul className="footer-list">
            {SOCIALS.map((l) => (
              <li key={l}><a href="#" className="footer-social-link">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}