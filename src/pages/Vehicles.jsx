import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaUserFriends,
  FaMoneyBillWave,
  FaCar,
  FaImages,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Modal,
} from "react-bootstrap";
import "../styles/vehicles.css";

const Vehicles = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const vehicles = [
    {
      name: "Swift Desire",
      type: "Maruti Suzuki",
      capacity: "4 passengers",
      dayRate: "₹1800/day",
      kmRate: "₹9/km",
      features: [
        "AC",
        "Fuel efficient",
        "Comfortable seating",
        "Ample luggage space",
      ],
      images: [
        "/images/vehicles/Swift Desire-dashboard.jpg",
        "/images/vehicles/Swift Desire-Front.jpg",
        "/images/vehicles/Swift Desire-inside.jpg",
        "/images/vehicles/Swift Desire-inside2.jpg",
      ],
    },
    {
      name: "Toyota Etios",
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
      name: "Toyota Innova",
      type: "MPV",
      capacity: "7 passengers",
      dayRate: "₹2500/day",
      kmRate: "₹14/km",
      features: [
        "AC",
        "Spacious interior",
        "Comfortable for long rides",
        "Ample luggage space",
      ],
      images: [
        "/images/vehicles/innova-front.jpg",
        "/images/vehicles/innova-back.jpeg",
        "/images/vehicles/innova-inside.jpg",
        "/images/vehicles/innova-inside2.jpg",
      ],
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium MPV",
      capacity: "7 passengers",
      dayRate: "₹3000/day",
      kmRate: "₹15/km",
      features: [
        "AC",
        "Premium interior",
        "Super comfortable",
        "Large luggage space",
      ],
      images: [
        "/images/vehicles/innova-crysta-front.jpg",
        "/images/vehicles/innova-crysta-back.jpeg",
        "/images/vehicles/innova-crysta-inside.jpg",
        "/images/vehicles/innova-crysta-inside2.jpeg",
      ],
    },
    {
      name: "Honda Amaze",
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
      name: "Innova Hycross",
      type: "Hybrid MPV",
      capacity: "7 passengers",
      dayRate: "₹4000/day",
      kmRate: "₹20/km",
      features: [
        "AC",
        "Hybrid technology",
        "Ultra comfortable",
        "Premium features",
      ],
      images: [
        "/images/vehicles/hycross-front.jpg",
        "/images/vehicles/hycross-back.jpg",
        "/images/vehicles/hycross-inside.jpg",
        "/images/vehicles/hycross-outside.jpg",
      ],
    },
    {
      name: "Force Urbania",
      type: "Luxury Van",
      capacity: "13-15 passengers",
      dayRate: "₹10,000/day",
      kmRate: "₹30/km",
      features: ["AC", "Luxury interior", "Very spacious", "Premium comfort"],
      images: [
        "/images/vehicles/urbania-front.jpg",
        "/images/vehicles/urbania-back.jpeg",
        "/images/vehicles/urbania-inside.jpeg",
        "/images/vehicles/urbania-inside2.jpeg",
      ],
    },
    {
      name: "Tempo Traveller",
      type: "14 Seater",
      capacity: "14 passengers",
      dayRate: "₹3,500/day",
      kmRate: "₹20/km",
      features: [
        "AC",
        "Spacious",
        "Comfortable for groups",
        "Ample luggage space",
      ],
      images: [
        "/images/vehicles/tempo-14-front.jpg",
        "/images/vehicles/tempo-14-back.jpg",
        "/images/vehicles/tempo-14-inside.HEIC",
        "/images/vehicles/tempo-14-inside2.jpg",
      ],
    },
    {
      name: "Tempo Traveller",
      type: "18 Seater",
      capacity: "18 passengers",
      dayRate: "₹4,000/day",
      kmRate: "₹20/km",
      features: [
        "AC",
        "Very spacious",
        "Ideal for large groups",
        "Good luggage capacity",
      ],
      images: [
        "/images/vehicles/tempo-18-front.jpg",
        "/images/vehicles/tempo-18-back.jpg",
        "/images/vehicles/tempo-18-inside.jpg",
        "/images/vehicles/tempo-18-inside2.jpg",
      ],
    },
    {
      name: "25 Seater Mini Van",
      type: "AC Mini Bus",
      capacity: "25 passengers",
      dayRate: "₹8,000/day",
      kmRate: "₹30/km",
      features: [
        "AC",
        "Very spacious",
        "Ideal for large groups",
        "Comfortable seating",
      ],
      images: [
        "/images/vehicles/minivan-front.jpg",
        "/images/vehicles/minivan-back.jpg",
        "/images/vehicles/minivan-inside.jpg",
        "/images/vehicles/minivan-outside.jpg",
      ],
    },
    {
      name: "Volvo Bus",
      type: "Luxury Bus",
      capacity: "35-45 passengers",
      dayRate: "₹21,000/day (150 kms free)",
      kmRate: "₹110/km (extra)",
      features: [
        "AC",
        "Ultra luxury",
        "Reclining seats",
        "Entertainment system",
      ],
      images: [
        "/images/vehicles/volvo-front.JGP",
        "/images/vehicles/volvo-back.HEIC",
        "/images/vehicles/volvo-inside.JPG",
        "/images/vehicles/volvo-outside.JPG",
      ],
    },
    {
      name: "Mercedes Benz E Class",
      type: "Luxury Sedan",
      capacity: "4 passengers",
      dayRate: "5hr/50km: ₹7000 | 10hr/100km: ₹14000",
      kmRate: "Extra: ₹1500/hr | ₹175/km",
      features: [
        "Premium luxury",
        "Executive comfort",
        "High-end features",
        "Chauffeur driven",
      ],
      images: [
        "/images/vehicles/mercedes-front.jpg",
        "/images/vehicles/mercedes-back.jpg",
        "/images/vehicles/mercedes-inside.jpg",
        "/images/vehicles/mercedes-outside.jpg",
      ],
    },
  ];

  return (
    <Container className="vehicles-page py-5">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="text-primary">Our Vehicle Fleet</h1>
          <p className="lead text-muted">
            Choose from our well-maintained vehicles for your comfortable
            journey
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {vehicles.map((vehicle, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-0 vehicle-card">
              <div className="position-relative">
                {vehicle.images && vehicle.images.length > 0 && (
                  <>
                    <Card.Img
                      variant="top"
                      src={vehicle.images[0]}
                      alt={vehicle.name}
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
                  {vehicle.name}
                  <small className="d-block text-muted">{vehicle.type}</small>
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
                    onClick={() => handleWhatsAppClick(vehicle.name)}
                  >
                    <FaWhatsapp className="me-2" />
                    Book via WhatsApp
                  </Button>
                  <Button
                    variant="primary"
                    className="d-flex align-items-center justify-content-center"
                    onClick={handlePhoneClick}
                  >
                    <FaPhoneAlt className="me-2" />
                    Call Now
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Image Gallery Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{currentVehicle?.name} Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVehicle && currentVehicle.images && (
            <div className="text-center">
              <img
                src={currentVehicle.images[currentImageIndex]}
                alt={`${currentVehicle.name} view`}
                className="img-fluid mb-3"
                style={{ maxHeight: "60vh" }}
              />
              <div className="d-flex justify-content-center flex-wrap">
                {currentVehicle.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${currentVehicle.name} view ${index + 1}`}
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
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Vehicles;
