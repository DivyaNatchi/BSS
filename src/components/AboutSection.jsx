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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check2-circle me-2"></i>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle me-2"></i>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle me-2"></i>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo.</span>
              </li>
            </ul>
          </Col>

          {/* Right Content */}
          <Col lg={6} data-aos="fade-up" data-aos-delay="200">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <Button
              color="link"
              className="read-more d-inline-flex align-items-center"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
