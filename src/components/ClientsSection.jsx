import React, { useEffect } from "react";
import { Container } from "reactstrap"; // Assuming you're using Reactstrap for layout
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import AOS from "aos"; // If you're using AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "../assets/css/clientsSection.css";

// Importing client images
import client1 from "../assets/img/clients/client-1.png";
import client2 from "../assets/img/clients/client-2.png";
import client3 from "../assets/img/clients/client-3.png";
import client4 from "../assets/img/clients/client-4.png";
import client5 from "../assets/img/clients/client-5.png";
import client6 from "../assets/img/clients/client-6.png";
import client7 from "../assets/img/clients/client-7.png";
import client8 from "../assets/img/clients/client-8.png";

// Register modules
// SwiperCore.use([Autoplay, Pagination]);

export default function ClientsSection() {
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
            <img src={client1} className="img-fluid" alt="Client 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} className="img-fluid" alt="Client 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client3} className="img-fluid" alt="Client 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client4} className="img-fluid" alt="Client 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client5} className="img-fluid" alt="Client 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client6} className="img-fluid" alt="Client 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client7} className="img-fluid" alt="Client 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client8} className="img-fluid" alt="Client 8" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
