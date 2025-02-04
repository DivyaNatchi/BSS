import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../assets/css/aboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p className="about-us">
          At Byte Size IT Solutions Pvt. Limited, we're passionate about
          harnessing technology to empower businesses and drive growth. With
          nearly two decades of industry expertise, our team has delivered
          quality IT solutions that cater to the unique needs of Small and
          Medium Enterprises (SMEs).
        </p>
      </Container>

      <Container>
        <Row className="gy-4">
          {/* Left Content */}
          <Col
            lg={6}
            className="content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <i className="bi bi-check2-circle me-2"></i>
            <span>Our Mission</span>
            <p>
              Our mission is straightforward: to provide innovative,
              cost-effective, and simple IT solutions that help SMEs thrive in
              today's competitive market. We achieve this by leveraging
              cutting-edge technology, efficient processes, and a
              customer-centric approach.
            </p>
          </Col>

          {/* Right Content */}
          <Col
            lg={6}
            className="content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="bi bi-check2-circle me-2"></i>
            <span>Our Commitment</span>
            <p>
              We recognize the challenges SMEs face in accessing customized
              digital solutions due to cost and delivery constraints. That's why
              we're committed to delivering affordable and timely solutions that
              meet the specific needs of our clients.
            </p>
            {/* <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p> */}
            {/* <Button
              color="link"
              className="read-more d-inline-flex align-items-center"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
