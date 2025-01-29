import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/servicesSection.css";

const servicesData = [
  {
    icon: "bi-palette",
    title: "The Beginning: Crafting and Defining Your Brand's Identity",
    description:
      "Your brand is the face of your story, the first impression that speaks volumes. We start by helping you find your voice. Imagine a logo so striking that people remember it with a smile, messaging so powerful it stays in their minds, and a consistent brand presence across every platform.\nThrough thoughtful brand positioning, creative storytelling, and meticulous design, we make your brand a hero in its market. Because we know your story deserves nothing less than the spotlight.",
    delay: 100,
  },
  {
    icon: "bi-building",
    title: "The Next Step: Building and Strengthening Your Digital Home",
    description:
      "What is a great story without a stage to perform on? That's where we come in. Your website becomes the stage, the digital home where your customers come to connect with you.\nWe craft websites that are not just visually stunning but also smart. Custom designs showcase your personality, responsive layouts ensure your customers have a smooth experience on any device, and our SEO strategies make sure your digital home is easy to find.\nWith every click, we ensure your audience feels welcome, guided, and inspired to take action.",
    delay: 200,
  },
  {
    icon: "bi-cloud",
    title: "Streamlining Your Business: Web Apps That Work for You",
    description:
      "Imagine having tools so powerful, they handle the heavy lifting while you focus on what you do best. That's what our custom web applications deliverâ€”solutions designed to streamline your business operations, connect systems, and grow with you.\nFrom automating processes to ensuring your data is secure and manageable, we turn the chaos of running a business into a perfectly choreographed performance.",
    delay: 300,
  },
  {
    icon: "bi-phone",
    title: "Reaching Customers Anywhere: Mobile Apps Made to Engage",
    description:
      "In a world on the go, your customers need you at their fingertips. Picture a sleek, intuitive mobile app that captures their attention and keeps them coming back for more.\nWe design and develop apps for iOS and Android that are as engaging as they are functional. Whether it's shopping, booking, or exploring, your customers will love the experience you offer.",
    delay: 400,
  },

  {
    icon: "bi-lightbulb",
    title: "Turning Ideas into Adventures: Game Development at Its Finest",
    description:
      "Have you ever dreamed of creating a game that keeps players hooked, immersed, and eager for more? We bring those dreams to life.\nWith our custom game development, we combine captivating gameplay, breathtaking visuals, and seamless performance. The result? Games that aren't just played they're remembered.",
    delay: 400,
  },

  {
    icon: "bi-graph-up",
    title: "Finding Clarity in Complexity: Analytic Solutions That Empower",
    description:
      "Behind every successful decision lies powerful data. But how do you make sense of it all? We step in to turn your data into stories and strategies.\nImagine seeing your customer trends in crystal clarity, predicting what comes next, and taking bold steps forward with confidence. With our data visualization and predictive analytics, you'll always have the insights you need to stay ahead.",
    delay: 400,
  },

  {
    icon: "bi-router",
    title: "The Future is Connected: IoT Solutions for Tomorrow",
    description:
      "What if every device in your business could talk to each other, share data, and work together seamlessly? That's the magic of our IoT solutions.\nFrom custom systems to secure device integration, we build ecosystems that optimize operations and deliver real-time insights. The future isn't coming it's already here, and we'll help you embrace it.",
    delay: 400,
  },

  {
    icon: "bi-puzzle",
    title:
      "Running Your Business, Your Way: ERP Solutions That Fit Like a Glove",
    description:
      "Managing a business can feel like juggling a hundred things at once. But what if there was a single system that brought it all together? That's what our ERP solutions do.\nFrom implementation to customization, we create ERP systems tailored to your specific needs. With intuitive interfaces, seamless integration, and hands-on support, we help you focus on what mattersâ€”growing your business.",
    delay: 400,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      <Container className="section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p className="services-desc">
          Imagine a world where your ideas come to life, where your business
          evolves into a digital powerhouse, and where growth is not just a
          possibilityâ€”it's a guarantee. At Byte Size IT Solutions Pvt.
          Limited, we are not just service providers; we are dream enablers.
          Every business has a story, and every story deserves to shine. Let us
          take you on a journey of transformationâ€”one where your brand becomes
          unforgettable, your operations run seamlessly, and your customers are
          delighted at every step.
        </p>
      </Container>

      <Container>
        <Row className="gy-4">
          {servicesData.map((service, index) => (
            <Col
              key={index}
              xl="3"
              md="6"
              className="d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${service.icon} icon`}></i>
                </div>
                <h4>{service.title}</h4>
                {service.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
