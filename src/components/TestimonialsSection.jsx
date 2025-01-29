import React, { useEffect } from "react";
import { Container } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // For animations (if using AOS)
import "../assets/css/testimonialsSection.css";

// Importing testimonial images
import anlo from "../assets/img/testimonials/anlo_logo.png";
import mac from "../assets/img/testimonials/MAC.jpg";

// Testimonials data
const testimonials = [
  {
    name: "Annja",
    title: "Ceo & Founder",
    image: anlo,
    feedback: `Byte Size has delivered an application that has rapidly become an invaluable part of how we operate, and they have done so at a highly competitive cost to the business. They understood our frustration with the output from Harvest and developed an innovative solution.`,
    hasReadMore: true,
  },
  {
    name: "Muthu",
    title: "Founder",
    image: mac,
    feedback: `Partnering with Byte Size IT Solutions was a game changer for us. Their innovative solutions have streamlined our operations and lifted a significant burden off our shoulders. The customized tool they developed has transformed how we manage our inventory and finances. Byte Size’s expertise and commitment stand out, making a substantial impact on our business’s growth trajectory. They truly offer big business solutions for small business budgets`,
    hasReadMore: false,
  },
];

// Testimonials Section Component
export default function TestimonialsSection() {
  // Initialize AOS (if using AOS for animations)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
      </div>
      <Container data-aos="fade-up">
        {/* Swiper Component for Testimonials */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={1}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
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
                    <i className="bi bi-arrow-right"></i>
                  )}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>

                {/* Conditionally render the "Read More" button based on the flag */}
                {testimonial.hasReadMore && (
                  <button className="read-more-btn">
                    Read More <i className="bi bi-arrow-right"></i>
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>
    </section>
  );
}
