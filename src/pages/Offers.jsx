import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import CTAButton from "../components/CTAButton";
import { currentOffers } from "../data/siteInfo";

const Offers = () => {
  usePageMeta(
    "Offers | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Current confirmed promotions at AS.PRO ARTIST — including our bridal makeup special, 30% off plus a free facial."
  );

  const activeOffers = currentOffers.filter((o) => o.active);

  return (
    <>
      <PageHeader
        eyebrow="Promotions"
        title="Special Offers"
        subtitle="Only confirmed, current promotions are shown here — check back for new offers."
        crumbLabel="Offers"
      />

      <section className="section section--cream">
        <div className="container">
          {activeOffers.length === 0 ? (
            <p className="text-center">No active offers at the moment — please check back soon.</p>
          ) : (
            <div className="grid grid--3" style={{ maxWidth: 480, margin: "0 auto" }}>
              {activeOffers.map((offer) => (
                <div className="offer-card" key={offer.id}>
                  <span className="offer-card__tag">Bridal Special</span>
                  <h3 style={{ marginBottom: 6 }}>{offer.title}</h3>
                  <p style={{ color: "var(--color-gold-light)", fontWeight: 600 }}>{offer.description}</p>
                  <div className="offer-banner__price">
                    <span className="from">{offer.fromPrice}</span>
                    {offer.previousPrice && <span className="prev">{offer.previousPrice}</span>}
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <CTAButton to="/bridal" variant="gold">View Bridal Details</CTAButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Offers;
