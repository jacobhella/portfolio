import { CONTACTS, SOCIALS} from "@/app/portfolio-data";
import "@/app/pages/pages.css";

export function ContactPage() {
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
              <a href={`mailto:${CONTACTS.email}`} className="link-lg">{CONTACTS.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="section-padding">
        <div className="layout-container">
          <div className="grid-2col grid-2col--top">

            <h2 className="heading-section">Social</h2>

            <div className="contact-social-stack">
              {SOCIALS.map((s) => <a key={s} href="#" className="link-lg">{s}</a>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}