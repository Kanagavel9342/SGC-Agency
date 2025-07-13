import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaClock,
} from "react-icons/fa";
import "../Styles/contact.css"; // Css path is correct

const Contact = () => {
  return (
    <div className="contact-container pt-5">
      <Helmet>
        <title>Sree GanaPhy Caabs | 24/7 Cab Services</title>
        <meta
          name="description"
          content="Reach Sreegana Phy Cabs via phone, WhatsApp, email, or social media. Available 24/7 for your transportation needs across Tamil Nadu."
        />
        <meta
          name="keywords"
          content="cab service contact, taxi booking, Sreegana Phy Cabs phone, Coimbatore taxi"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="contact-main-title">Contact Sreegana Phy Cabs</h1>
              <p className="contact-subtitle">
                We're available 24/7 to assist with your travel needs across
                Tamil Nadu and beyond
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <Container>
          <Row>
            {/* Primary Contact Methods */}
            <Col lg={8} className="contact-primary-col">
              <Row>
                <Col md={6} className="contact-method-col pb-4">
                  <div className="contact-method-card pt- ">
                    <div className="contact-method-header">
                      <div className="contact-method-icon">
                        <FaPhone className="contact-icon-" />
                      </div>
                      <h3>Call Us</h3>
                    </div>
                    <a href="tel:+919003414107" className="contact-method-link">
                      +91 90034 14107
                    </a>
                    <p className="contact-method-description">
                      Available 24/7 for immediate assistance
                    </p>
                  </div>
                </Col>

                <Col md={6} className="contact-method-col pb-3">
                  <div className="contact-method-card">
                    <div className="contact-method-header">
                      <div className="contact-method-icon">
                        <FaWhatsapp className="contact-icon-" />
                      </div>
                      <h3>WhatsApp</h3>
                    </div>
                    <a
                      href="https://wa.me/919003414107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-link"
                    >
                      Chat Now
                    </a>
                    <p className="contact-method-description">
                      Instant response during business hours
                    </p>
                  </div>
                </Col>

                <Col md={6} className="contact-method-col pb-4 pt-3">
                  <div className="contact-method-card">
                    <div className="contact-method-header">
                      <div className="contact-method-icon">
                        <FaEnvelope className="contact-icon-" />
                      </div>
                      <h3>Email</h3>
                    </div>
                    <a
                      href="mailto:sreeganapathycaabs@gmail.com"
                      className="contact-method-link"
                    >
                      sreeganapathycaabs@gmail.com
                    </a>
                    <p className="contact-method-description">
                      For detailed inquiries and bookings
                    </p>
                  </div>
                </Col>

                <Col md={6} className="contact-method-col pt-3 pb-4">
                  <div className="contact-method-card">
                    <div className="contact-method-header">
                      <div className="contact-method-icon">
                        <FaMapMarkerAlt className="contact-icon-" />
                      </div>
                      <h3>Location</h3>
                    </div>
                    <p className="contact-method-text">
                      Coimbatore, Tamil Nadu
                    </p>
                    <p className="contact-method-description">
                      Services available across India
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* Social Media & Hours */}
            <Col lg={4} className="contact-social-col">
              <div className="contact-social-card">
                <h2 className="contact-social-title">Connect With Us</h2>

                <div className="contact-social-media">
                  <h4>Social Media</h4>
                  <div className="contact-social-links">
                    <a
                      href="https://instagram.com/sreeganapathycaabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                    >
                      <div className="contact-social-icon">
                        <FaInstagram className="contact-icon-" />
                      </div>
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://facebook.com/sreeganapathycaabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                    >
                      <div className="contact-social-icon">
                        <FaFacebook className="contact-icon-" />
                      </div>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="contact-operating-hours">
                  <div className="contact-hours-header">
                    <FaClock className="contact-hours-icon" />
                    <h4>Operating Hours</h4>
                  </div>
                  <ul className="contact-hours-list">
                    <li>24/7 for emergency services</li>
                    <li>Regular bookings: 6AM - 11PM</li>
                    <li>Holiday services available</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <Container>
          <Row>
            <Col className="text-center contact-map-header">
              <h2>Our Service Area</h2>
              <p>
                We provide cab services throughout Tamil Nadu and neighboring
                states
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="contact-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.10730383696!2d76.955708!3d11.004556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzE2LjQiTiA3NsKwNTcnMjAuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="Sreegana Phy Cabs Service Area"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
