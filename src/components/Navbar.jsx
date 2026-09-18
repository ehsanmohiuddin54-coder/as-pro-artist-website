import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import MobileNav from "./MobileNav";
import { IconMenu } from "./Icons";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/bridal", label: "Bridal" },
  { to: "/offers", label: "Offers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <nav className="navbar__inner" aria-label="Primary">
        <Logo />
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="nav-links" style={{ gap: 0 }}>
            <CTAButton to="/book" variant="gold" size="sm">
              Book Now
            </CTAButton>
          </div>
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <IconMenu width={26} height={26} />
          </button>
        </div>
      </nav>
      {mobileOpen && <MobileNav items={NAV_ITEMS} onClose={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Navbar;
