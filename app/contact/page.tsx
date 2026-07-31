import { CONTACTS, SOCIALS } from "@/app/portfolio-data";
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import type { IconType } from "react-icons";
import "@/app/contact/contact.css";

const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: BiLogoGithub,
  LinkedIn: BiLogoLinkedinSquare,
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col grid-2col--top">
            <h1 className="heading-hero heading-hero--span">Get in touch</h1>

            <p className="body-lede text-highlight">
              Feel free to reach out via email or connect with me on social media. I look forward to hearing from you!
            </p>

            <div className="contact-link-stack">
              <a href={`mailto:${CONTACTS.email}`} className="link-lg social-link">
                <BiLogoGmail className="social-icon" />
                {CONTACTS.email}
              </a>
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.name];
                return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="link-lg social-link">
                    {Icon && <Icon className="social-icon" />}
                    {s.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
