import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";
import CTAButton from "../components/CTAButton";
import { faqs } from "../data/faq";

const FAQ = () => {
  usePageMeta(
    "FAQ | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Answers to common questions about appointments, bridal bookings, deposits, opening hours and location at AS.PRO ARTIST."
  );

  return (
    <>
      <PageHeader
        eyebrow="Good to Know"
        title="Frequently Asked Questions"
        crumbLabel="FAQ"
      />
      <section className="section section--cream" style={{ paddingTop: 56 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <FAQAccordion items={faqs} />
          <div className="text-center" style={{ marginTop: 48 }}>
            <p>Still have a question?</p>
            <CTAButton to="/contact" variant="outline-dark">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
