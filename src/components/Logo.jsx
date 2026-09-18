import { Link } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

/**
 * Brand logo lockup.
 * Uses the real AS.PRO ARTIST mark (gold line-art head with comb & scissors),
 * exported as a transparent PNG so it sits cleanly on black, cream or gold.
 *   /public/logo-mark.png  — icon only (used here, beside the wordmark)
 *   /public/logo-full.png  — full stacked logo incl. type (footer / share images)
 *   /public/logo-icon.png  — square version for favicon / social previews
 *
 * variant: "onblack" (default) | "dark" (for light backgrounds)
 * full:    render the complete stacked logo image instead of the lockup
 */
const Logo = ({ variant = "onblack", full = false }) => {
  if (full) {
    return (
      <Link to="/" className="logo logo--full" aria-label={`${siteInfo.businessName} — home`}>
        <img
          src="/logo-full.png"
          alt={`${siteInfo.businessName} — ${siteInfo.tagline}`}
          className="logo__full-img"
          width="220"
          height="194"
        />
      </Link>
    );
  }

  return (
    <Link to="/" className="logo" aria-label={`${siteInfo.businessName} — home`}>
      <span className="logo__mark">
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="logo__mark-img"
          width="44"
          height="44"
          loading="eager"
        />
      </span>
      <span className="logo__text">
        <span
          className="logo__title"
          style={variant === "dark" ? { color: "#9c7a33" } : undefined}
        >
          AS.PRO ARTIST
        </span>
        <span className="logo__subtitle">Hair &amp; Beauty Salon</span>
      </span>
    </Link>
  );
};

export default Logo;
