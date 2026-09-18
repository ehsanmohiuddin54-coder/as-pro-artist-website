import { useLocation } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import BookingForm from "../components/BookingForm";
import { siteInfo } from "../data/siteInfo";

const Book = () => {
  usePageMeta(
    "Book an Appointment | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Request an appointment with AS.PRO ARTIST in Birmingham. We'll confirm availability by phone or WhatsApp."
  );
  const location = useLocation();
  const defaultService = location.state?.service || "";

  return (
    <>
      <PageHeader
        eyebrow="Appointment Request"
        title="Book Your Appointment"
        subtitle={`We'll get back to you to confirm availability. Prefer to talk? Call ${siteInfo.phoneDisplay}.`}
        crumbLabel="Book Now"
      />
      <section className="section section--cream" style={{ paddingTop: 56 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <BookingForm defaultService={defaultService} />
        </div>
      </section>
    </>
  );
};

export default Book;
