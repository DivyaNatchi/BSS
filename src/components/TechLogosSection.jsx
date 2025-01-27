import React, { useEffect } from "react";
import { Container } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // If you're using AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "../assets/css/TechlogosSection.css";

// Importing techlogo images
import tech1 from "../assets/img/techLogos/flutter.png";
import tech2 from "../assets/img/techLogos/react.png";
import tech3 from "../assets/img/techLogos/nodejs.png";
import tech4 from "../assets/img/techLogos/zend.jpg";
import tech5 from "../assets/img/techLogos/firebase.jpg";
import tech6 from "../assets/img/techLogos/sqlite.jpg";
import tech7 from "../assets/img/techLogos/mangodb.jpg";
import tech8 from "../assets/img/techLogos/mySQL.jpg";
import tech9 from "../assets/img/techLogos/mariadb.jpg";
import tech10 from "../assets/img/techLogos/postgreSQL.jpg";
import tech11 from "../assets/img/techLogos/dart.jpg";
import tech12 from "../assets/img/techLogos/php.jpg";

export default function TechlogosSection() {
  // Initialize AOS (if using AOS for animations)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="clients" className="clients section light-background">
      <Container data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000, // Adjust delay to control the time between slides
            disableOnInteraction: false, // Ensure autoplay doesn't stop when interacting
          }}
          slidesPerView="auto"
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={tech1}
              className="img-fluid tech-logo"
              alt="Flutter Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tech2} className="img-fluid tech-logo" alt="React Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech3}
              className="img-fluid tech-logo"
              alt="Nodejs Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech4}
              className="img-fluid tech-logo"
              alt="Zend Framework Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech5}
              className="img-fluid tech-logo"
              alt="Firebase Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech6}
              className="img-fluid tech-logo"
              alt="Sqlite Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech7}
              className="img-fluid tech-logo"
              alt="MangoDB Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tech8} className="img-fluid tech-logo" alt="MySQL Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech9}
              className="img-fluid tech-logo"
              alt="MariaDB Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={tech10}
              className="img-fluid tech-logo"
              alt="PostgreSQL Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tech11} className="img-fluid tech-logo" alt="Dart Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tech12} className="img-fluid tech-logo" alt="PHP Logo" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
