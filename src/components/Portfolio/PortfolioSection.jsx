import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../../assets/css/portfolioSection.css"; // Assuming custom styles are added
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // For animations (if using AOS)
import portfolioItems from "../../data/portfolioData";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioSection({
  toggleModal,
  modalOpen,
  selectedProject,
  setSelectedProject,
}) {
  const [activeFilter, setActiveFilter] = useState("*");
  // const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project for the modal
  // const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const filters = [
    { name: "All", filter: "*" },
    { name: "App", filter: "filter-app" },
    { name: "Card", filter: "filter-product" },
    { name: "Web", filter: "filter-branding" },
  ];

  // const toggleModal = (project = null) => {
  //   setSelectedProject(project);
  //   setModalOpen(!modalOpen);
  // };

  // Initialize AOS (if using AOS for animations)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="section-title" data-aos="fade-up">
        <h2>Our Portfolio</h2>
        <p>
          At Byte Size IT Solutions Pvt. Limited, every project is a new
          chapter, every client is a partner in success, and every solution is a
          story of transformation.
        </p>
      </div>

      <Container className="portfolio-container" data-aos="fade-up">
        {/* Swiper Component for Testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={30}
          // pagination={{
          //   el: ".swiper-pagination",
          //   type: "bullets",
          //   clickable: true,
          // }}
          breakpoints={{
            587: {
              slidesPerView: 2, // Adjust for larger screens
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2, // Adjust for larger screens
              spaceBetween: 30,
            },
          }}
        >
          {portfolioItems
            .filter(
              (item) => activeFilter === "*" || item.filter === activeFilter
            )
            .map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  key={`${index}-${modalOpen}`}
                  className={`portfolio-item isotope-item card-layout ${item.filter}`}
                >
                  <div className="portfolio-image-wrapper">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <Button
                      color="link"
                      onClick={() => toggleModal(item)}
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>

      {/* PortfolioModal Component */}
      <PortfolioModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selectedProject={selectedProject}
      />
    </section>
  );
}
