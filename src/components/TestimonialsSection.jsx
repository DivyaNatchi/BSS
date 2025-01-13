import React, { useEffect } from "react";
import { Container } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // For animations (if using AOS)
import "aos/dist/aos.css"; // Import AOS styles
import "../assets/css/testimonialsSection.css";

// Importing testimonial images
import testimonialImg1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonialImg2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonialImg3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonialImg4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonialImg5 from "../assets/img/testimonials/testimonials-5.jpg";

// Testimonials data
const testimonials = [
  {
    name: "Saul Goodman",
    title: "Ceo & Founder",
    image: testimonialImg1,
    rating: 5,
    feedback:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson",
    title: "Designer",
    image: testimonialImg2,
    rating: 5,
    feedback:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Jena Karlis",
    title: "Store Owner",
    image: testimonialImg3,
    rating: 5,
    feedback:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    name: "Matt Brandon",
    title: "Freelancer",
    image: testimonialImg4,
    rating: 5,
    feedback:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    name: "John Larson",
    title: "Entrepreneur",
    image: testimonialImg5,
    rating: 5,
    feedback:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
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
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
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
          slidesPerView="auto"
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
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.feedback}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div> {/* Pagination bullets */}
      </Container>
    </section>
  );
}
