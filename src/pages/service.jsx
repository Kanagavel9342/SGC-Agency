import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import '../Styles/services.css';

const Services = () => {
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const services = [
    {
      title: "Airport Transfers",
      description: "Reliable pick-up and drop-off services to all major airports. We monitor flight schedules to ensure timely pickups.",
      icon: "✈️",
      features: ["Flight tracking", "Meet & greet service", "Luggage assistance", "24/7 availability"]
    },
    {
      title: "City Tours",
      description: "Explore the city with our knowledgeable drivers who double as local guides. Customize your itinerary.",
      icon: "🏙️",
      features: ["Local guides", "Flexible stops", "Popular attractions", "Photo opportunities"]
    },
    {
      title: "Corporate Travel",
      description: "Professional service for your business travel needs. Impress your clients with our premium fleet.",
      icon: "💼",
      features: ["Professional chauffeurs", "Billing options", "Punctuality guaranteed", "Executive vehicles"]
    },
    {
      title: "Outstation Trips",
      description: "Comfortable long-distance travel to nearby cities. Our experienced drivers ensure a safe journey.",
      icon: "🛣️",
      features: ["Inter-city travel", "Flexible packages", "Well-rested drivers", "Breakfast stops"]
    },
    {
      title: "Hourly Rental",
      description: "Flexible rental options by the hour. Perfect for shopping, meetings, or multiple stops.",
      icon: "⏱️",
      features: ["Minimum 4 hours", "Multiple stops", "Waiting charges included", "Any destination"]
    },
    {
      title: "Event Transportation",
      description: "Special services for weddings and events. Coordinate guest transportation seamlessly.",
      icon: "🎉",
      features: ["Wedding packages", "Group bookings", "Decorated vehicles", "Coordinated pickups"]
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services - Sree Ganapathy Cabs | Premium Cab Services in India</title>
        <meta 
          name="description" 
          content="Explore our comprehensive cab services including airport transfers, city tours, corporate travel, outstation trips, hourly rentals, and event transportation. Book your ride today!" 
        />
        <meta 
          name="keywords" 
          content="cab services, airport taxi, city tour cab, corporate car rental, outstation cab, hourly car rental, event transportation" 
        />
        <link rel="canonical" href="https://sreeganapathycabs.com/services" />
      </Helmet>

      <Container fluid className="services-page py-5">
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center pt-5">
            <motion.h1 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Providing premium transportation services across all your needs
            </motion.p>
          </Col>
        </Row>
        
        <Container>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <motion.div 
                  className="service-card h-100 p-4 shadow-sm rounded-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="service-icon mb-3" aria-hidden="true">
                    <span className="display-4">{service.icon}</span>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-3">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="service-features list-unstyled mt-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2">
                        <span className="feature-bullet me-2">✓</span>
                        <small>{feature}</small>
                      </li>
                    ))}
                  </ul>

                  {/* Book Now Button */}
                  <motion.button 
                    className="btn btn-outline-primary w-100 mt-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/contact?service=' + encodeURIComponent(service.title)}
                  >
                    Book {service.title}
                  </motion.button>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Why Choose Us Section */}
          <Row className="mt-5 pt-4">
            <Col xs={12}>
              <motion.div 
                className="why-choose-us p-4 bg-light rounded-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="h4 text-center mb-4">Why Choose Our Services?</h2>
                <Row className="g-3">
                  <Col xs={6} md={3}>
                    <div className="text-center">
                      <div className="feature-icon mb-2">🚗</div>
                      <h3 className="h6">Well-maintained Fleet</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="text-center">
                      <div className="feature-icon mb-2">👨‍✈️</div>
                      <h3 className="h6">Professional Drivers</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="text-center">
                      <div className="feature-icon mb-2">💰</div>
                      <h3 className="h6">Competitive Pricing</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="text-center">
                      <div className="feature-icon mb-2">⏰</div>
                      <h3 className="h6">24/7 Availability</h3>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Services;