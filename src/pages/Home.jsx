import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaWhatsapp,
  FaFacebook,
  FaPhone,
  FaUserFriends,
  FaMoneyBillWave,
  FaCar,
  FaImages,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Card, Button, ListGroup, Modal } from "react-bootstrap";
import "../Styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // Hero images
  const heroImages = [
    "/images/Hero.jpg",
    "/images/Hero2.jpeg",
    "/images/Hero3.jpg",
    "/images/Hero4.jpg",
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

  const vehicles = [
    {
      id: 1,
      title: "Swift Desire",
      type: "Maruti Suzuki",
      capacity: "4 passengers",
      dayRate: "₹1800/day",
      kmRate: "₹9/km",
      features: ["AC", "Fuel efficient", "Comfortable seating"],
      images: [
        "/images/vehicles/Swift Desire-dashboard.jpg",
        "/images/vehicles/Swift Desire-Front.jpg",
        "/images/vehicles/Swift Desire-inside.jpg",
        "/images/vehicles/Swift Desire-inside2.jpg",
      ],
    },
    {
      id: 2,
      title: "Toyota Etios",
      type: "Sedan",
      capacity: "4 passengers",
      dayRate: "₹1800/day",
      kmRate: "₹9/km",
      features: ["AC", "Spacious interior", "Comfortable ride", "Good mileage"],
      images: [
        "/images/vehicles/etios-front.jpg",
        "/images/vehicles/etios-back.jpg",
        "/images/vehicles/etios-inside.jpg",
        "/images/vehicles/etios-inside2.jpg",
      ],
    },
    {
      id: 3,
      title: "Toyota Innova",
      type: "MPV",
      capacity: "7 passengers",
      dayRate: "₹2500/day",
      kmRate: "₹14/km",
      features: ["AC", "Spacious interior", "Comfortable for long rides"],
      images: [
        "/images/vehicles/innova-front.jpg",
        "/images/vehicles/innova-back.jpeg",
        "/images/vehicles/innova-inside.jpg",
        "/images/vehicles/innova-inside2.jpg",
      ],
    },
    {
      id: 4,
      title: "Toyota Innova Crysta",
      type: "Premium MPV",
      capacity: "7 passengers",
      dayRate: "₹3000/day",
      kmRate: "₹15/km",
      features: ["AC", "Premium interior", "Super comfortable"],
      images: [
        "/images/vehicles/innova-crysta-front.jpg",
        "/images/vehicles/innova-crysta-back.jpeg",
        "/images/vehicles/innova-crysta-inside.jpg",
        "/images/vehicles/innova-crysta-inside2.jpeg",
      ],
    },
    {
      id: 5,
      title: "Honda Amaze",
      type: "Sedan",
      capacity: "4 passengers",
      dayRate: "₹2200/day",
      kmRate: "₹12/km",
      features: ["AC", "Premium sedan", "Great comfort", "Excellent mileage"],
      images: [
        "/images/vehicles/amaze-front.jpg",
        "/images/vehicles/amaze-back.jpg",
        "/images/vehicles/amaze-inside.jpg",
        "/images/vehicles/amaze-outside.jpg",
      ],
    },
    {
      id: 6,
      title: "Innova Hycross",
      type: "Hybrid MPV",
      capacity: "7 passengers",
      dayRate: "₹4000/day",
      kmRate: "₹20/km",
      features: ["AC", "Hybrid technology", "Ultra comfortable"],
      images: [
        "/images/vehicles/hycross-front.jpg",
        "/images/vehicles/hycross-back.jpg",
        "/images/vehicles/hycross-inside.jpg",
        "/images/vehicles/hycross-outside.jpg",
      ],
    },
    {
      id: 7,
      title: "Force Urbania",
      type: "Luxury Van",
      capacity: "13-15 passengers",
      dayRate: "₹10,000/day",
      kmRate: "₹30/km",
      features: ["AC", "Luxury interior", "Very spacious"],
      images: [
        "/images/vehicles/urbania-front.jpg",
        "/images/vehicles/urbania-back.jpeg",
        "/images/vehicles/urbania-inside.jpeg",
        "/images/vehicles/urbania-inside2.jpeg",
      ],
    },
    {
      id: 8,
      title: "Tempo Traveller",
      type: "14 Seater",
      capacity: "14 passengers",
      dayRate: "₹3,500/day",
      kmRate: "₹20/km",
      features: ["AC", "Spacious", "Comfortable for groups"],
      images: [
        "/images/vehicles/tempo-14-front.jpg",
        "/images/vehicles/tempo-14-back.jpg",
        "/images/vehicles/tempo-14-inside.HEIC",
        "/images/vehicles/tempo-14-inside2.jpg",
      ],
    },
    {
      id: 9,
      title: "Tempo Traveller",
      type: "18 Seater",
      capacity: "18 passengers",
      dayRate: "₹4,000/day",
      kmRate: "₹20/km",
      features: ["AC", "Very spacious", "Ideal for large groups"],
      images: [
        "/images/vehicles/tempo-18-front.jpg",
        "/images/vehicles/tempo-18-back.jpg",
        "/images/vehicles/tempo-18-inside.jpg",
        "/images/vehicles/tempo-18-inside2.jpg",
      ],
    },
    {
      id: 10,
      title: "25 Seater Mini Van",
      type: "AC Mini Bus",
      capacity: "25 passengers",
      dayRate: "₹8,000/day",
      kmRate: "₹30/km",
      features: ["AC", "Very spacious", "Ideal for large groups"],
      images: [
        "/images/vehicles/minivan-front.jpg",
        "/images/vehicles/minivan-back.jpg",
        "/images/vehicles/minivan-inside.jpg",
        "/images/vehicles/minivan-outside.jpg",
      ],
    },
    {
      id: 11,
      title: "Volvo Bus",
      type: "Luxury Bus",
      capacity: "35-45 passengers",
      dayRate: "₹21,000/day (150 kms free)",
      kmRate: "₹110/km (extra)",
      features: ["AC", "Ultra luxury", "Reclining seats"],
      images: [
        "/images/vehicles/volvo-front.JGP",
        "/images/vehicles/volvo-back.HEIC",
        "/images/vehicles/volvo-inside.JPG",
        "/images/vehicles/volvo-outside.JPG",
      ],
    },
    {
      id: 12,
      title: "Mercedes Benz E Class",
      type: "Luxury Sedan",
      capacity: "4 passengers",
      dayRate: "5hr/50km: ₹7000 | 10hr/100km: ₹14000",
      kmRate: "Extra: ₹1500/hr | ₹175/km",
      features: ["Premium luxury", "Executive comfort", "Chauffeur driven"],
      images: [
        "/images/vehicles/mercedes-front.jpg",
        "/images/vehicles/mercedes-back.jpg",
        "/images/vehicles/mercedes-inside.jpg",
        "/images/vehicles/mercedes-outside.jpg",
      ],
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
      name: "Priya Dharshini",
      rating: 4,
      comment:
        "Very good service overall. The driver was punctual and the vehicle was comfortable.",
      location: "Madurai, India",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Arun",
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
  const [showModal, setShowModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleWhatsAppClick = (vehicleName) => {
    const message = `Hi Sree Ganapathy Cabs, I'm interested in renting your ${vehicleName}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919003414107?text=${encodedMessage}`);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919003414107";
  };

  const openImageModal = (vehicle, index = 0) => {
    setCurrentVehicle(vehicle);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;


  return (
    <div className="home-page">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sree Ganapathy Cabs | Premium Cab Services Across India</title>
        <meta
          name="description"
          content="Sree Ganapathy Cabs offers reliable and comfortable cab services in Coimbatore and across India. Book now for airport transfers, local sightseeing, and outstation trips."
        />
        <meta
          name="keywords"
          content="cab services, taxi service, car rental, Coimbatore cabs, airport transfer, outstation cabs, tempo traveller, luxury cabs"
        />
        <meta property="og:title" content="Sree Ganapathy Cabs" />
        <meta
          property="og:description"
          content="Premium Cab Services Across India"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sreeganapathycabs.com" />
        <meta property="og:image" content="/images/logo.png" />
      </Helmet>
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

      {/* Vehicles Section */}
      <section className="vehicles-section py-5 bg-light">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2>Our Vehicle Fleet</h2>
              <p className="subtitle">
                Choose from our well-maintained vehicles for your comfortable
                journey
              </p>
            </Col>
          </Row>

          <Row xs={1} md={2} lg={3} className="g-4">
            {vehicles.slice(0, 6).map((vehicle, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm border-0 vehicle-card">
                  <div className="position-relative">
                    {vehicle.images && vehicle.images.length > 0 && (
                      <>
                        <Card.Img
                          variant="top"
                          src={vehicle.images[0]}
                          alt={vehicle.title}
                          className="vehicle-main-image"
                          onClick={() => openImageModal(vehicle, 0)}
                        />
                        <Button
                          variant="light"
                          className="position-absolute bottom-0 end-0 m-2 p-2 rounded-circle"
                          onClick={() => openImageModal(vehicle, 0)}
                        >
                          <FaImages className="text-primary" />
                        </Button>
                      </>
                    )}
                    <span className="position-absolute top-0 end-0 bg-warning text-dark p-2 m-2 rounded-pill fw-bold">
                      {vehicle.dayRate}
                    </span>
                  </div>

                  <Card.Body>
                    <Card.Title>
                      {vehicle.title}
                      <small className="d-block text-muted">
                        {vehicle.type}
                      </small>
                    </Card.Title>

                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">
                        <FaUserFriends className="text-primary me-1" />
                        {vehicle.capacity}
                      </span>
                      <span className="text-muted">
                        <FaMoneyBillWave className="text-primary me-1" />
                        {vehicle.kmRate}
                      </span>
                    </div>

                    <Card.Text>
                      <strong>Features:</strong>
                    </Card.Text>
                    <ListGroup variant="flush" className="mb-3">
                      {vehicle.features.map((feature, i) => (
                        <ListGroup.Item
                          key={i}
                          className="d-flex align-items-center"
                        >
                          <FaCar className="text-primary me-2" size={12} />
                          {feature}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>

                  <Card.Footer className="bg-white border-0">
                    <div className="d-grid gap-2">
                      <Button
                        variant="success"
                        className="d-flex align-items-center justify-content-center"
                        onClick={() => handleWhatsAppClick(vehicle.title)}
                      >
                        <FaWhatsapp className="me-2" />
                        Book via WhatsApp
                      </Button>
                      <Button
                        variant="primary"
                        className="d-flex align-items-center justify-content-center"
                        onClick={handlePhoneClick}
                      >
                        <FaPhone className="me-2" />
                        Call Now
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col className="text-center">
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => navigateTo("/vehicles")}
              >
                View All Vehicles <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section py-5">
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
      <section className="contact-section py-5 bg-light">
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
                      <p>Available 24/7 for immediate assistance</p>
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
                      <FaMapMarkerAlt className="contact-icon-" />
                    </div>
                    <div className="contact-details">
                      <h3>Location</h3>
                      <p>Coimbatore, Tamil Nadu</p>
                      <p>Services available across India</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={4}>
              <div className="social-media-section h-100">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates and special offers</p>
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
                  <p>
                    <FaClock className="me-2" />
                    24/7 for emergency services
                  </p>
                  <p>
                    <FaClock className="me-2" />
                    Regular bookings: 6AM - 11PM
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{currentVehicle?.title} Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVehicle && currentVehicle.images && (
            <div className="text-center">
              <img
                src={currentVehicle.images[currentImageIndex]}
                alt={`${currentVehicle.title} view`}
                className="img-fluid mb-3"
                style={{ maxHeight: "60vh" }}
              />
              <div className="d-flex justify-content-center flex-wrap">
                {currentVehicle.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${currentVehicle.title} view ${index + 1}`}
                    className={`thumbnail-img mx-1 mb-1 ${
                      currentImageIndex === index ? "active-thumbnail" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleWhatsAppClick(currentVehicle?.title)}
          >
            <FaWhatsapp className="me-2" />
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;