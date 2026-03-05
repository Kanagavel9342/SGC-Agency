import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import "../Styles/contact.css";

const Contact = () => {
  const location = useLocation();

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // Initialize AOS and scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, [location.pathname]);

  // Refresh AOS on component mount
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: "" });
    setShowSuccessAlert(false);
    setShowErrorAlert(false);

    try {
      // Your Web3Forms access key
      const accessKey = "e82f6b3f-82f7-4dd3-b754-8cb0435f3cdc";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Form Submission from Sree Ganapathy Cabs Website",
          from_name: "Sree Ganapathy Cabs Contact Page",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        });
        
        setShowSuccessAlert(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 5000);
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Something went wrong. Please try again or contact us directly at +91 90034 14107."
      });
      setShowErrorAlert(true);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      value: "+91 90034 14107",
      link: "tel:+919003414107",
      description: "Available 24/7 for immediate assistance",
      bgColor: "#28a745",
      delay: 100
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Chat Now",
      link: "https://wa.me/919003414107",
      description: "Instant response during business hours",
      bgColor: "#25d366",
      delay: 200
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sreeganapathycaabs@gmail.com",
      link: "mailto:sreeganapathycaabs@gmail.com",
      description: "For detailed inquiries and bookings",
      bgColor: "#007bff",
      delay: 300
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Coimbatore, Tamil Nadu",
      description: "Services available across India",
      bgColor: "#dc3545",
      delay: 400
    }
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://instagram.com/sreeganapathycaabs",
      color: "#E4405F",
      delay: 100
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://facebook.com/sreeganapathycaabs",
      color: "#1877F2",
      delay: 200
    }
  ];

  const operatingHours = [
    { time: "Emergency Services", hours: "24/7", icon: <FaClock /> },
    { time: "Regular Bookings", hours: "6:00 AM - 11:00 PM", icon: <FaClock /> },
    { time: "Holiday Services", hours: "Available", icon: <FaStar /> }
  ];

  const features = [
    {
      icon: <FaUsers />,
      title: "24/7 Customer Support",
      description: "Our team is always ready to assist you"
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Reliable",
      description: "Your safety is our top priority"
    },
    {
      icon: <FaCheckCircle />,
      title: "Easy Booking",
      description: "Book through call, WhatsApp, or email"
    }
  ];

  return (
    <div className="contact-container">
      <Helmet>
        <title>Sree Ganapathy Cabs | 24/7 Cab Services in Coimbatore</title>
        <meta
          name="description"
          content="Contact Sree Ganapathy Cabs for reliable taxi services in Coimbatore and across Tamil Nadu. Available 24/7 via phone, WhatsApp, and email. Book your ride now!"
        />
        <meta
          name="keywords"
          content="cab service contact, taxi booking Coimbatore, Sree Ganapathy Cabs phone, 24/7 taxi service, Coimbatore cab booking"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 
                  className="contact-main-title"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  Contact Sree Ganapathy Cabs
                </h1>
                <p 
                  className="contact-subtitle"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  We're available 24/7 to assist with your travel needs across
                  Tamil Nadu and beyond
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section py-5">
        <Container>
          <Row className="g-4">
            {contactMethods.map((method, index) => (
              <Col lg={3} md={6} key={index}>
                <div
                  className="contact-method-card h-100"
                  data-aos="fade-up"
                  data-aos-delay={method.delay}
                  data-aos-duration="800"
                >
                  <div 
                    className="method-icon-wrapper"
                    style={{ backgroundColor: method.bgColor }}
                  >
                    {method.icon}
                  </div>
                  <h3 className="method-title">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="method-value"
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="method-value">{method.value}</p>
                  )}
                  <p className="method-description">{method.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 
                className="section-title"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Why Choose Us?
              </h2>
              <p 
                className="section-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Experience the best cab service with these benefits
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index}>
                <div
                  className="feature-card"
                  data-aos="zoom-in"
                  data-aos-delay={300 + (index * 100)}
                  data-aos-duration="800"
                >
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Social Media & Hours Section */}
      <section className="social-hours-section py-5">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div
                className="social-card"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <h2 className="section-title">Connect With Us</h2>
                <p className="section-subtitle">Follow us on social media for updates and offers</p>
                <div className="social-links-container">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      data-aos="zoom-in"
                      data-aos-delay={social.delay + 200}
                    >
                      <div 
                        className="social-icon-wrapper"
                        style={{ backgroundColor: social.color }}
                      >
                        {social.icon}
                      </div>
                      <span className="social-name">{social.name}</span>
                      <FaArrowRight className="social-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div
                className="hours-card"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <h2 className="section-title">Operating Hours</h2>
                <div className="hours-list">
                  {operatingHours.map((item, index) => (
                    <div
                      key={index}
                      className="hours-item"
                      data-aos="fade-up"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className="hours-icon-wrapper">
                        {item.icon}
                      </div>
                      <div className="hours-details">
                        <h4>{item.time}</h4>
                        <p>{item.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="contact-map-section py-5 bg-light">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2
                className="section-title"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Our Service Area
              </h2>
              <p
                className="section-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We provide cab services throughout Tamil Nadu and neighboring states
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="contact-map-container"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.363777777777!2d76.955708!3d11.004556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f79b5e5e5e5f%3A0x8e5e5e5e5e5e5e5e!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="Sree Ganapathy Cabs Service Area"
                  className="map-iframe"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div
                className="cta-content"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <h2>Ready to Book Your Ride?</h2>
                <p>Get in touch with us now for immediate assistance</p>
                <div className="cta-buttons">
                  <a
                    href="tel:+919003414107"
                    className="cta-btn cta-btn-primary"
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <FaPhone /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919003414107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-success"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Simple Contact Form - AT THE VERY BOTTOM */}
      <section className="simple-contact-form-section py-5">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2 
                className="section-title"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Send Us a Message
              </h2>
              <p 
                className="section-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Have a question? Just fill out the form below and we'll get back to you.
              </p>
            </Col>
          </Row>

          {/* Success Alert */}
          {showSuccessAlert && formStatus.success && (
            <Row className="mb-4">
              <Col lg={8} className="mx-auto">
                <Alert 
                  variant="success" 
                  onClose={() => setShowSuccessAlert(false)} 
                  dismissible
                  className="text-center success-alert"
                  data-aos="zoom-in"
                >
                  <div className="alert-icon">✓</div>
                  <Alert.Heading className="mt-2">Message Sent Successfully!</Alert.Heading>
                  <p className="mb-0">{formStatus.message}</p>
                </Alert>
              </Col>
            </Row>
          )}

          {/* Error Alert */}
          {showErrorAlert && formStatus.error && (
            <Row className="mb-4">
              <Col lg={8} className="mx-auto">
                <Alert 
                  variant="danger" 
                  onClose={() => setShowErrorAlert(false)} 
                  dismissible
                  className="text-center error-alert"
                  data-aos="zoom-in"
                >
                  <div className="alert-icon">!</div>
                  <Alert.Heading className="mt-2">Something Went Wrong</Alert.Heading>
                  <p className="mb-0">{formStatus.message}</p>
                </Alert>
              </Col>
            </Row>
          )}

          <Row>
            <Col lg={8} className="mx-auto">
              <div 
                className="simple-form-wrapper p-4 p-md-5 bg-white rounded-4 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Form onSubmit={handleSubmit}>
                  {/* Remove the hidden input fields since we're sending the access key in the fetch request */}
                  
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group controlId="formName">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          disabled={formStatus.submitting}
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          disabled={formStatus.submitting}
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="formPhone">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                          disabled={formStatus.submitting}
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="mb-4">
                      <Form.Group controlId="formMessage">
                        <Form.Label>Your Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us how we can help you..."
                          required
                          disabled={formStatus.submitting}
                          className="py-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="px-5 py-2 fw-semibold submit-btn"
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? (
                        <>
                          <FaSpinner className="spinner me-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-muted text-center mt-3 small mb-0">
                    * Required fields. We'll never share your information.
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;