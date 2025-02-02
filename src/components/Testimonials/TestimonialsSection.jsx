import React, { useEffect, useState } from "react";
import { Container, Button } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // For animations (if using AOS)
import "../../assets/css/testimonialsSection.css";
import testimonials from "../../data/testimonialData";
import TestimonialModal from "./TestimonialModal";

// Testimonials Section Component
export default function TestimonialsSection({
  toggleModal,
  modalOpen,
  selectedTestimonial,
  setSelectedTestimonial,
}) {
  // const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);

  // Initialize AOS (if using AOS for animations)
  useEffect(() => {
    AOS.init();
  }, []);

  // const toggleModal = (testimonial = null) => {
  //   setSelectedTestimonial(testimonial);
  //   setModalOpen(!modalOpen);
  // };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
      </div>
      <Container data-aos="fade-up">
        {/* Swiper Component for Testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          // pagination={{
          //   el: ".swiper-pagination",
          //   type: "bullets",
          //   clickable: true,
          // }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={`${testimonial.name}'s testimonial`}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.feedback}
                  {testimonial.hasReadMore && (
                    <Button
                      color="link"
                      onClick={() => toggleModal(testimonial)}
                      className="details-link"
                    >
                      <i className="bi bi-arrow-right read-more-icon"></i>
                    </Button>
                  )}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>

      {/* Pass necessary props to the TestimonialModal */}
      <TestimonialModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        selectedTestimonial={selectedTestimonial}
      />
    </section>
  );
}
