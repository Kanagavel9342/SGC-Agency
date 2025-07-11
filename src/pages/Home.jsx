import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaWhatsapp,
  FaFacebook,
  FaPhone,
  FaUserFriends,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../Styles/home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  // Hero images - update these paths to your actual image locations
  const heroImages = [
    "/images/Hero.jpg",
    "/images/Hero2.jpeg",
     "/images/Hero3.jpg",
      "/images/Hero4.jpg"


  ];

  const services = [
    {
      title: "Airport Transfers",
      description: "Hassle-free airport pickups and drop-offs",
      icon: "✈️",
    },
    {
      title: "Local Sightseeing",
      description: "Explore city attractions with our guided tours",
      icon: "🏙️",
    },
    {
      title: "Outstation Trips",
      description: "Comfortable long-distance travel solutions",
      icon: "🛣️",
    },
    {
      title: "Corporate Travel",
      description: "Reliable transportation for business needs",
      icon: "💼",
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "Perfect 2-day trip package to nearby hill stations",
      price: "₹5,999",
      duration: "2 Days",
      highlights: ["Scenic routes", "Comfortable stay", "Sightseeing"],
    },
    {
      id: 2,
      title: "Pilgrimage Tour",
      description: "Spiritual journey to South India's famous temples",
      price: "₹12,999",
      duration: "5 Days",
      highlights: ["All temple darshan", "AC vehicle", "Guide service"],
    },
  ];

  const vehicles = [
    {
      id: 1,
      title: "Swift Desire",
      type: "Maruti Suzuki",
      capacity: "4 passengers",
      dayRate: "₹1800/day",
      kmRate: "₹9/km",
      features: ["AC", "Fuel efficient", "Comfortable seating"],
      image: "/images/vehicles/Swift Desire-Front.jpg",
    },
    {
      id: 2,
      title: "Toyota Innova",
      type: "MPV",
      capacity: "7 passengers",
      dayRate: "₹2500/day",
      kmRate: "₹14/km",
      features: ["AC", "Spacious interior", "Comfortable for long rides"],
      image: "/images/vehicles/innova-crysta-front.jpg",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment:
        "Excellent service! The cab was clean and the driver was very professional. Will definitely use again.",
      location: "Chennai, India",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very good service overall. The driver was punctual and the vehicle was comfortable.",
      location: "Bangalore, India",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Arun Patel",
      rating: 5,
      comment:
        "Best cab service I've used in India. The driver knew all the routes perfectly and was very courteous.",
      location: "Mumbai, India",
      date: "3 weeks ago",
    },
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(heroInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [heroImages.length]);

  useEffect(() => {
    let reviewInterval;
    if (isAutoScrolling) {
      reviewInterval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 8000);
    }
    return () => clearInterval(reviewInterval);
  }, [isAutoScrolling, reviews.length]);

  const nextReview = () => {
    setIsAutoScrolling(false);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const prevReview = () => {
    setIsAutoScrolling(false);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="home-page">
      {/* Floating WhatsApp and Call buttons */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/919003414107"
          className="whatsapp-button"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="tel:+919003414107" className="call-button">
          <FaPhone />
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <Carousel
          activeIndex={currentHeroImage}
          onSelect={setCurrentHeroImage}
          controls={false}
          indicators={false}
        >
          {heroImages.map((img, index) => (
            <Carousel.Item key={index} interval={5000}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${img})` }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="hero-overlay">
          <Container>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Premium Cab Services Across India
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="hero-subtitle"
                >
                  Safe, reliable and comfortable transportation solutions
                </motion.p>
                <div className="hero-buttons">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-button primary"
                    onClick={() => navigateTo("/packages")}
                  >
                    Explore Our Services <FaArrowRight />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-button secondary"
                    onClick={() => navigateTo("/contact")}
                  >
                    Book Now <FaArrowRight />
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2>Our Services</h2>
              <p className="subtitle">
                Comprehensive travel solutions tailored to your needs
              </p>
            </Col>
          </Row>

          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <motion.div
                  className="service-card h-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Packages Section */}
      <section className="packages-section py-5 bg-light">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2>Popular Travel Packages</h2>
              <p className="subtitle">
                Curated experiences for memorable journeys
              </p>
            </Col>
          </Row>

          <Row>
            {packages.map((pkg) => (
              <Col md={6} key={pkg.id} className="mb-4">
                <motion.div
                  className="package-card h-100"
                  whileHover={{ y: -5 }}
                  onClick={() => navigateTo("/packages")}
                >
                  <div className="package-header">
                    <h3>{pkg.title}</h3>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <p className="package-duration">{pkg.duration}</p>
                  <p className="package-description">{pkg.description}</p>
                  <ul className="package-highlights">
                    {pkg.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <button className="view-button">
                    View Details <IoIosArrowForward />
                  </button>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vehicles Section */}
      <section className="vehicles-section py-5">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2>Our Vehicle Fleet</h2>
              <p className="subtitle">
                Well-maintained vehicles for your comfortable journey
              </p>
            </Col>
          </Row>

          <Row>
            {vehicles.map((vehicle) => (
              <Col lg={6} key={vehicle.id} className="mb-4">
                <motion.div
                  className="vehicle-card h-100"
                  whileHover={{ y: -5 }}
                  onClick={() => navigateTo("/vehicles")}
                >
                  <Row className="g-0">
                    <Col md={5} className="vehicle-image-container">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="vehicle-image img-fluid"
                      />
                    </Col>
                    <Col md={7}>
                      <div className="vehicle-details p-3">
                        <h3>{vehicle.title}</h3>
                        <p className="vehicle-type">{vehicle.type}</p>
                        <div className="vehicle-specs mb-2">
                          <span>
                            <FaUserFriends /> {vehicle.capacity}
                          </span>
                          <span>
                            <FaMoneyBillWave /> {vehicle.dayRate}
                          </span>
                        </div>
                        <ul className="vehicle-features">
                          {vehicle.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        <button className="view-button mt-2">
                          View Options <IoIosArrowForward />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section py-5 bg-light">
        <Container>
          <Row className="mb-4">
            <Col md={8} className="mx-auto text-center">
              <div className="section-header">
                <h2>Customer Reviews</h2>
                <div className="rating-summary">
                  <div className="average-rating">
                    {averageRating.toFixed(1)} <FaStar className="star" />
                  </div>
                  <p>Based on {reviews.length} reviews</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="position-relative">
              <div className="reviews-container">
                <button
                  className="review-nav prev"
                  onClick={prevReview}
                  aria-label="Previous review"
                >
                  <IoIosArrowBack />
                </button>

                <div className="reviews-slider">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      className={`review-card ${
                        index === currentReview ? "active" : ""
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentReview ? 1 : 0,
                        x:
                          index === currentReview
                            ? 0
                            : index < currentReview
                            ? -50
                            : 50,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < review.rating ? "filled" : ""}
                          />
                        ))}
                      </div>
                      <FaQuoteLeft className="quote-icon" />
                      <p className="review-text">{review.comment}</p>
                      <div className="review-author">
                        <h4>{review.name}</h4>
                        <div className="review-meta">
                          <span>{review.location}</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  className="review-nav next"
                  onClick={nextReview}
                  aria-label="Next review"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2>Get In Touch</h2>
              <p className="subtitle">
                We're available 24/7 to assist with your travel needs
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mb-4 mb-lg-0">
              <Row>
                <Col md={6} className="mb-4">
                  <div className="contact-method">
                    <div className="contact-icon-container">
                      <FaPhone className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h3>Call Us</h3>
                      <a href="tel:+919003414107" className="contact-link">
                        +91 90034 14107
                      </a>
                      <p>Available 24/7 </p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div className="contact-method">
                    <div className="contact-icon-container">
                      <FaWhatsapp className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h3>WhatsApp</h3>
                      <a
                        href="https://wa.me/919003414107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        Chat Now
                      </a>
                      <p>Instant response during business hours</p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div className="contact-method">
                    <div className="contact-icon-container">
                      <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h3>Email</h3>
                      <a
                        href="mailto:sreeganapathycaabs@gmail.com"
                        className="contact-link"
                      >
                        sreeganapathycaabs@gmail.com
                      </a>
                      <p>For detailed inquiries and bookings</p>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="mb-4">
                  <div className="contact-method">
                    <div className="contact-icon-container">
                      <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h3>Location</h3>
                      <p>Combatore, Tamil Nadu</p>
                      <p>Services available across India</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={4}>
              <div className="social-media-section h-100">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates and offers</p>
                <div className="social-links mb-4">
                  <a
                    href="https://instagram.com/sreeganapathycaabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaInstagram className="social-icon" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/sreeganapathycaabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaFacebook className="social-icon" />
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="operating-hours">
                  <h4>Operating Hours</h4>
                  <p>24/7 for emergency services</p>
                  <p>Regular bookings: 6AM - 11PM</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
