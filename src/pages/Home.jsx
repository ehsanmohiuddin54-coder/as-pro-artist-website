import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/SectionHeading";
import CTAButton from "../components/CTAButton";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import OpeningHours from "../components/OpeningHours";
import { iconMap, IconPin, IconArrowRight, IconWhatsapp, IconPhone, IconInstagram, IconTiktok } from "../components/Icons";
import {
  siteInfo,
  whatsappLink,
  callLink,
  whyChooseUs,
  featuredFacials,
  bridalOffer,
} from "../data/siteInfo";
import { signatureServices } from "../data/services";
import { testimonials, featuredWork } from "../data/testimonials";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80";
const WELCOME_IMAGE =
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80";
const BRIDAL_IMAGE =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80";
const NADIYA_IMAGE =
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80";

const Home = () => {
  usePageMeta(
    "AS.PRO ARTIST | Premium Hair & Beauty Salon in Birmingham",
    "Premium hair, beauty, skincare and bridal artistry in Birmingham. Book your appointment with AS.PRO ARTIST today."
  );

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${HERO_IMAGE})` }} role="img" aria-label="Elegant bridal beauty treatment" />
        <div className="hero__overlay" />
        <div className="container">
          <div className="hero__content fade-up">
            <span className="hero__eyebrow">Birmingham's Premium Beauty &amp; Bridal Studio</span>
            <h1 className="hero__title">AS.PRO ARTIST</h1>
            <p className="hero__subtitle">Hair &amp; Beauty Salon</p>
            <p className="hero__quote">"Your Beauty, Our Artistry"</p>
            <p className="hero__desc">
              Professional hair, beauty, skincare and bridal artistry in Birmingham, created with
              experience, care and passion.
            </p>
            <div className="hero__ctas">
              <CTAButton to="/book" variant="gold">Book Your Appointment</CTAButton>
              <CTAButton to="/services" variant="outline-light">Explore Our Services</CTAButton>
            </div>
            <div className="hero__location">
              <IconPin width={16} height={16} /> {siteInfo.address}
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img src={WELCOME_IMAGE} alt="AS.PRO ARTIST salon interior" loading="lazy" />
            </div>
            <div>
              <span className="split__eyebrow">Welcome</span>
              <h2 className="split__title">Welcome to AS.PRO ARTIST</h2>
              <p>
                Led by founder and lead artist Nadiya, AS.PRO ARTIST brings over 15 years of
                professional hair and beauty expertise to Birmingham, with a special focus on
                bridal artistry.
              </p>
              <ul className="check-list">
                <li><span className="tick"><IconArrowRight width={16} height={16} /></span> 15+ years of professional experience</li>
                <li><span className="tick"><IconArrowRight width={16} height={16} /></span> Hair and beauty expertise</li>
                <li><span className="tick"><IconArrowRight width={16} height={16} /></span> Bridal artistry</li>
                <li><span className="tick"><IconArrowRight width={16} height={16} /></span> Professional training</li>
                <li><span className="tick"><IconArrowRight width={16} height={16} /></span> Personal and caring service</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <CTAButton to="/about" variant="outline-dark">Meet Nadiya</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Signature"
            goldWord="Services"
            subtitle="From bridal artistry to everyday beauty essentials — every treatment crafted with care."
          />
          <div className="grid grid--4">
            {signatureServices.map((s) => (
              <ServiceCard key={s.key} title={s.title} blurb={s.blurb} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL SPECIAL */}
      <section className="section section--cream">
        <div className="container">
          <div className="offer-banner">
            <div className="offer-banner__img" style={{ backgroundImage: `url(${BRIDAL_IMAGE})` }} role="img" aria-label="Bridal makeup artistry" />
            <div className="offer-banner__content">
              <span className="offer-banner__tag">Bridal Special</span>
              <h2 className="offer-banner__title">{bridalOffer.discount}</h2>
              <div className="offer-banner__price">
                <span className="from">{bridalOffer.fromPrice}</span>
                <span className="prev">{bridalOffer.previousPrice}</span>
              </div>
              <p className="offer-banner__note">{bridalOffer.note}</p>
              <div>
                <CTAButton to="/bridal" variant="gold">Book Bridal Consultation</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--black">
        <div className="container">
          <SectionHeading
            eyebrow="Why AS.PRO ARTIST"
            title="Why Choose"
            goldWord="AS.PRO ARTIST?"
            subtitle="Experience, artistry and premium care in every appointment."
          />
          <div className="grid grid--3">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div className="feature-card" key={item.title}>
                  <div className="feature-card__icon"><Icon width={24} height={24} /></div>
                  <h3 className="feature-card__title">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEET NADIYA */}
      <section className="section section--cream">
        <div className="container">
          <div className="split split--reverse">
            <div>
              <span className="split__eyebrow">The Artist</span>
              <h2 className="split__title">Meet Nadiya</h2>
              <p>I'm the face behind AS.PRO ARTIST — Hair &amp; Beauty Salon.</p>
              <p>
                With 15+ years of experience, I've trained with Lubna Rafiq, Naeem Khan, P. Louise
                and MAC, and worked with Asiana Magazine. Before opening AS.PRO ARTIST, I spent 15+
                years at Parveen's Salon in Alum Rock, honing my craft and caring for clients
                across hair, beauty and bridal artistry.
              </p>
              <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-gold-dark)" }}>
                Your Beauty, Our Artistry. ✨
              </p>
              <div style={{ marginTop: 24 }}>
                <CTAButton to="/about" variant="outline-dark">Meet Nadiya</CTAButton>
              </div>
            </div>
            <div className="split__media">
              <img src={NADIYA_IMAGE} alt="Nadiya, founder and lead artist of AS.PRO ARTIST" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FACIALS */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Skincare"
            title="Featured Facial"
            goldWord="Treatments"
            subtitle="A selection from our 28 specialised facial treatments."
          />
          <div className="grid grid--4">
            {featuredFacials.map((name) => (
              <div className="card" key={name} style={{ padding: "26px 22px" }}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 6 }}>{name}</h3>
                <Link to="/services" className="service-card__link">
                  View Price <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <CTAButton to="/services" variant="outline-dark">View All Facial Treatments</CTAButton>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="section section--black">
        <div className="container">
          <SectionHeading eyebrow="Limited Time" title="Special" goldWord="Offers" />
          <div className="grid grid--3" style={{ maxWidth: 480, margin: "0 auto" }}>
            <div className="offer-card">
              <span className="offer-card__tag">Bridal Special</span>
              <h3 style={{ marginBottom: 6 }}>{bridalOffer.discount}</h3>
              <div className="offer-banner__price">
                <span className="from">{bridalOffer.fromPrice}</span>
                <span className="prev">{bridalOffer.previousPrice}</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-onblack-muted)", margin: "10px 0 20px" }}>{bridalOffer.note}</p>
              <CTAButton to="/offers" variant="outline-gold">View All Offers</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="section section--cream social-block">
        <div className="container">
          <SectionHeading eyebrow="Follow Along" title="Find Us on" goldWord="Social Media" />
          <div className="social-block__handles">
            <a className="social-block__handle" href={siteInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
              <span className="social-block__icon"><IconInstagram width={26} height={26} /></span>
              <span>{siteInfo.instagramHandle}</span>
            </a>
            <a className="social-block__handle" href={siteInfo.tiktokUrl} target="_blank" rel="noopener noreferrer">
              <span className="social-block__icon"><IconTiktok width={26} height={26} /></span>
              <span>{siteInfo.tiktokHandle}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED WORK / PRESS */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="As Seen On"
            title="Featured"
            goldWord="Work"
            subtitle="Celebrity hair and makeup credits from published shoots and press events."
          />
          <div className="grid grid--2">
            {featuredWork.map((item) => (
              <div className="card press-card" key={item.id}>
                <img
                  className="press-card__img"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
                <div className="press-card__body" style={{ padding: "22px 24px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ marginBottom: 10 }}>{item.detail}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{item.credit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — renders only when real reviews exist in data/testimonials.js */}
      {testimonials.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <SectionHeading eyebrow="Client Love" title="What Our Clients" goldWord="Say" />
            <div className="grid grid--3">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.id}
                  quote={t.quote}
                  name={t.name}
                  service={t.service}
                  source={t.source}
                  rating={t.rating}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LOCATION & HOURS */}
      <section className="section section--black">
        <div className="container">
          <div className="split">
            <div>
              <span className="split__eyebrow">Visit Us</span>
              <h2 className="split__title">{siteInfo.businessName} — {siteInfo.tagline}</h2>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconPin width={18} height={18} /> {siteInfo.address}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconPhone width={18} height={18} /> {siteInfo.phoneDisplay}
              </p>
              <div style={{ marginTop: 20 }}>
                <CTAButton href={siteInfo.mapsUrl} variant="outline-gold" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </CTAButton>
              </div>
            </div>
            <OpeningHours />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Feel Beautiful?</h2>
          <p>Book your appointment with AS.PRO ARTIST today.</p>
          <div className="final-cta__ctas">
            <CTAButton to="/book" variant="gold">Book Appointment</CTAButton>
            <CTAButton href={callLink()} variant="outline-light" icon={<IconPhone width={16} height={16} />}>
              Call Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
