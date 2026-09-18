import { Link } from "react-router-dom";

/**
 * Reusable CTA button.
 * variant: "gold" | "outline-dark" | "outline-gold" | "outline-light" | "whatsapp"
 * `to` renders an internal Link, `href` renders a plain anchor (external/tel/wa.me).
 */
const CTAButton = ({ to, href, variant = "gold", size, icon, children, ...rest }) => {
  const className = `btn btn--${variant}${size ? ` btn--${size}` : ""}`;
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children} {icon}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...rest}>
      {children} {icon}
    </a>
  );
};

export default CTAButton;
