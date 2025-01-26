import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/whyUsSection.css";
import Aos from "aos";
// Import image
import whyUsImage from "../assets/img/why-us.png";

export default function WhyUsSection() {
  // State to manage expanded status for each FAQ
  const [activeFaqs, setActiveFaqs] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    Aos.init({
      duration: 1000, // Control animation duration
      easing: "ease-out", // Smooth easing
      once: true, // Animation happens only once
    });
  }, []);

  // Toggle active FAQ, allowing multiple to stay expanded
  const toggleFaq = (index) => {
    setActiveFaqs((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the clicked FAQ
    }));
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
                <span>Innovative Solutions for a Growing Future </span>
                <strong>Empowering Your Business, One Step at a Time</strong>
              </h3>
              <p>
                Choosing Byte Size IT Solutions means partnering with a team
                that’s driven to see your business grow. We tailor each solution
                to meet the exact needs of SMEs, combining innovation with
                affordability. With us, technology becomes your greatest ally —
                enabling your business to flourish while staying within budget.
                Let’s build a brighter, tech-powered future together!
              </p>
            </div>

            <div
              className="faq-container px-xl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* FAQ Items */}
              {[
                {
                  id: 1,
                  title: "Developing Solutions for SMEs",
                  content: `At Byte Size, we're not just service providers. we're also product developers. We design and build our own products and services specifically tailored for SMEs. Our goal is to provide robust, user-friendly solutions that address the unique pain points of small and medium-sized businesses.`,
                },
                {
                  id: 2,
                  title: "Affordable Pricing",
                  content: `We believe that technology should be accessible to all businesses, regardless of size or budget. That's why we offer our products and services at very reasonable prices, ensuring that SMEs can leverage the power of technology without breaking the bank.
`,
                },
                {
                  id: 3,
                  title: "Beyond Business",
                  content: `At Byte Size IT Solutions, we believe in giving back to the community. As part of our Corporate Social Responsibility (CSR) efforts, we develop products that address everyday needs, supporting small businesses and the public free of charge.`,
                },
                {
                  id: 4,
                  title: "Our Philosophy",
                  content: `We don't just solve problems; we craft solutions that empower businesses, promote growth, and support our community. Our team is dedicated to making a positive impact through technology, and we're excited to partner with you on your digital journey.`,
                },
              ].map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${activeFaqs[faq.id] ? "faq-active" : ""}`}
                >
                  <h3 onClick={() => toggleFaq(faq.id)}>
                    <span>{`0${faq.id}`}</span> {faq.title}
                  </h3>
                  {activeFaqs[faq.id] && (
                    <div className="faq-content">
                      <p>{faq.content}</p>
                    </div>
                  )}
                  <i
                    // className={`faq-toggle bi ${activeFaqs[faq.id] ? "bi-chevron-down" : "bi-chevron-right"}`}
                    className={`faq-toggle bi bi-chevron-right`}
                    onClick={() => toggleFaq(faq.id)}
                  ></i>
                </div>
              ))}
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
              data-aos-duration="1200" // Set duration for image animation
              data-aos-easing="ease-out-cubic" // Smooth easing for image zoom
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
