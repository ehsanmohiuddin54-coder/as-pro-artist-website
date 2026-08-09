import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialButtons from "./SocialButtons";
import { siteInfo } from "../data/siteInfo";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <Logo />
          <p style={{ marginTop: 18 }}>
            Premium hair, beauty, skincare and bridal artistry in Birmingham — crafted with experience, care and passion.
          </p>
          <p className="footer__slogan">"{siteInfo.slogan}"</p>
        </div>

        <div>
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li><Link to="/about">About Nadiya</Link></li>
            <li><Link to="/services">Services &amp; Prices</Link></li>
            <li><Link to="/bridal">Bridal</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/book">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Visit Us</h3>
          <ul className="footer__links">
            <li>{siteInfo.address}</li>
            <li>{siteInfo.phoneDisplay}</li>
          </ul>
          <h3 className="footer__heading" style={{ marginTop: 24 }}>Opening Hours</h3>
          <ul className="footer__links">
            {siteInfo.openingHours.map((row) => (
              <li key={row.days}>{row.days}: {row.hours}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Follow Us</h3>
          <ul className="footer__links">
            <li>Instagram {siteInfo.instagramHandle}</li>
            <li>TikTok {siteInfo.tiktokHandle}</li>
          </ul>
          <SocialButtons />
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 {siteInfo.businessName} — {siteInfo.tagline}. All rights reserved.</span>
        <span>{siteInfo.slogan}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
