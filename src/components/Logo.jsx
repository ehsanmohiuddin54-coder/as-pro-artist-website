import { Link } from "react-router-dom";
import { IconScissorsComb } from "./Icons";
import { siteInfo } from "../data/siteInfo";

// Text-based logo lockup built to match the supplied brand direction
// (black background, champagne-gold type, silver scissors/comb icon).
// Swap in the real logo file here if/when the asset is supplied —
// e.g. <img src="/logo.png" alt="AS.PRO ARTIST logo" /> — the rest of
// the site references this single component, so the change is centralised.
const Logo = ({ variant = "onblack" }) => (
  <Link to="/" className="logo" aria-label={`${siteInfo.businessName} — home`}>
    <span className="logo__mark">
      <IconScissorsComb style={{ color: "#c7cad1" }} width={20} height={20} />
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

export default Logo;
