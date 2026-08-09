import usePageMeta from "../hooks/usePageMeta";
import CTAButton from "../components/CTAButton";

const NotFound = () => {
  usePageMeta("Page Not Found | AS.PRO ARTIST", "The page you're looking for could not be found.");
  return (
    <section className="section section--cream text-center" style={{ minHeight: "50vh" }}>
      <div className="container">
        <h1 className="split__title">Page Not Found</h1>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <CTAButton to="/" variant="gold">Back to Home</CTAButton>
      </div>
    </section>
  );
};

export default NotFound;
