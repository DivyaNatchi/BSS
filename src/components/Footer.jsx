import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import "../assets/css/footer.css";
import { Link } from "react-scroll";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simulating a successful subscription
    setStatus("Your subscription request has been sent. Thank you!");
    setEmail("");
  };

  // Function to toggle the visibility of the scroll-to-top button
  const toggleScrollTop = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTop);
    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <Form onSubmit={handleSubscribe} className="php-email-form">
                <div className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                {status && <div className="sent-message">{status}</div>}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Links Section */}
      <Container className="footer-top">
        <Row className="gy-4">
          {/* About Section */}
          <Col lg={4} md={6} className="footer-about">
            <Link
              to="hero"
              className="d-flex align-items-center"
              style={{ textDecoration: "none" }}
            >
              <span className="sitename">Byte Size IT Solution</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>18 West Gorgie Place</p>
              <p>Edinburgh, Scotland, EH14 1AD</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+44 7982 594 224</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>contactus@bytesizeitsolutions.com</span>
              </p>
            </div>
          </Col>

          {/* Useful Links Section */}
          <Col lg={2} md={3} className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Terms of service</a>
              </li>
            </ul>
          </Col>

          {/* Our Services Section */}
          <Col lg={2} md={3} className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>{" "}
                <a href="#">Marketing</a>
              </li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col lg={4} md={12}>
            <h4>Follow Us</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-links d-flex">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <Container className="copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Byte Size IT Solutions</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">Designed by Byte Size IT Solutions</div>
      </Container>
      {isVisible && (
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center active"
          onClick={scrollToTop}
          style={{ textDecoration: "none" }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </footer>
  );
}
