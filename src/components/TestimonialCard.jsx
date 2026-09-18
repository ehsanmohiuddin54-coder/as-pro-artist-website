/**
 * Renders a real testimonial when { quote, name } are supplied via props.
 * No reviews are invented — real client quotes are added to
 * src/data/testimonials.js and rendered from there.
 */
const Stars = ({ rating }) => (
  <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
    {"★".repeat(Math.round(rating))}
    <span className="testimonial-card__stars-dim">{"★".repeat(5 - Math.round(rating))}</span>
  </div>
);

const TestimonialCard = ({ quote, name, service, source, rating }) => {
  if (!quote) {
    return (
      <div className="testimonial-card testimonial-card--placeholder">
        <p>Customer testimonials will appear here.</p>
      </div>
    );
  }
  return (
    <figure className="testimonial-card">
      {rating ? <Stars rating={rating} /> : null}
      <blockquote className="testimonial-card__quote">"{quote}"</blockquote>
      <figcaption className="testimonial-card__name">
        — {name}
        {service ? <span className="testimonial-card__meta"> · {service}</span> : null}
        {source ? <span className="testimonial-card__meta"> · via {source}</span> : null}
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
