/**
 * Renders a real testimonial when { quote, name } are supplied via props,
 * otherwise falls back to a clearly-marked placeholder. No reviews are
 * invented — wire real customer quotes into this component when available.
 */
const TestimonialCard = ({ quote, name }) => {
  if (!quote) {
    return (
      <div className="testimonial-card testimonial-card--placeholder">
        <p>Customer testimonials will appear here.</p>
      </div>
    );
  }
  return (
    <div className="testimonial-card">
      <p className="testimonial-card__quote">"{quote}"</p>
      <p className="testimonial-card__name">— {name}</p>
    </div>
  );
};

export default TestimonialCard;
