import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      title: "Airport Transfers",
      description: "Reliable pick-up and drop-off services to all major airports",
      icon: "✈️"
    },
    {
      title: "City Tours",
      description: "Explore the city with our knowledgeable drivers",
      icon: "🏙️"
    },
    {
      title: "Corporate Travel",
      description: "Professional service for your business travel needs",
      icon: "💼"
    },
    {
      title: "Outstation Trips",
      description: "Comfortable long-distance travel to nearby cities",
      icon: "🛣️"
    },
    {
      title: "Hourly Rental",
      description: "Flexible rental options by the hour",
      icon: "⏱️"
    },
    {
      title: "Event Transportation",
      description: "Special services for weddings and events",
      icon: "🎉"
    }
  ];

  return (
    <Container fluid className="services-page py-5">
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="display-5 fw-bold mb-3">Our Services</h1>
          <p className="lead text-muted">Providing premium transportation services across all your needs</p>
        </Col>
      </Row>
      
      <Container>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <div className="service-card h-100 p-4 shadow-sm rounded-3">
                <div className="service-icon mb-3">{service.icon}</div>
                <h3 className="h5 fw-bold">{service.title}</h3>
                <p className="mb-0 text-muted">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;