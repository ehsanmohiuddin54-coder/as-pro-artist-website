import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";

const Gallery = () => {
  usePageMeta(
    "Gallery | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Browse bridal, makeup, hair, facial and salon photography from AS.PRO ARTIST in Birmingham."
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Gallery"
        subtitle="A look at our bridal, hair, makeup and beauty artistry. Real salon photography coming soon."
        crumbLabel="Gallery"
      />
      <section className="section section--cream" style={{ paddingTop: 56 }}>
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

export default Gallery;
