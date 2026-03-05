import React, { useState, useEffect, useRef } from "react";
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
  FaChevronDown,
  FaShieldAlt,
  FaSmile,
  FaRoute,
  FaChevronRight,
  FaPlane,
  FaBuilding,
  FaRoad,
  FaMap
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Modal,
  Badge
} from "react-bootstrap";
import { Parallax } from "react-parallax";
import CountUp from 'react-countup';
import "../Styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // Hero images with overlay text
  const heroSlides = [
    {
      image: "/images/Hero.jpg",
      title: "Premium Travel Experience",
      subtitle: "Luxury & Comfort Combined",
      cta: "Book Your Ride Today"
    },
    {
      image: "/images/Hero2.jpeg",
      title: "Across India Services",
      subtitle: "Your Journey, Our Priority",
      cta: "Explore Our Services"
    },
    {
      image: "/images/Hero3.jpg",
      title: "24/7 Reliable Service",
      subtitle: "Always There When You Need Us",
      cta: "Contact Us Now"
    },
    {
      image: "/images/Hero4.jpg",
      title: "Fleet of Luxury Vehicles",
      subtitle: "Travel in Style & Comfort",
      cta: "View Our Fleet"
    }
  ];

  const services = [
    {
      icon: <FaPlane />,
      title: "Airport Transfers",
      description: "Seamless airport pickups and drop-offs",
      features: ["24/7 Service", "Flight Tracking", "Meet & Greet"],
      color: "#3B82F6"
    },
    {
      icon: <FaMap />,
      title: "Local Sightseeing",
      description: "Explore city attractions with expert guides",
      features: ["Flexible Routes", "Local Insights", "Photo Stops"],
      color: "#10B981"
    },
    {
      icon: <FaRoad />,
      title: "Outstation Trips",
      description: "Comfortable long-distance travel solutions",
      features: ["Multiple Stops", "Driver Stay", "Flexible Timing"],
      color: "#8B5CF6"
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Travel",
      description: "Professional transportation for business needs",
      features: ["Executive Class", "WiFi Available", "Document Safety"],
      color: "#F59E0B"
    }
  ];

  const stats = [
    { icon: <FaShieldAlt />, title: "Verified Drivers", count: 150, suffix: "+", duration: 3 },
    { icon: <FaCar />, title: "Happy Customers", count: 10000, suffix: "+", duration: 4 },
    { icon: <FaRoute />, title: "Cities Covered", count: 85, suffix: "+", duration: 2.5 },
    { icon: <FaSmile />, title: "Trips Completed", count: 50000, suffix: "+", duration: 5 }
  ];

  const vehicles = [
    {
      id: 1,
      title: "Toyota Innova",
      type: "Luxury MPV",
      capacity: "7 Passengers",
      dayRate: "₹2500/day",
      kmRate: "₹14/km",
      features: ["AC", "Spacious", "Comfortable"],
      images: ["/images/vehicles/innova-front.jpg"],
      category: "premium"
    },
    {
      id: 2,
      title: "Honda Amaze",
      type: "Premium Sedan",
      capacity: "4 Passengers",
      dayRate: "₹2200/day",
      kmRate: "₹12/km",
      features: ["AC", "Fuel Efficient", "Comfort"],
      images: ["/images/vehicles/amaze-front.jpg"],
      category: "sedan"
    },
    {
      id: 3,
      title: "Toyota Etios",
      type: "Economy Sedan",
      capacity: "4 Passengers",
      dayRate: "₹1800/day",
      kmRate: "₹9/km",
      features: ["AC", "Reliable", "Budget"],
      images: ["/images/vehicles/etios-front.jpg"],
      category: "economy"
    },
    {
      id: 4,
      title: "Innova Crysta",
      type: "Premium MPV",
      capacity: "7 Passengers",
      dayRate: "₹3000/day",
      kmRate: "₹15/km",
      features: ["AC", "Premium", "Comfort"],
      images: ["/images/vehicles/innova-crysta-front.jpg"],
      category: "premium"
    },
    {
      id: 5,
      title: "Swift Desire",
      type: "Hatchback",
      capacity: "4 Passengers",
      dayRate: "₹1500/day",
      kmRate: "₹8/km",
      features: ["AC", "Compact", "Efficient"],
      images: ["/images/vehicles/Swift Desire-Front.jpg"],
      category: "hatchback"
    },
    {
      id: 6,
      title: "Tempo Traveller",
      type: "14 Seater",
      capacity: "14 Passengers",
      dayRate: "₹3500/day",
      kmRate: "₹20/km",
      features: ["AC", "Spacious", "Group Travel"],
      images: ["/images/vehicles/tempo-14-front.jpg"],
      category: "bus"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service! The cab was clean and the driver was very professional. Will definitely use again.",
      location: "Chennai, India",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Priya Dharshini",
      rating: 4,
      comment: "Very good service overall. The driver was punctual and the vehicle was comfortable.",
      location: "Madurai, India",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Arun",
      rating: 5,
      comment: "Best cab service I've used in India. The driver knew all the routes perfectly and was very courteous.",
      location: "Mumbai, India",
      date: "3 weeks ago",
    },
  ];

  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Refs for animation triggers
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const vehiclesRef = useRef(null);
  const statsRef = useRef(null);
  const reviewsRef = useRef(null);

  // Auto slide for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if stats section is in view
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setShowStats(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation
  const navigateTo = (path) => navigate(path);

  // WhatsApp function
  const handleWhatsAppClick = (vehicleName) => {
    const message = `Hi Sree Ganapathy Cabs, I'm interested in renting your ${vehicleName}. Please provide more details.`;
    window.open(`https://wa.me/919003414107?text=${encodeURIComponent(message)}`);
  };

  // Modal functions
  const openImageModal = (vehicle, index = 0) => {
    setCurrentVehicle(vehicle);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  return (
    <div className="home-page">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sree Ganapathy Cabs | Premium Cab Services Across India</title>
        <meta
          name="description"
          content="Experience luxury travel with Sree Ganapathy Cabs. Premium cab services, airport transfers, outstation trips, and corporate travel across India."
        />
        <meta name="keywords" content="cab service, luxury cars, airport transfer, car rental, tempo traveller, corporate travel" />
        <meta property="og:title" content="Sree Ganapathy Cabs | Premium Travel Solutions" />
        <meta property="og:description" content="Your journey deserves the best. Experience premium cab services with luxury vehicles and professional drivers." />
        <meta property="og:image" content="/images/logo.png" />
      </Helmet>

      {/* Floating Action Buttons */}
      <div className={`floating-actions ${isScrolled ? 'scrolled' : ''}`}>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919003414107"
          className="floating-btn whatsapp-btn"
          aria-label="Contact on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span className="floating-tooltip">Chat with us</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+919003414107"
          className="floating-btn call-btn"
          aria-label="Call us"
        >
          <FaPhone />
          <span className="floating-tooltip">Call now</span>
        </motion.a>
      </div>

      {/* Hero Carousel Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div 
                className="slide-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`
                }}
              />
              <div className="slide-content">
                <Container>
                  <Row className="min-vh-100 align-items-center">
                    <Col lg={8} xl={6}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                      >
                        <Badge bg="warning" className="hero-badge mb-4">
                          🚗 Premium Service Since 2010
                        </Badge>
                        
                        <h1 className="display-4 fw-bold text-white mb-4">
                          {slide.title}
                        </h1>
                        
                        <p className="lead text-light mb-5">
                          {slide.subtitle}
                        </p>

                        <div className="hero-buttons d-flex flex-wrap gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-lg px-4 py-3 d-flex align-items-center"
                            onClick={() => navigateTo("/contact")}
                          >
                            {slide.cta}
                            <FaArrowRight className="ms-2" />
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline-light btn-lg px-4 py-3"
                            onClick={() => navigateTo("/packages")}
                          >
                            View Packages
                          </motion.button>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="hero-features mt-5 pt-4"
                        >
                          <div className="d-flex flex-wrap gap-4">
                            {["✓ 24/7 Service", "✓ Verified Drivers", "✓ GPS Tracking", "✓ Instant Booking"].map((feature, idx) => (
                              <div key={idx} className="d-flex align-items-center text-white">
                                <IoMdCheckmarkCircle className="text-warning me-2" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-indicator"
        >
          <FaChevronDown />
        </motion.div>
      </section>

      {/* Stats Section with Counting Animation */}
      <section className="stats-section py-5" ref={statsRef}>
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="stat-card text-center"
                >
                  <div className="stat-icon mb-3" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <h3 className="stat-number">
                    {showStats ? (
                      <CountUp
                        start={0}
                        end={stat.count}
                        duration={stat.duration}
                        separator=","
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </h3>
                  <p className="stat-title">{stat.title}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5" ref={servicesRef}>
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label">OUR SERVICES</span>
                <h2 className="section-title">Premium Travel Solutions</h2>
                <p className="section-subtitle">
                  Tailored services for all your travel needs
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card"
                >
                  <div 
                    className="service-icon-wrapper mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-title mb-3">{service.title}</h3>
                  <p className="service-description mb-4">{service.description}</p>
                  
                  <div className="service-features mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="service-feature">
                        <IoMdCheckmarkCircle className="me-2" style={{ color: service.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    style={{ borderColor: service.color, color: service.color }}
                    onClick={() => navigateTo("/services")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vehicles Section */}
      <section className="vehicles-section py-5" ref={vehiclesRef}>
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label">OUR FLEET</span>
                <h2 className="section-title">Premium Vehicles</h2>
                <p className="section-subtitle">
                  Choose from our diverse range of well-maintained vehicles
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {vehicles.map((vehicle, index) => (
              <Col lg={4} md={6} key={vehicle.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  transition={{ delay: index * 0.1 }}
                  className="vehicle-card"
                >
                  <div className="vehicle-image-container">
                    {vehicle.images && vehicle.images.length > 0 && (
                      <>
                        <img
                          src={vehicle.images[0]}
                          alt={vehicle.title}
                          className="vehicle-image"
                          onError={(e) => {
                            e.target.src = "/images/vehicle-placeholder.jpg";
                          }}
                        />
                        <Badge bg="warning" className="vehicle-badge">
                          {vehicle.dayRate}
                        </Badge>
                        <Badge bg="info" className="vehicle-category">
                          {vehicle.category}
                        </Badge>
                        <Button
                          variant="light"
                          className="gallery-btn"
                          onClick={() => openImageModal(vehicle)}
                        >
                          <FaImages />
                        </Button>
                      </>
                    )}
                  </div>

                  <div className="vehicle-content p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h4 className="vehicle-name mb-1">{vehicle.title}</h4>
                        <p className="vehicle-type text-muted mb-0">{vehicle.type}</p>
                      </div>
                      <Badge bg="primary" className="vehicle-capacity">
                        {vehicle.capacity}
                      </Badge>
                    </div>

                    <div className="vehicle-features mb-4">
                      {vehicle.features.map((feature, idx) => (
                        <span key={idx} className="feature-badge">
                          <IoMdCheckmarkCircle className="me-1" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="rate-text">
                          <FaMoneyBillWave className="me-1" />
                          {vehicle.kmRate}
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => openImageModal(vehicle)}
                        >
                          View
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleWhatsAppClick(vehicle.title)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <Button
              variant="primary"
              size="lg"
              className="px-5 py-3"
              onClick={() => navigateTo("/vehicles")}
            >
              View All Vehicles <FaChevronRight className="ms-2" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section py-5" ref={reviewsRef}>
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label">TESTIMONIALS</span>
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">
                  Join thousands of satisfied customers
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            {reviews.map((review, index) => (
              <Col lg={4} md={6} key={review.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="review-card"
                >
                  <div className="review-header mb-3">
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < review.rating ? "text-warning" : "text-muted"}
                        />
                      ))}
                    </div>
                    <FaQuoteLeft className="quote-icon text-primary" />
                  </div>

                  <p className="review-text">{review.comment}</p>

                  <div className="review-footer mt-4 pt-3 border-top">
                    <div className="review-author">
                      <h5 className="mb-1">{review.name}</h5>
                      <p className="text-muted mb-0">
                        <FaMapMarkerAlt className="me-1" />
                        {review.location}
                      </p>
                    </div>
                    <span className="review-date text-muted">
                      <FaClock className="me-1" />
                      {review.date}
                    </span>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-white mb-3">Ready for Your Next Journey?</h2>
                <p className="text-white-50 mb-0">
                  Experience premium travel with our professional drivers and luxury vehicles
                </p>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg-end"
              >
                <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
                  <Button
                    variant="light"
                    size="lg"
                    className="px-4 py-3"
                    onClick={() => navigateTo("/contact")}
                  >
                    Book Now <FaArrowRight className="ms-2" />
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-3"
                    onClick={() => handleWhatsAppClick("Cab Service")}
                  >
                    <FaWhatsapp className="me-2" />
                    WhatsApp
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <FaPhone />,
                title: "24/7 Support",
                text: "+91 90034 14107",
                action: () => window.location.href = "tel:+919003414107",
                color: "#007bff"
              },
              {
                icon: <FaWhatsapp />,
                title: "Instant Booking",
                text: "Chat on WhatsApp",
                action: () => handleWhatsAppClick("Cab Service"),
                color: "#25D366"
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                text: "sreeganapathycaabs@gmail.com",
                action: () => window.location.href = "mailto:sreeganapathycaabs@gmail.com",
                color: "#6f42c1"
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                text: "Coimbatore, Tamil Nadu",
                action: () => navigateTo("/contact"),
                color: "#fd7e14"
              }
            ].map((contact, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="contact-card"
                  onClick={contact.action}
                >
                  <div 
                    className="contact-icon mb-3"
                    style={{ backgroundColor: contact.color }}
                  >
                    {contact.icon}
                  </div>
                  <h5 className="contact-title mb-2">{contact.title}</h5>
                  <p className="contact-text mb-0">{contact.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Image Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        {currentVehicle && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{currentVehicle.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentVehicle.images && currentVehicle.images.length > 0 ? (
                <div className="text-center">
                  <img
                    src={currentVehicle.images[currentImageIndex]}
                    alt={currentVehicle.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "60vh", width: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = "/images/vehicle-placeholder.jpg";
                    }}
                  />
                  {currentVehicle.images.length > 1 && (
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                      {currentVehicle.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${currentVehicle.title} ${index + 1}`}
                          className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                          onError={(e) => {
                            e.target.src = "/images/vehicle-placeholder.jpg";
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-5">
                  <FaCar size={48} className="text-muted mb-3" />
                  <p>No images available for this vehicle</p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <div className="w-100">
                <h5>{currentVehicle.title}</h5>
                <p className="text-muted mb-3">{currentVehicle.type} • {currentVehicle.capacity}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-success fw-bold">{currentVehicle.dayRate}</span>
                    <span className="text-muted ms-2">{currentVehicle.kmRate}</span>
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Close
                    </Button>
                    <Button 
                      variant="primary"
                      onClick={() => {
                        setShowModal(false);
                        handleWhatsAppClick(currentVehicle.title);
                      }}
                    >
                      <FaWhatsapp className="me-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Home;