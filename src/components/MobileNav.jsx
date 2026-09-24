import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import SocialButtons from "./SocialButtons";
import { IconClose, IconPhone, IconWhatsapp } from "./Icons";
import { siteInfo, whatsappLink, callLink } from "../data/siteInfo";

const MobileNav = ({ items, onClose }) => (
  <div
    className="mobile-nav"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation"
  >
    <div className="mobile-nav__header">
      <Logo />

      <button
        className="mobile-nav__close"
        onClick={onClose}
        aria-label="Close menu"
      >
        <IconClose width={28} height={28} />
      </button>
    </div>

    <nav className="mobile-nav__links" aria-label="Mobile">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          onClick={onClose}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>

    <div className="mobile-nav__footer">
      <CTAButton
        to="/book"
        variant="gold"
        onClick={onClose}
      >
        Book Now
      </CTAButton>

      <CTAButton
        href={whatsappLink(siteInfo.whatsappMessages.general)}
        variant="whatsapp"
        icon={<IconWhatsapp width={16} height={16} />}
      >
        WhatsApp Us
      </CTAButton>

      <CTAButton
        href={callLink()}
        variant="outline-light"
        icon={<IconPhone width={16} height={16} />}
      >
        Call {siteInfo.phoneDisplay}
      </CTAButton>

      <div className="mobile-nav__socials">
        <SocialButtons />
      </div>
    </div>
  </div>
);

export default MobileNav;