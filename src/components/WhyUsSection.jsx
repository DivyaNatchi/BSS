import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "../assets/css/whyUsSection.css";

// Import image
import whyUsImage from "../assets/img/why-us.png"; // Make sure the path is correct for your project

export default function WhyUsSection() {
  const [activeFaq, setActiveFaq] = useState(1); // State to manage active FAQ

  // Toggle active FAQ
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="why-us" className="section why-us light-background">
      <Container fluid>
        <Row className="gy-4">
          {/* Left Content */}
          <Col
            lg={7}
            className="d-flex flex-column justify-content-center order-2 order-lg-1"
          >
            <div
              className="content px-xl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <span>Eum ipsam laborum deleniti </span>
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit.
              </p>
            </div>

            <div
              className="faq-container px-xl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* FAQ Items */}
              <div
                className={`faq-item ${activeFaq === 1 ? "faq-active" : ""}`}
              >
                <h3 onClick={() => toggleFaq(1)}>
                  <span>01</span> Non consectetur a erat nam at lectus urna
                  duis?
                </h3>
                {activeFaq === 1 && (
                  <div className="faq-content">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                )}
                <i
                  className={`faq-toggle bi ${activeFaq === 1 ? "bi-chevron-down" : "bi-chevron-right"}`}
                ></i>
              </div>

              <div
                className={`faq-item ${activeFaq === 2 ? "faq-active" : ""}`}
              >
                <h3 onClick={() => toggleFaq(2)}>
                  <span>02</span> Feugiat scelerisque varius morbi enim nunc
                  faucibus a pellentesque?
                </h3>
                {activeFaq === 2 && (
                  <div className="faq-content">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                )}
                <i
                  className={`faq-toggle bi ${activeFaq === 2 ? "bi-chevron-down" : "bi-chevron-right"}`}
                ></i>
              </div>

              <div
                className={`faq-item ${activeFaq === 3 ? "faq-active" : ""}`}
              >
                <h3 onClick={() => toggleFaq(3)}>
                  <span>03</span> Dolor sit amet consectetur adipiscing elit
                  pellentesque?
                </h3>
                {activeFaq === 3 && (
                  <div className="faq-content">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis.
                    </p>
                  </div>
                )}
                <i
                  className={`faq-toggle bi ${activeFaq === 3 ? "bi-chevron-down" : "bi-chevron-right"}`}
                ></i>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col lg={5} className="order-1 order-lg-2 why-us-img">
            <img
              src={whyUsImage}
              alt="Why Us"
              className="img-fluid"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
