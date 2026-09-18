import { useState } from "react";
import { galleryCategories, galleryImages } from "../data/gallery";
import Lightbox from "./Lightbox";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <div className="gallery-filters">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry">
        {filtered.map((img, i) => (
          <figure className="masonry__item" key={img.id} onClick={() => setLightboxIndex(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <figcaption className="masonry__caption">{img.category}</figcaption>
          </figure>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
};

export default GalleryGrid;
