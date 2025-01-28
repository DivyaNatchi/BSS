import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../assets/css/portfolioSection.css"; // Assuming custom styles are added

// Import images
import portfolioImage1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import portfolioImage2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import portfolioImage3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import portfolioImage4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
import portfolioImage5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
import portfolioImage6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
import portfolioImage7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
import portfolioImage8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";
import portfolioImage9 from "../assets/img/masonry-portfolio/masonry-portfolio-9.jpg";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filters = [
    { name: "All", filter: "*" },
    { name: "App", filter: "filter-app" },
    { name: "Card", filter: "filter-product" },
    { name: "Web", filter: "filter-branding" },
  ];

  const portfolioItems = [
    {
      title: "App 1",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage1,
      filter: "filter-app",
    },
    {
      title: "Product 1",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage2,
      filter: "filter-product",
    },
    {
      title: "Branding 1",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage3,
      filter: "filter-branding",
    },
    {
      title: "App 2",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage4,
      filter: "filter-app",
    },
    {
      title: "Product 2",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage5,
      filter: "filter-product",
    },
    {
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage6,
      filter: "filter-branding",
    },
    {
      title: "App 3",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage7,
      filter: "filter-app",
    },
    {
      title: "Product 3",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage8,
      filter: "filter-product",
    },
    {
      title: "Branding 3",
      description: "Lorem ipsum, dolor sit",
      image: portfolioImage9,
      filter: "filter-branding",
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>
          Imagine a world where your ideas come to life, where your business
          evolves into a digital powerhouse, and where growth is not just a
          possibility—it’s a guarantee. At Byte Size IT Solutions Pvt. Limited,
          we are not just service providers; we are dream enablers.
        </p>
      </Container>

      <Container>
        {/* Portfolio Filters */}
        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter, index) => (
            <li
              key={index}
              className={activeFilter === filter.filter ? "filter-active" : ""}
              onClick={() => handleFilterClick(filter.filter)}
            >
              {filter.name}
            </li>
          ))}
        </ul>

        {/* Portfolio Items */}
        <Row
          className="gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolioItems
            .filter(
              (item) => activeFilter === "*" || item.filter === activeFilter
            )
            .map((item, index) => (
              <Col
                lg="4"
                md="6"
                key={index}
                className={`portfolio-item isotope-item ${item.filter}`}
              >
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <a
                    href={item.image}
                    title={item.title}
                    data-gallery={`portfolio-gallery-${item.filter}`}
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="/portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}
