import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaUserFriends,
  FaMoneyBillWave,
  FaCar,
  FaImages,
  FaStar,
  FaGasPump,
  FaSnowflake,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Modal,
  Badge,
} from "react-bootstrap";
import "../Styles/vehicles.css";

const Vehicles = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out'
    });

    // Simulate loading
    setTimeout(() => setLoading(false), 800);
  }, [location.pathname]);

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

  const closeModal = () => {
    setShowModal(false);
    setIsFullscreen(false);
  };

  const nextImage = () => {
    if (currentVehicle) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % currentVehicle.images.length
      );
    }
  };

  const prevImage = () => {
    if (currentVehicle) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + currentVehicle.images.length) % currentVehicle.images.length
      );
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleWishlist = (vehicleId) => {
    setWishlist(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const vehicles = [
    {
      id: 1,
      name: "Swift Desire",
      type: "Maruti Suzuki",
      category: "sedan",
      capacity: "4 Passengers",
      dayRate: "₹1,800/day",
      kmRate: "₹9/km",
      rating: 4.5,
      reviews: 128,
      features: [
        "AC with Climate Control",
        "Fuel efficient (22 km/l)",
        "Comfortable seating",
        "Ample luggage space",
        "Bluetooth connectivity",
        "Power windows",
      ],
      images: [
        "/images/vehicles/Swift Desire-dashboard.jpg",
        "/images/vehicles/Swift Desire-Front.jpg",
        "/images/vehicles/Swift Desire-inside.jpg",
        "/images/vehicles/Swift Desire-inside2.jpg",
      ],
      fuelType: "Petrol/Diesel",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 2,
      name: "Toyota Etios",
      type: "Sedan",
      category: "sedan",
      capacity: "4 Passengers",
      dayRate: "₹1,800/day",
      kmRate: "₹9/km",
      rating: 4.3,
      reviews: 96,
      features: [
        "AC",
        "Spacious interior",
        "Comfortable ride",
        "Good mileage",
        "Power steering",
        "Front power windows",
      ],
      images: [
        "/images/vehicles/etios-front.jpg",
        "/images/vehicles/etios-back.jpg",
        "/images/vehicles/etios-inside.jpg",
        "/images/vehicles/etios-inside2.jpg",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 3,
      name: "Toyota Innova",
      type: "MPV",
      category: "suv",
      capacity: "7 Passengers",
      dayRate: "₹2,500/day",
      kmRate: "₹14/km",
      rating: 4.7,
      reviews: 256,
      features: [
        "AC with Rear AC",
        "Spacious interior",
        "Comfortable for long rides",
        "Ample luggage space",
        "Captain seats",
        "Reverse camera",
      ],
      images: [
        "/images/vehicles/innova-front.PNG",
        "/images/vehicles/innova-front1.PNG",
        "/images/vehicles/innova-inside.PNG",
        "/images/vehicles/innova-outside.PNG",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 4,
      name: "Toyota Innova Crysta",
      type: "Premium MPV",
      category: "suv",
      capacity: "7 Passengers",
      dayRate: "₹3,000/day",
      kmRate: "₹15/km",
      rating: 4.8,
      reviews: 312,
      features: [
        "AC with Auto Climate",
        "Premium interior",
        "Super comfortable",
        "Large luggage space",
        "Touchscreen infotainment",
        "Push button start",
      ],
      images: [
        "/images/vehicles/innova-crysta-front.jpg",
        "/images/vehicles/innova-crysta-back.jpeg",
        "/images/vehicles/innova-crysta-inside.jpg",
        "/images/vehicles/innova-crysta-inside2.jpeg",
      ],
      fuelType: "Diesel",
      transmission: "Automatic",
      availability: "Available Now",
    },
    {
      id: 5,
      name: "Honda Amaze",
      type: "Sedan",
      category: "sedan",
      capacity: "4 Passengers",
      dayRate: "₹2,200/day",
      kmRate: "₹12/km",
      rating: 4.4,
      reviews: 84,
      features: [
        "AC",
        "Premium sedan",
        "Great comfort",
        "Excellent mileage",
        "Touchscreen audio",
        "Steering controls",
      ],
      images: [
        "/images/vehicles/Amaze-front.jpeg",
        "/images/vehicles/amagze-back.jpeg",
        "/images/vehicles/amaze-inside.jpeg",
        "/images/vehicles/amaze1-inside.jpeg",
      ],
      fuelType: "Petrol",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 6,
      name: "Innova Hycross",
      type: "Hybrid MPV",
      category: "suv",
      capacity: "7 Passengers",
      dayRate: "₹4,000/day",
      kmRate: "₹20/km",
      rating: 4.9,
      reviews: 178,
      features: [
        "AC with Auto Climate",
        "Hybrid technology",
        "Ultra comfortable",
        "Premium features",
        "Panoramic sunroof",
        "Ventilated seats",
      ],
      images: [
        "/images/vehicles/hycross-front.jpg",
        "/images/vehicles/hycross-back.jpg",
        "/images/vehicles/hycross-inside.jpg",
        "/images/vehicles/hycross-outside.jpg",
      ],
      fuelType: "Hybrid",
      transmission: "Automatic",
      availability: "Premium Booking",
    },
    {
      id: 7,
      name: "Force Urbania",
      type: "Luxury Van",
      category: "van",
      capacity: "13-15 Passengers",
      dayRate: "₹10,000/day",
      kmRate: "₹30/km",
      rating: 4.6,
      reviews: 67,
      features: [
        "AC with Roof AC",
        "Luxury interior",
        "Very spacious",
        "Premium comfort",
        "Pushback seats",
        "Entertainment system",
      ],
      images: [
        "/images/vehicles/urbania-front.jpg",
        "/images/vehicles/urbania-back.jpeg",
        "/images/vehicles/urbania-inside.jpeg",
        "/images/vehicles/urbania-inside2.jpeg",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Advance Booking",
    },
    {
      id: 8,
      name: "Tempo Traveller",
      type: "14 Seater",
      category: "van",
      capacity: "14 Passengers",
      dayRate: "₹3,500/day",
      kmRate: "₹20/km",
      rating: 4.5,
      reviews: 145,
      features: [
        "AC with Roof AC",
        "Spacious",
        "Comfortable for groups",
        "Ample luggage space",
        "Pushback seats",
        "Charging points",
      ],
      images: [
        "/images/vehicles/tempo-14-seater.jpg",
        "/images/vehicles/tempo-inside1.jpg",
        "/images/vehicles/tempo-14-outside.jpg",
        "/images/vehicles/tempo-outside.jpg",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 9,
      name: "Tempo Traveller",
      type: "18 Seater",
      category: "van",
      capacity: "18 Passengers",
      dayRate: "₹4,000/day",
      kmRate: "₹20/km",
      rating: 4.5,
      reviews: 98,
      features: [
        "AC with Roof AC",
        "Very spacious",
        "Ideal for large groups",
        "Good luggage capacity",
        "Pushback seats",
        "Entertainment system",
      ],
      images: [
        "/images/vehicles/tempo-18-front.jpg",
        "/images/vehicles/tempo-18-back.jpg",
        "/images/vehicles/tempo-18-inside.jpg",
        "/images/vehicles/tempo-18-inside2.jpg",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Available Now",
    },
    {
      id: 10,
      name: "25 Seater Mini Van",
      type: "AC Mini Bus",
      category: "bus",
      capacity: "25 Passengers",
      dayRate: "₹8,000/day",
      kmRate: "₹30/km",
      rating: 4.4,
      reviews: 56,
      features: [
        "AC with Roof AC",
        "Very spacious",
        "Ideal for large groups",
        "Comfortable seating",
        "Luggage compartment",
        "PA system",
      ],
      images: [
        "/images/vehicles/minivan-front.jpg",
        "/images/vehicles/minivan-back.jpg",
        "/images/vehicles/minivan-inside.jpg",
        "/images/vehicles/minivan-outside.jpg",
      ],
      fuelType: "Diesel",
      transmission: "Manual",
      availability: "Advance Booking",
    },
    {
      id: 11,
      name: "Volvo Bus",
      type: "Luxury Bus",
      category: "bus",
      capacity: "35-45 Passengers",
      dayRate: "₹21,000/day",
      kmRate: "₹110/km",
      rating: 4.8,
      reviews: 234,
      features: [
        "AC with Climate Control",
        "Ultra luxury",
        "Reclining seats",
        "Entertainment system",
        "Sleeping berths",
        "Restroom",
      ],
      images: [
        "/images/vehicles/volvo-front.JPG",
        "/images/vehicles/volvo-back.JPG",
        "/images/vehicles/volvo-inside.HEIC",
        "/images/vehicles/volvo-outside.JPG",
      ],
      fuelType: "Diesel",
      transmission: "Automatic",
      availability: "Premium Booking",
    },
    {
      id: 12,
      name: "Mercedes Benz E Class",
      type: "Luxury Sedan",
      category: "luxury",
      capacity: "4 Passengers",
      dayRate: "₹7,000/5hr",
      kmRate: "₹175/km",
      rating: 4.9,
      reviews: 89,
      features: [
        "AC with 4-zone climate",
        "Premium luxury",
        "Executive comfort",
        "High-end features",
        "Ambient lighting",
        "Massage seats",
      ],
      images: [
        "/images/vehicles/mercedes-front.jpg",
        "/images/vehicles/mercedes-back.jpg",
        "/images/vehicles/mercedes-inside.jpg",
        "/images/vehicles/mercedes-outside.jpg",
      ],
      fuelType: "Diesel",
      transmission: "Automatic",
      availability: "Chauffeur Driven",
    },
  ];

  const categories = [
    { id: "all", name: "All Vehicles", icon: <FaCar /> },
    { id: "sedan", name: "Sedans", icon: <FaCar /> },
    { id: "suv", name: "SUVs & MPVs", icon: <FaCar /> },
    { id: "van", name: "Tempo Travellers", icon: <FaCar /> },
    { id: "bus", name: "Buses", icon: <FaCar /> },
    { id: "luxury", name: "Luxury", icon: <FaStar /> },
  ];

  const filteredVehicles = selectedCategory === "all" 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  if (loading) {
    return (
      <div className="vehicles-loading">
        <div className="loading-spinner"></div>
        <p>Loading our premium fleet...</p>
      </div>
    );
  }

  return (
    <div className="vehicles-page">
      <Helmet>
        <title>Our Vehicle Fleet - Sree Ganapathy Cabs</title>
        <meta
          name="description"
          content="Explore our premium fleet of vehicles including sedans, SUVs, tempo travellers, and luxury buses for your comfortable journey."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="vehicles-hero">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mt-5">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Premium Fleet
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Choose from our well-maintained vehicles for your journey
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="category-filter-section">
        <Container>
          <div className="category-filter">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-aos="fade-up"
                data-aos-delay={categories.indexOf(category) * 50}
              >
                <span className="category-icon">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Vehicle Grid */}
      <section className="vehicles-grid-section">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <AnimatePresence>
              {filteredVehicles.map((vehicle, index) => (
                <Col key={vehicle.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="vehicle-card">
                      {/* Wishlist Button */}
                      <button
                        className={`wishlist-btn ${wishlist.includes(vehicle.id) ? 'active' : ''}`}
                        onClick={() => toggleWishlist(vehicle.id)}
                      >
                        <FaHeart />
                      </button>

                      {/* Image Section */}
                      <div className="vehicle-image-wrapper">
                        {vehicle.images && vehicle.images.length > 0 && (
                          <>
                            <Card.Img
                              variant="top"
                              src={vehicle.images[0]}
                              alt={vehicle.name}
                              className="vehicle-image"
                            />
                            <button
                              className="gallery-btn"
                              onClick={() => openImageModal(vehicle, 0)}
                            >
                              <FaImages /> {vehicle.images.length} Photos
                            </button>
                          </>
                        )}
                        
                        {/* Rating */}
                        <div className="rating-badge">
                          <FaStar className="star-icon" />
                          <span>{vehicle.rating}</span>
                          <span className="reviews-count">({vehicle.reviews})</span>
                        </div>
                      </div>

                      <Card.Body>
                        {/* Title and Type */}
                        <div className="vehicle-header">
                          <Card.Title>{vehicle.name}</Card.Title>
                          <Card.Subtitle className="text-muted">
                            {vehicle.type}
                          </Card.Subtitle>
                        </div>

                        {/* Quick Specs */}
                        <div className="quick-specs">
                          <div className="spec-item">
                            <FaUserFriends className="spec-icon" />
                            <span>{vehicle.capacity}</span>
                          </div>
                          <div className="spec-item">
                            <FaGasPump className="spec-icon" />
                            <span>{vehicle.fuelType}</span>
                          </div>
                          <div className="spec-item">
                            <FaSnowflake className="spec-icon" />
                            <span>AC</span>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="pricing">
                          <div className="price-item">
                            <span className="price-label">Day Rate</span>
                            <span className="price-value">{vehicle.dayRate}</span>
                          </div>
                          <div className="price-item">
                            <span className="price-label">Extra km</span>
                            <span className="price-value">{vehicle.kmRate}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="features">
                          <strong>Key Features:</strong>
                          <div className="features-list">
                            {vehicle.features.slice(0, 3).map((feature, i) => (
                              <div key={i} className="feature-item">
                                <FaCheckCircle className="feature-check" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Availability */}
                        <Badge bg="success" className="availability-badge">
                          {vehicle.availability}
                        </Badge>
                      </Card.Body>

                      <Card.Footer>
                        {/* Action Buttons */}
                        <div className="action-buttons">
                          <Button
                            variant="success"
                            className="action-btn whatsapp-btn"
                            onClick={() => handleWhatsAppClick(vehicle.name)}
                          >
                            <FaWhatsapp />
                            <span>WhatsApp</span>
                          </Button>
                          <Button
                            variant="primary"
                            className="action-btn call-btn"
                            onClick={handlePhoneClick}
                          >
                            <FaPhoneAlt />
                            <span>Call Now</span>
                          </Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </Container>
      </section>

      {/* Image Gallery Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size={isFullscreen ? "fullscreen" : "xl"}
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton className="gallery-header">
          <Modal.Title>
            {currentVehicle?.name}
            <small className="image-count">
              {currentImageIndex + 1} / {currentVehicle?.images.length}
            </small>
          </Modal.Title>
          <Button
            variant="light"
            onClick={toggleFullscreen}
            className="fullscreen-btn"
          >
            <FaExpand />
          </Button>
        </Modal.Header>
        <Modal.Body className="gallery-body">
          {currentVehicle && currentVehicle.images && (
            <div className="gallery-container">
              {/* Main Image */}
              <div className="main-image-container">
                <button
                  className="nav-btn prev-btn"
                  onClick={prevImage}
                >
                  <FaChevronLeft />
                </button>
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={currentVehicle.images[currentImageIndex]}
                    alt={`${currentVehicle.name}`}
                    className="main-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  className="nav-btn next-btn"
                  onClick={nextImage}
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="thumbnail-strip">
                {currentVehicle.images.map((img, index) => (
                  <motion.div
                    key={index}
                    className={`thumbnail-item ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Trust Badges */}
      <section className="trust-badges">
        <Container>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <div className="trust-badge" data-aos="fade-up" data-aos-delay="100">
                <div className="badge-icon">✓</div>
                <h4>Well Maintained</h4>
                <p>Regular service & cleaning</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="trust-badge" data-aos="fade-up" data-aos-delay="200">
                <div className="badge-icon">👨‍✈️</div>
                <h4>Professional Drivers</h4>
                <p>Experienced & courteous</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="trust-badge" data-aos="fade-up" data-aos-delay="300">
                <div className="badge-icon">💰</div>
                <h4>Best Prices</h4>
                <p>No hidden charges</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="trust-badge" data-aos="fade-up" data-aos-delay="400">
                <div className="badge-icon">⏰</div>
                <h4>24/7 Support</h4>
                <p>Always here to help</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Vehicles;