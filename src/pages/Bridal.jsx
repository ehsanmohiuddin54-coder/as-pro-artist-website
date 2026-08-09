import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import CTAButton from "../components/CTAButton";
import SectionHeading from "../components/SectionHeading";
import { IconCheck, IconWhatsapp } from "../components/Icons";
import { bridalOffer, siteInfo, whatsappLink } from "../data/siteInfo";

const BRIDAL_HERO =
  "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1600&q=80";
const BRIDAL_GALLERY_1 =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80";

const bridalServices = [
  "Traditional Asian Bridal Makeup",
  "Modern Asian Bridal Makeup",
  "Bridal Hair Styling",
  "Elegant Updos",
  "Bridal Trial Sessions",
  "Pre-Wedding Skincare",
  "Bridal Facial Treatments",
  "Full Bridal Packages",
];

const Bridal = () => {
  usePageMeta(
    "Asian Bridal Makeup Birmingham | AS.PRO ARTIST",
    "Luxury Asian bridal makeup and hair styling in Birmingham. 20% off + free facial, from £450. 50% deposit secures your date."
  );

  return (
    <>
      {/* Bridal hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <div className="hero__bg" style={{ backgroundImage: `url(${BRIDAL_HERO})` }} role="img" aria-label="Bridal beauty artistry" />
        <div className="hero__overlay" />
        <div className="container">
          <div className="hero__content fade-up">
            <span className="hero__eyebrow">Bridal Artistry</span>
            <h1 className="hero__title" style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)" }}>
              Your Dream Bridal Look Starts Here
            </h1>
            <p className="hero__desc">
              Nadiya brings 8+ years of bridal expertise, training with renowned artists and
              years working within the industry, to craft a bridal look that feels truly you.
            </p>
            <div className="hero__ctas">
              <CTAButton href={whatsappLink(siteInfo.whatsappMessages.bridal)} variant="gold" target="_blank" rel="noopener noreferrer">
                Enquire About Your Wedding Date
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal services */}
      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <div>
              <span className="split__eyebrow">Bridal Services</span>
              <h2 className="split__title">Complete Bridal Artistry</h2>
              <ul className="check-list">
                {bridalServices.map((s) => (
                  <li key={s}>
                    <span className="tick"><IconCheck width={16} height={16} /></span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="split__media">
              <img src={BRIDAL_GALLERY_1} alt="Bridal makeup and jewellery detail" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Main offer */}
      <section className="section section--black">
        <div className="container">
          <SectionHeading eyebrow="Current Offer" title="Bridal" goldWord="Special" />
          <div className="offer-card" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <span className="offer-card__tag">Limited Time</span>
            <h3 style={{ fontSize: "1.6rem", marginBottom: 10 }}>{bridalOffer.discount}</h3>
            <div className="offer-banner__price" style={{ justifyContent: "center" }}>
              <span className="from">{bridalOffer.fromPrice}</span>
              <span className="prev">{bridalOffer.previousPrice}</span>
            </div>
            <p style={{ color: "var(--color-text-onblack-muted)", margin: "16px 0 26px" }}>
              {bridalOffer.note}
            </p>
            <CTAButton to="/book" variant="gold">Book Bridal Consultation</CTAButton>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Plan Your Bridal Look?</h2>
          <p>Get in touch with Nadiya to check availability for your wedding date.</p>
          <div className="final-cta__ctas">
            <CTAButton href={whatsappLink(siteInfo.whatsappMessages.bridal)} variant="whatsapp" target="_blank" rel="noopener noreferrer" icon={<IconWhatsapp width={16} height={16} />}>
              Enquire on WhatsApp
            </CTAButton>
            <CTAButton to="/book" variant="outline-light">Book Consultation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bridal;
