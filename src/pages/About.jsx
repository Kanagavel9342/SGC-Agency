import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCar,
  FaClock,
  FaUserTie,
  FaRupeeSign,
  FaQuoteLeft,
  FaCalendarAlt,
  FaUsers,
  FaShieldAlt,
  FaHeart,
  FaAward,
  FaRocket,
  FaHandshake,
  FaSmile,
  FaTaxi,
  FaBus,
  FaShuttleVan, // Changed from FaVan to FaShuttleVan
  FaUserCircle,
  FaRegClock,
  FaRegCalendarCheck,
  FaCheckCircle,
  FaThumbsUp,
  FaTrophy,
  FaGlobe,
  FaRoad, // Alternative for transportation
  FaMoneyBillWave, // For pricing
} from "react-icons/fa";
import "../Styles/about.css";

const About = () => {
  const location = useLocation();

  // Initialize AOS and scroll to top
  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100,
    });

    // Refresh AOS on component mount
    AOS.refresh();
  }, [location.pathname]);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service! The driver was punctual and the bus was very clean. Highly recommended for family trips to temples and hill stations.",
      date: "15 Jan 2025",
      location: "Chennai",
      tripType: "Family Trip",
      delay: 100
    },
    {
      id: 2,
      name: "Mohana Priya",
      rating: 4,
      comment: "Comfortable ride at reasonable rates. Will definitely use again for our next trip to Coimbatore. The booking process was smooth.",
      date: "22 Feb 2025",
      location: "Madurai",
      tripType: "Business Trip",
      delay: 200
    },
    {
      id: 3,
      name: "Raja",
      rating: 5,
      comment: "Reliable service even during long journeys. Professional drivers who know the routes well. Made our Ooty trip memorable.",
      date: "5 Mar 2025",
      location: "Bangalore",
      tripType: "Weekend Getaway",
      delay: 300
    },
    {
      id: 4,
      name: "Priya Dharshini",
      rating: 5,
      comment: "Best cab service in Coimbatore! Used for my wedding functions and everything was perfectly coordinated. Thank you team!",
      date: "10 Mar 2025",
      location: "Coimbatore",
      tripType: "Wedding Event",
      delay: 400
    },
    {
      id: 5,
      name: "Senthil Kumar",
      rating: 4,
      comment: "Regular user for office commutes. Always on time and well-maintained vehicles. Great value for money.",
      date: "18 Mar 2025",
      location: "Tirupur",
      tripType: "Corporate Travel",
      delay: 500
    }
  ];

  const timelineEvents = [
    {
      year: "1995",
      title: "The Beginning",
      description: "Founded in Coimbatore with just 2 vehicles, serving local customers with dedication",
      icon: <FaRocket />,
      stats: "2 Vehicles",
      color: "#ff6b6b",
      delay: 100
    },
    {
      year: "2005",
      title: "Expansion Era",
      description: "Expanded fleet to 20+ vehicles covering all major South Indian destinations",
      icon: <FaCar />,
      stats: "20+ Vehicles",
      color: "#4ecdc4",
      delay: 200
    },
    {
      year: "2015",
      title: "Milestone Achievement",
      description: "Celebrated 20 years with 50+ vehicles and a team of experienced drivers",
      icon: <FaTrophy />,
      stats: "50+ Vehicles",
      color: "#45b7d1",
      delay: 300
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online booking system and expanded to luxury vehicle segment",
      icon: <FaGlobe />,
      stats: "Online Booking",
      color: "#96ceb4",
      delay: 400
    },
    {
      year: "2023",
      title: "Present Day",
      description: "100+ vehicles, 80+ satisfied corporate clients, and growing",
      icon: <FaHeart />,
      stats: "100+ Vehicles",
      color: "#ffcc5c",
      delay: 500
    }
  ];

  const services = [
    {
      icon: <FaTaxi />,
      title: "Premium Sedans",
      description: "Luxury sedans for executive travel and airport transfers",
      features: ["AC", "4 Seaters", "Luggage Space", "Chauffeur"],
      price: "Starting ₹12/km",
      color: "#007bff",
      delay: 100
    },
    {
      icon: <FaCar />,
      title: "SUVs & MPVs",
      description: "Spacious vehicles perfect for family trips and group outings",
      features: ["AC", "7 Seaters", "Extra Legroom", "Hill-station ready"],
      price: "Starting ₹14/km",
      color: "#28a745",
      delay: 200
    },
    {
      icon: <FaShuttleVan />, // Changed from FaVan to FaShuttleVan
      title: "Tempo Travellers",
      description: "Ideal for large groups, corporate events, and pilgrimages",
      features: ["AC", "12-18 Seaters", "Pushback Seats", "Entertainment"],
      price: "Starting ₹20/km",
      color: "#dc3545",
      delay: 300
    },
    {
      icon: <FaBus />,
      title: "Luxury Buses",
      description: "AC sleeper and seater buses for comfortable long journeys",
      features: ["AC Sleeper", "40+ Seaters", "Rest Stops", "Emergency Kit"],
      price: "Custom Quote",
      color: "#ffc107",
      delay: 400
    }
  ];

  const stats = [
    { number: "28+", label: "Years Experience", icon: <FaClock />, delay: 100 },
    { number: "100+", label: "Fleet Size", icon: <FaCar />, delay: 200 },
    { number: "50k+", label: "Happy Customers", icon: <FaSmile />, delay: 300 },
    { number: "80+", label: "Corporate Clients", icon: <FaHandshake />, delay: 400 }
  ];

  const values = [
    {
      title: "Safety First",
      description: "Regular vehicle maintenance and driver background checks",
      icon: <FaShieldAlt />,
      color: "#007bff",
      delay: 100
    },
    {
      title: "Customer Satisfaction",
      description: "24/7 support and personalized service for every journey",
      icon: <FaThumbsUp />,
      color: "#28a745",
      delay: 200
    },
    {
      title: "Professional Drivers",
      description: "Experienced, courteous, and route-knowledgeable drivers",
      icon: <FaUserTie />,
      color: "#dc3545",
      delay: 300
    },
    {
      title: "Best Value",
      description: "Competitive pricing with no hidden charges",
      icon: <FaMoneyBillWave />, // Changed from FaRupeeSign
      color: "#ffc107",
      delay: 400
    }
  ];

  return (
    <div className="about-page-container">
      <Helmet>
        <title>About Sree Ganapathy Cabs | 28+ Years of Trusted Service in Coimbatore</title>
        <meta
          name="description"
          content="Learn about Sree Ganapathy Cabs - Your trusted travel partner since 1995. Founded by Mr. Veshnu Selvaraj, we provide premium cab services across South India with 100+ vehicles and professional drivers."
        />
        <meta
          name="keywords"
          content="about Sree Ganapathy Cabs, Coimbatore taxi service, cab company history, Veshnu Selvaraj, South India travel"
        />
      </Helmet>

      {/* Hero Banner with AOS */}
      <div className="about-hero-banner">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 data-aos="fade-down" data-aos-delay="200">
            About Sree Ganapathy Cabs
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Your trusted travel partner since 1995
          </p>
          <div className="hero-stats" data-aos="zoom-in" data-aos-delay="600">
            <span>28+ Years</span>
            <span>100+ Vehicles</span>
            <span>50k+ Customers</span>
          </div>
        </motion.div>
      </div>

      {/* Stats Section with AOS */}
      <section className="about-stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              data-aos="flip-left"
              data-aos-delay={stat.delay}
              data-aos-duration="800"
            >
              <div className="stat-icon" style={{ backgroundColor: `rgba(0,123,255,0.1)` }}>
                {stat.icon}
              </div>
              <h3 className="stat-number" data-aos="count-up">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Section with AOS */}
      <section className="about-owner-section">
        <div className="about-owner-grid">
          <div 
            className="about-owner-info"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2>Meet Our Founder</h2>
            <h3>Mr. Veshnu Selvaraj</h3>
            <p className="owner-quote">
              <FaQuoteLeft className="quote-icon" />
              "Our journey began with a simple vision: to provide reliable, comfortable, and affordable transportation to every customer. 28 years later, we're proud to be one of South India's most trusted cab services."
            </p>
            <p>
              With over 28 years of experience in the transportation industry,
              Mr. Veshnu Selvaraj founded Sree Ganapathy Cabs with a vision to
              provide reliable and comfortable transport solutions across South
              India. His dedication to customer satisfaction and commitment to
              quality has made the company what it is today.
            </p>
            <div className="about-owner-contact">
              <p data-aos="fade-up" data-aos-delay="300">
                <FaPhone /> Call Us : +91 90034 14107
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                <FaEnvelope /> Email : sreeganapathycaabs@gmail.com
              </p>
            </div>
          </div>
          <div 
            className="about-owner-image"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <img
              src="/images/owner_img.jpg"
              alt="Mr. Veshnu Selvaraj - Founder of Sree Ganapathy Cabs"
            />
            <div className="experience-badge" data-aos="zoom-in" data-aos-delay="600">
              <FaAward />
              <span>28+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline with AOS */}
      <section className="about-company-section">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Journey Through Time
        </h2>
        <div className="about-company-timeline">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="about-timeline-item"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={event.delay}
              data-aos-duration="800"
            >
              <div className="timeline-icon" style={{ backgroundColor: event.color }}>
                {event.icon}
              </div>
              <div className="timeline-content">
                <h3>{event.year}</h3>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <span className="timeline-stats">{event.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section with AOS */}
      <section className="about-values-section">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Core Values
        </h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card"
              data-aos="zoom-in"
              data-aos-delay={value.delay}
              data-aos-duration="800"
            >
              <div className="value-icon" style={{ backgroundColor: value.color }}>
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section with AOS */}
      <section className="about-services-section">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Fleet & Services
        </h2>
        <div className="about-services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="about-service-card"
              data-aos="flip-up"
              data-aos-delay={service.delay}
              data-aos-duration="800"
            >
              <div className="service-icon" style={{ backgroundColor: service.color }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    <FaCheckCircle /> {feature}
                  </span>
                ))}
              </div>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section with AOS */}
      <section className="about-reviews-section">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          What Our Customers Say
        </h2>
        <div className="about-reviews-grid">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="about-review-card"
              data-aos="fade-up"
              data-aos-delay={review.delay}
              data-aos-duration="800"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="review-quote">
                <FaQuoteLeft className="review-quote-icon" />
              </div>
              <div className="review-header">
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <p className="reviewer-location">{review.location}</p>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < review.rating ? "star-filled" : "star-empty"}
                    />
                  ))}
                </div>
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-footer">
                <span className="review-date">
                  <FaRegCalendarCheck /> {review.date}
                </span>
                <span className="review-trip-type">
                  <FaRegClock /> {review.tripType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Section with AOS */}
      <section className="about-location-section">
        <h2 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Visit Us
        </h2>
        <div 
          className="about-map-container"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <iframe
            title="Sree Ganapathy Cabs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789012!2d76.9897919!3d11.0475397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAyJzUxLjEiTiA3NsKwNTknMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Sree Ganapathy Cabs Location"
          ></iframe>
        </div>
        <div className="about-contact-info">
          <p data-aos="fade-up" data-aos-delay="300">
            <FaMapMarkerAlt /> Head Office: Coimbatore, Tamil Nadu - 641001
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            <FaPhone /> 24/7 Support: +91 90034 14107
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            <FaEnvelope /> Email: sreeganapathycaabs@gmail.com
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section">
        <div 
          className="cta-content"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h2>Ready to Experience Our Service?</h2>
          <p>Book your ride now and travel with comfort and reliability</p>
          <div className="cta-buttons">
            <motion.a
              href="tel:+919003414107"
              className="cta-btn cta-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <FaPhone /> Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/919003414107"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-success"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <FaUsers /> WhatsApp
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;