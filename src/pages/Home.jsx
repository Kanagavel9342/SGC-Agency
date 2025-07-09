import React, { useState, useEffect } from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaWhatsapp,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  
  const heroImages = [
    "Hero.jpg",
    "/images/Hero1.jpg",
    "/images/Hero2.jpeg",
    "/images/Hero3.jpg",
    "/images/Hero4.jpg"
  ];

  const services = [
    {
      title: "Airport Transfers",
      description: "Hassle-free airport pickups and drop-offs",
      icon: "✈️"
    },
    {
      title: "Local Sightseeing",
      description: "Explore city attractions with our guided tours",
      icon: "🏙️"
    },
    {
      title: "Outstation Trips",
      description: "Comfortable long-distance travel solutions",
      icon: "🛣️"
    },
    {
      title: "Corporate Travel",
      description: "Reliable transportation for business needs",
      icon: "💼"
    }
  ];

  const packages = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "Perfect 2-day trip package to nearby hill stations",
      price: "₹5,999",
      duration: "2 Days",
      highlights: ["Scenic routes", "Comfortable stay", "Sightseeing"]
    },
    {
      id: 2,
      title: "Pilgrimage Tour",
      description: "Spiritual journey to South India's famous temples",
      price: "₹12,999",
      duration: "5 Days",
      highlights: ["All temple darshan", "AC vehicle", "Guide service"]
    }
  ];

  const vehicles = [
    {
      id: 1,
      title: "Sedan (4+1)",
      description: "Toyota Etios, Hyundai Verna or similar",
      features: ["AC", "Comfortable", "Good mileage"],
      price: "₹12/km"
    },
    {
      id: 2,
      title: "SUV (6+1)",
      description: "Toyota Innova, Mahindra XUV or similar",
      features: ["Spacious", "AC", "Comfort for long trips"],
      price: "₹16/km"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service! The cab was clean and the driver was very professional. Will definitely use again.",
      location: "Chennai, India",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      comment: "Very good service overall. The driver was punctual and the vehicle was comfortable.",
      location: "Bangalore, India",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Arun Patel",
      rating: 5,
      comment: "Best cab service I've used in India. The driver knew all the routes perfectly and was very courteous.",
      location: "Mumbai, India",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Meena Desai",
      rating: 5,
      comment: "Used their service for airport transfer at midnight. Driver arrived early and helped with luggage. Highly recommended!",
      location: "Hyderabad, India",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Vikram Singh",
      rating: 4,
      comment: "Comfortable ride for our family trip. Vehicle was well maintained and driver was professional.",
      location: "Delhi, India",
      date: "2 months ago"
    }
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Hero image slider
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(heroInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [heroImages.length]);

  useEffect(() => {
    // Reviews auto-scroll
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

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="home-page">
      <div className="floating-buttons">
        <a href="https://wa.me/919003414107" className="whatsapp-button" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="tel:+919003414107" className="call-button">
          <FaPhone />
        </a>
      </div>

      <section className="hero">
        <div className="hero-slider">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`hero-bg-image ${index === currentHeroImage ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
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
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="subtitle">Comprehensive travel solutions tailored to your needs</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                className="service-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="packages-section">
            <h3>Popular Travel Packages</h3>
            <div className="packages-grid">
              {packages.map((pkg) => (
                <motion.div 
                  className="package-card"
                  key={pkg.id}
                  whileHover={{ y: -5 }}
                  onClick={() => navigateTo("/packages")}
                >
                  <div className="package-header">
                    <h4>{pkg.title}</h4>
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
              ))}
            </div>
          </div>

          <div className="vehicles-section">
            <h3>Vehicle Rental Options</h3>
            <div className="vehicles-grid">
              {vehicles.map((vehicle) => (
                <motion.div 
                  className="vehicle-card"
                  key={vehicle.id}
                  whileHover={{ y: -5 }}
                  onClick={() => navigateTo("/vehicles")}
                >
                  <h4>{vehicle.title}</h4>
                  <p className="vehicle-description">{vehicle.description}</p>
                  <ul className="vehicle-features">
                    {vehicle.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="vehicle-footer">
                    <span className="vehicle-price">{vehicle.price}</span>
                    <button className="view-button">
                      View Options <IoIosArrowForward />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>Customer Reviews</h2>
            <div className="rating-summary">
              <div className="average-rating">
                {averageRating.toFixed(1)} <FaStar className="star" />
              </div>
              <p>Based on {reviews.length} reviews</p>
            </div>
          </div>
          
          <div className="reviews-container">
            <button className="review-nav prev" onClick={prevReview}>
              <IoIosArrowBack />
            </button>
            
            <div className="reviews-slider">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className={`review-card ${index === currentReview ? "active" : ""}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentReview ? 1 : 0,
                    x: index === currentReview ? 0 : (index < currentReview ? -50 : 50),
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < review.rating ? "filled" : ""} />
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
            
            <button className="review-nav next" onClick={nextReview}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="subtitle">We're available 24/7 to assist with your travel needs</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-method">
                <div className="contact-icon-container">
                  <FaPhone className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <a href="tel:+919003414107" className="contact-link">+91 90034 14107</a>
                  <p>Available round the clock</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon-container">
                  <FaWhatsapp className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/919003414107" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Chat Now
                  </a>
                  <p>Instant response during business hours</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon-container">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:sreeganapathycaabs@gmail.com" className="contact-link">
                    sreeganapathycaabs@gmail.com
                  </a>
                  <p>For detailed inquiries and bookings</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon-container">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Chennai, Tamil Nadu</p>
                  <p>Services available across India</p>
                </div>
              </div>
            </div>
            
            <div className="social-media-section">
              <h3>Connect With Us</h3>
              <p>Follow us on social media for updates and offers</p>
              <div className="social-links">
                <a href="https://instagram.com/sreeganapathycaabs" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram className="social-icon" />
                  <span>Instagram</span>
                </a>
                <a href="https://facebook.com/sreeganapathycaabs" target="_blank" rel="noopener noreferrer" className="social-link">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;