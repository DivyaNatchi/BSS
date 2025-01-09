import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AOS from "aos"; // If you want to use the AOS library for animations
import "aos/dist/aos.css"; // Import AOS styles
import heroImage from "../assets/img/hero-img.png";
import "../assets/css/hero.css";

export default function Hero() {
  // Initialize AOS (if using AOS for animations)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <Container>
        <Row className="gy-4">
          {/* Left side content */}
          <Col
            lg="6"
            className="order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="zoom-out"
          >
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="d-flex">
              <Button href="#about" color="primary" className="btn-get-started">
                Get Started
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                color="link"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                {/* <BsPlayCircle className="me-2" /> */}
                <i className="bi bi-play-circle me-2"></i>
                <span>Watch Video</span>
              </Button>
            </div>
          </Col>
          {/* Right side image */}
          <Col
            lg="6"
            className="order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={heroImage} className="img-fluid animated" alt="Hero" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
