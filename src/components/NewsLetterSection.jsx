import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";
import { generateCaptcha } from "../utilities/captchaUtils";
import "../assets/css/newsLetterSection.css";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    // Generate a new CAPTCHA when the component mounts
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Check if CAPTCHA matches
    if (captchaInput !== captcha) {
      setStatus("Captcha does not match. Please try again.");
      setCaptcha(generateCaptcha()); // Regenerate captcha after successful submission
      setCaptchaInput("");
      return;
    }

    // Simulating a successful subscription
    setStatus("Your subscription request has been sent. Thank you!");
    setEmail("");
    setCaptcha(generateCaptcha()); // Regenerate captcha after successful submission
    setCaptchaInput(""); // Reset captcha input
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  return (
    <>
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
              <Form onSubmit={handleSubscribe} className="email-form">
                <div className="newsletter-form">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* CAPTCHA Section */}
                <div className="captcha-section">
                  <p>
                    {/* <span className="captcha-text">{captcha}</span> */}
                    <span className="captcha-text">
                      {captcha.split("").map((char, index) => (
                        <span
                          key={index}
                          className={`captcha-letter letter-${index}`}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    <i
                      className="bi bi-arrow-clockwise refresh-icon"
                      onClick={() => setCaptcha(generateCaptcha())}
                      role="button"
                      aria-label="Refresh CAPTCHA"
                    ></i>
                  </p>
                  <input
                    type="text"
                    name="captcha"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Enter captcha"
                    required
                  />
                </div>

                <Button type="submit">Subscribe</Button>

                {status && (
                  <div
                    className={`alert ${status.includes("Captcha") ? "alert-danger" : "alert-success"}`}
                    role="alert"
                  >
                    {status}
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
