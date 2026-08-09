import { Link } from "react-router-dom";

const Breadcrumbs = ({ trail }) => (
  <nav className="breadcrumbs container" aria-label="Breadcrumb">
    <Link to="/">Home</Link>
    {trail.map((item) => (
      <span key={item.label}>
        <span aria-hidden="true">/</span>
        {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
