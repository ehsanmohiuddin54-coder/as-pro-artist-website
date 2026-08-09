import Breadcrumbs from "./Breadcrumbs";

const PageHeader = ({ eyebrow, title, subtitle, crumbLabel }) => (
  <div className="section--black" style={{ paddingBottom: 56 }}>
    <Breadcrumbs trail={[{ label: crumbLabel }]} />
    <div className="container text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h1 className="section-heading__title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
        {title}
      </h1>
      {subtitle && <p className="section-heading__subtitle" style={{ margin: "14px auto 0" }}>{subtitle}</p>}
      <span className="gold-underline" />
    </div>
  </div>
);

export default PageHeader;
