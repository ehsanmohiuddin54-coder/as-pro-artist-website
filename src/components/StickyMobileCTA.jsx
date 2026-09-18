import CTAButton from "./CTAButton";
import { IconWhatsapp } from "./Icons";
import { siteInfo, whatsappLink } from "../data/siteInfo";

const StickyMobileCTA = () => (
  <div className="sticky-cta">
    <CTAButton href={whatsappLink(siteInfo.whatsappMessages.general)} variant="whatsapp" size="sm" icon={<IconWhatsapp width={16} height={16} />}>
      WhatsApp
    </CTAButton>
    <CTAButton to="/book" variant="gold" size="sm">
      Book Now
    </CTAButton>
  </div>
);

export default StickyMobileCTA;
