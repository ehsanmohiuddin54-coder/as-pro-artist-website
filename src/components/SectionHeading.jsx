const SectionHeading = ({ eyebrow, title, goldWord, subtitle, align = "center" }) => (
  <div className="section-heading" style={align === "left" ? { margin: "0 0 40px", textAlign: "left" } : undefined}>
    {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
    <h2 className="section-heading__title">
      {title} {goldWord && <span className="gold">{goldWord}</span>}
    </h2>
    {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    {align === "center" && <span className="gold-underline" />}
  </div>
);

export default SectionHeading;
