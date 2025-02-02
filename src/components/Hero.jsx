import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AOS from "aos"; // If you want to use the AOS library for animations
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
              Your partner in growth! Byte Size IT Solutions delivers
              affordable, innovative tech to help SMEs thrive in today’s digital
              world.
            </p>

            <div className="d-flex">
              <Button href="#about" color="primary" className="btn-get-started">
                Get Started
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
