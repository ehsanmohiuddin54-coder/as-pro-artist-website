import { IconClock } from "./Icons";
import { siteInfo } from "../data/siteInfo";

const OpeningHours = ({ variant }) => (
  <div className={`hours-card${variant === "light" ? " hours-card--light" : ""}`}>
    <h3 style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-gold-light)" }}>
      <IconClock /> Opening Hours
    </h3>
    {siteInfo.openingHours.map((row) => (
      <div className="hours-row" key={row.days}>
        <span>{row.days}</span>
        <span>{row.hours}</span>
      </div>
    ))}
  </div>
);

export default OpeningHours;
