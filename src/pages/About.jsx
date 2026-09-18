import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import CTAButton from "../components/CTAButton";
import { brandStory, siteInfo } from "../data/siteInfo";

const PORTRAIT =
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80";

const About = () => {
  usePageMeta(
    "About Nadiya | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Meet Nadiya, founder and lead artist of AS.PRO ARTIST — 15+ years of professional hair, beauty and bridal artistry experience in Birmingham."
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Meet Nadiya — The Artist Behind AS.PRO ARTIST"
        crumbLabel="About"
      />

      <section className="section section--cream">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <img src={PORTRAIT} alt="Nadiya, founder and lead artist of AS.PRO ARTIST" loading="lazy" />
            </div>
            <div>
              <span className="split__eyebrow">Founder &amp; Lead Artist</span>
              <h2 className="split__title">Nadiya</h2>
              {brandStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid--2">
            <div className="card" style={{ padding: 34 }}>
              <h3 style={{ marginBottom: 16 }}>Trained With</h3>
              <ul className="check-list">
                {brandStory.trainedWith.map((name) => (
                  <li key={name}>
                    <span className="tick">✓</span> {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: 34 }}>
              <h3 style={{ marginBottom: 16 }}>Professional Experience</h3>
              <ul className="check-list">
                <li><span className="tick">✓</span> Worked with {brandStory.worksWith[0]}</li>
                <li><span className="tick">✓</span> 15+ years at {brandStory.previousSalon}</li>
                <li><span className="tick">✓</span> {siteInfo.experienceYears} years of professional experience</li>
                <li><span className="tick">✓</span> Founder &amp; lead artist, AS.PRO ARTIST</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container text-center" style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 className="split__title">Her Philosophy</h2>
          <p>
            Professional, skilled and caring service. Premium products. Organic and herbal
            treatments. Personal attention. Every client should feel comfortable, respected and
            beautiful.
          </p>
          <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-gold-dark)", marginTop: 24 }}>
            "{siteInfo.slogan}"
          </p>
          <div style={{ marginTop: 30 }}>
            <CTAButton to="/book" variant="gold">Book Your Appointment</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
