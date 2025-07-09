import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <Container>
        {/* Desktop View (md and up) */}
        <Row className="d-none d-md-flex align-items-center">
          <Col md={6} className="text-start">
            <p className="mb-0 fs-6">
              &copy; {new Date().getFullYear()} Sree Ganapathy Cabs. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-end">
            <div className="footer-links">
              <a href="/privacy" className="text-white mx-2 text-decoration-none">Privacy Policy</a>
              <a href="/terms" className="text-white mx-2 text-decoration-none">Terms of Service</a>
              <a href="/contact" className="text-white mx-2 text-decoration-none">Contact Us</a>
            </div>
          </Col>
        </Row>

        {/* Mobile View (sm and down) */}
        <Row className="d-flex d-md-none flex-column text-center">
          <Col className="mb-2">
            <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
          </Col>
          <Col>
            <p className="mb-0 fs-6">
              &copy; {new Date().getFullYear()} Sree Ganapathy Cabs. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;