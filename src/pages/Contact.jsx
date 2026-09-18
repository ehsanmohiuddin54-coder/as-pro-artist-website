import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import OpeningHours from "../components/OpeningHours";
import { IconPhone, IconWhatsapp, IconInstagram, IconTiktok, IconCheck } from "../components/Icons";
import { siteInfo, whatsappLink, callLink } from "../data/siteInfo";

const Contact = () => {
  usePageMeta(
    "Contact Us | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Get in touch with AS.PRO ARTIST — 443 Stratford Rd, Birmingham B11 4LB. Call, WhatsApp or send us a message."
  );
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to a real backend/email service.
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out by phone, WhatsApp, social media or the form below."
        crumbLabel="Contact"
      />

      <section className="section section--cream" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="grid grid--4" style={{ marginBottom: 60 }}>
            <a className="card text-center" style={{ padding: "30px 20px" }} href={callLink()}>
              <IconPhone width={26} height={26} style={{ margin: "0 auto 12px", color: "var(--color-gold-dark)" }} />
              <div>Call Us</div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{siteInfo.phoneDisplay}</div>
            </a>
            <a className="card text-center" style={{ padding: "30px 20px" }} href={whatsappLink(siteInfo.whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
              <IconWhatsapp width={26} height={26} style={{ margin: "0 auto 12px", color: "#25d366" }} />
              <div>WhatsApp</div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Message us</div>
            </a>
            <a className="card text-center" style={{ padding: "30px 20px" }} href={siteInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
              <IconInstagram width={26} height={26} style={{ margin: "0 auto 12px", color: "var(--color-gold-dark)" }} />
              <div>Instagram</div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{siteInfo.instagramHandle}</div>
            </a>
            <a className="card text-center" style={{ padding: "30px 20px" }} href={siteInfo.tiktokUrl} target="_blank" rel="noopener noreferrer">
              <IconTiktok width={26} height={26} style={{ margin: "0 auto 12px", color: "var(--color-gold-dark)" }} />
              <div>TikTok</div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{siteInfo.tiktokHandle}</div>
            </a>
          </div>

          <div className="split">
            <div className="form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon"><IconCheck width={28} height={28} /></div>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn--gold btn--block">Send Message</button>
                </form>
              )}
            </div>

            <div>
              <OpeningHours variant="light" />
              <div className="card" style={{ marginTop: 24, padding: 0, overflow: "hidden" }}>
                <iframe
                  title="AS.PRO ARTIST location on Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(siteInfo.mapsQuery)}&output=embed`}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
