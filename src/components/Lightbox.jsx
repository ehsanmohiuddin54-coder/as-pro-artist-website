import { useEffect, useCallback } from "react";
import { IconClose, IconArrowRight } from "./Icons";

const Lightbox = ({ images, index, onClose, onIndexChange }) => {
  const goNext = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  );
  const goPrev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goNext, goPrev]);

  const current = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <IconClose />
      </button>
      <button
        className="lightbox__nav lightbox__prev"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Previous image"
        style={{ transform: "translateY(-50%) scaleX(-1)" }}
      >
        <IconArrowRight />
      </button>
      <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} />
      <button
        className="lightbox__nav lightbox__next"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Next image"
      >
        <IconArrowRight />
      </button>
      <div className="lightbox__caption">{current.alt}</div>
    </div>
  );
};

export default Lightbox;
