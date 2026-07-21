import { PageName, CONTACTS } from "@/app/portfolio-data";
import "@/app/globals.css";
import "@/app/components/components.css";

interface NavProps {
  activePage: PageName;
  navigate: (page: PageName) => void;
  scrolled: boolean;
}

export function Nav({ activePage, navigate, scrolled }: NavProps) {
  return (
    <header className="nav-header">
      <div className="nav-bar">

        <button onClick={() => navigate("Home")} className="nav-logo">
          {CONTACTS.name}
        </button>

        <nav className="nav-links">
          {(["Work", "Writing", "About", "Contact"] as PageName[]).map((l) => (
            <button
              key={l}
              onClick={() => navigate(l)}
              className={`nav-link ${activePage === l ? "nav-link--active" : ""}`}
            >
              {l}

              {/* Active Indicator Underline */}
              <span
                className="nav-underline"
                style={{ transform: activePage === l ? "scaleX(1)" : "scaleX(0)" }}
              />
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}