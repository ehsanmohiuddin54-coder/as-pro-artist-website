import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import PageHeader from "../components/PageHeader";
import { IconSearch } from "../components/Icons";
import { categories, services } from "../data/services";
import { siteInfo, whatsappLink } from "../data/siteInfo";

const Services = () => {
  usePageMeta(
    "Services & Prices | AS.PRO ARTIST Hair & Beauty Salon Birmingham",
    "Full price list for AS.PRO ARTIST — threading, waxing, facials, hair services, makeup and bridal packages in Birmingham."
  );

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCategory === "all" || activeCategory === c.id)
      .map((c) => ({
        ...c,
        items: services.filter(
          (s) => s.category === c.id && (!q || s.name.toLowerCase().includes(q))
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCategory]);

  return (
    <>
      <PageHeader
        eyebrow="Price List"
        title="Services & Prices"
        subtitle="Transparent pricing across hair, beauty, skincare and bridal artistry."
        crumbLabel="Services"
      />

      <section className="section section--cream" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="services-toolbar">
            <div className="services-search">
              <IconSearch width={18} height={18} />
              <input
                type="search"
                placeholder="Search a service..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search services"
              />
            </div>
            <div className="category-filters">
              <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={activeCategory === c.id ? "active" : ""}
                  onClick={() => setActiveCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {filteredCategories.length === 0 && (
            <p className="no-results">No services match your search.</p>
          )}

          {filteredCategories.map((cat) => (
            <div className="price-category" key={cat.id}>
              <h2 className="price-category__title">{cat.label}</h2>
              <div className="price-list">
                {cat.items.map((service) => (
                  <div className="price-row" key={service.name}>
                    <div>
                      <div className="price-row__name">{service.name}</div>
                      {service.description && (
                        <div className="price-row__desc">{service.description}</div>
                      )}
                    </div>
                    <div className="price-row__right">
                      <span className="price-row__price">{service.price}</span>
                      {service.category === "makeup" && service.name.includes("Bridal") ? (
                        <a
                          className="price-row__book"
                          href={whatsappLink(siteInfo.whatsappMessages.bridal)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Enquire
                        </a>
                      ) : (
                        <Link className="price-row__book" to="/book" state={{ service: service.name }}>
                          Book
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
