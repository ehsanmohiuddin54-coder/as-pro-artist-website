import { IconInstagram, IconTiktok, IconWhatsapp, IconPhone } from "./Icons";
import { siteInfo, whatsappLink, callLink } from "../data/siteInfo";

const SocialButtons = ({ includeContact = false }) => (
  <div className="footer__socials" role="list" aria-label="Social media links">
    <a
      className="social-btn"
      href={siteInfo.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="AS.PRO ARTIST on Instagram"
    >
      <IconInstagram />
    </a>
    <a
      className="social-btn"
      href={siteInfo.tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="AS.PRO ARTIST on TikTok"
    >
      <IconTiktok />
    </a>
    {includeContact && (
      <>
        <a
          className="social-btn"
          href={whatsappLink(siteInfo.whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
        >
          <IconWhatsapp />
        </a>
        <a className="social-btn" href={callLink()} aria-label="Call the salon">
          <IconPhone />
        </a>
      </>
    )}
  </div>
);

export default SocialButtons;
