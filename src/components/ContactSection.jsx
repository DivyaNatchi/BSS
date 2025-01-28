import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../assets/css/contactSection.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    setStatus("Message sent! Thank you!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact section light-background">
      <Container className="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          {/* Contact Info Section */}
          <Col lg={5}>
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>18 West Gorgie Place</p>
                  <p>Edinburgh, Scotland, EH14 1AD</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+44 7982 594 224</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>contactus@bytesizeitsolutions.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.112213866131!2d-3.2488601880585373!3d55.93009257821028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c73fc0d8ca1f%3A0x934f0cdaccae31be!2s18%20W%20Gorgie%20Pl%2C%20Edinburgh%20EH14%201AD%2C%20UK!5e0!3m2!1sen!2sqa!4v1736662976907!5m2!1sen!2sqa"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col lg={7}>
            <div className="info-wrap">
              <Form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Row className="gy-4">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name-field">Your Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name-field"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="email-field">Your Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="subject-field">Subject</Label>
                      <Input
                        type="text"
                        name="subject"
                        id="subject-field"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="message-field">Message</Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message-field"
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col md={12} className="text-center">
                    <div
                      className={
                        status === "Message sent! Thank you!"
                          ? "sent-message"
                          : ""
                      }
                    >
                      {status}
                    </div>
                    <Button type="submit" color="primary">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
