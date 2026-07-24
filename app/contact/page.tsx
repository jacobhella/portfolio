import { CONTACTS, SOCIALS} from "@/app/portfolio-data";
import { SocialIcon, EmailIcon } from "@/app/components/icons";
import "@/app/contact/contact.css";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero">
        <div className="layout-container">
          <div className="grid-2col grid-2col--top">
            <h1 className="heading-hero heading-hero--span">Get in touch</h1>

            <p className="body-lede">
              Have a project in mind? I would love to hear more about it. Drop me an email or book a call to talk through your needs, 1 to 1.
            </p>

            <div className="contact-link-stack">
              <a href={`mailto:${CONTACTS.email}`} className="link-lg social-link">
                <EmailIcon className="social-icon" />
                {CONTACTS.email}
              </a>
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="link-lg social-link">
                  <SocialIcon name={s.name} className="social-icon" />
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
