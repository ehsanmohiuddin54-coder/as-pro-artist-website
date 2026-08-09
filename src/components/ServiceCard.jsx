import { Link } from "react-router-dom";
import { IconArrowRight } from "./Icons";

const ServiceCard = ({ title, blurb, image, to = "/services" }) => (
  <div className="card service-card">
    <img className="service-card__img" src={image} alt={`${title} at AS.PRO ARTIST`} loading="lazy" />
    <div className="service-card__body">
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__blurb">{blurb}</p>
      <Link to={to} className="service-card__link">
        Explore Services <IconArrowRight width={16} height={16} />
      </Link>
    </div>
  </div>
);

export default ServiceCard;
