import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaHotel,
  FaHiking,
  FaHome,
  FaEnvelope,
  FaCalendarAlt,
  FaPaperPlane,
  FaRocket,
  FaCar,
  FaReply,
  FaUserTie,
  FaUtensils,
  FaUmbrellaBeach,
  FaMountain,
  FaTree,
  FaWater,
  FaBus,
} from "react-icons/fa";
import "../Styles/packages.css";

const TourPackages = () => {
  const handleWhatsAppClick = (packageTitle, packagePrice) => {
    const phoneNumber = "919003414107";
    const message = `Hi, I'm interested in booking the ${packageTitle} (${packagePrice}). Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const packages = [
    {
      id: 1,
      title: "Ooty Hill Station Retreat (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?ooty",
      highlights: [
        "Botanical Garden",
        "Doddabetta Peak",
        "Tea Museum",
        "Rose Garden",
      ],
      includes: [
        "AC Accommodation",
        "Breakfast",
        "Sightseeing Cab",
        "Guide Service",
      ],
      idealFor: "Families, Couples",
      distance: "85 km from Coimbatore",
      price: "₹8,499 per person",
    },
    {
      id: 2,
      title: "Kodaikanal Lake Tour (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?kodaikanal",
      highlights: [
        "Kodai Lake",
        "Pine Forest",
        "Coaker's Walk",
        "Bear Shola Falls",
      ],
      includes: ["Luxury Resort", "All Meals", "Private Cab", "Entry Tickets"],
      idealFor: "Honeymooners, Nature Lovers",
      distance: "175 km from Coimbatore",
      price: "₹9,999 per person",
    },
    {
      id: 3,
      title: "Munnar Tea Estate Experience (3N/4D)",
      image: "https://source.unsplash.com/random/600x400/?munnar",
      highlights: [
        "Tea Plantations",
        "Eravikulam Park",
        "Mattupetty Dam",
        "Top Station",
      ],
      includes: [
        "Plantation Stay",
        "Tea Tasting",
        "AC Vehicle",
        "English Guide",
      ],
      idealFor: "Families, Solo Travelers",
      distance: "130 km from Coimbatore",
      price: "₹12,500 per person",
    },
    {
      id: 4,
      title: "Coorg Coffee Plantation Stay (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?coorg",
      highlights: [
        "Abbey Falls",
        "Raja's Seat",
        "Coffee Plantation Tour",
        "Tibetan Monastery",
      ],
      includes: [
        "Plantation Villa",
        "All Meals",
        "Local Sightseeing",
        "Coffee Tasting",
      ],
      idealFor: "Couples, Senior Citizens",
      distance: "280 km from Coimbatore",
      price: "₹11,200 per person",
    },
    {
      id: 5,
      title: "Wayanad Adventure Package (3N/4D)",
      image: "https://source.unsplash.com/random/600x400/?wayanad",
      highlights: [
        "Banasura Dam",
        "Chembra Peak",
        "Edakkal Caves",
        "Pookode Lake",
      ],
      includes: ["Jungle Resort", "Trekking Guide", "Jeep Safari", "Campfire"],
      idealFor: "Adventure Seekers",
      distance: "200 km from Coimbatore",
      price: "₹13,750 per person",
    },
    {
      id: 6,
      title: "Isha Yoga Day Trip",
      image: "https://source.unsplash.com/random/600x400/?isha",
      itinerary: [
        "7:30 AM: Pickup from Coimbatore",
        "9:00 AM: Yoga Session",
        "11:00 AM: Dhyanalinga Visit",
        "1:00 PM: Vegetarian Lunch",
        "3:00 PM: Return Journey",
      ],
      includes: ["AC Transport", "Yoga Mat", "Guide", "Lunch"],
      price: "₹2,499 per person",
    },
    {
      id: 7,
      title: "Valparai Nature Escape (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?valparai",
      highlights: ["Tea Estates", "Aliyar Dam", "Monkey Falls", "Sholayar Dam"],
      includes: ["Eco Lodge", "Breakfast", "Forest Guide", "Camera Permits"],
      idealFor: "Nature Photographers",
      distance: "110 km from Coimbatore",
      price: "₹9,800 per person",
    },
    {
      id: 8,
      title: "Kerala Backwaters Cruise (3N/4D)",
      image: "https://source.unsplash.com/random/600x400/?backwaters",
      highlights: [
        "Alleppey Houseboat",
        "Kumarakom Bird Sanctuary",
        "Coconut Lagoon",
        "Sunset Cruise",
      ],
      includes: ["Deluxe Houseboat", "All Meals", "Kayaking", "Village Tour"],
      idealFor: "Couples, Families",
      distance: "300 km from Coimbatore",
      price: "₹18,500 per couple",
    },
    {
      id: 9,
      title: "Coimbatore City Tour (1D)",
      image: "https://source.unsplash.com/random/600x400/?coimbatore",
      itinerary: [
        "9:00 AM: Gedee Car Museum",
        "11:00 AM: Perur Temple",
        "1:00 PM: Local Lunch",
        "3:00 PM: VOC Park",
        "5:00 PM: Shopping",
      ],
      includes: ["AC Vehicle", "Guide", "Entry Tickets", "Water Bottles"],
      price: "₹1,999 per person",
    },
    {
      id: 10,
      title: "Masinagudi Wildlife Safari (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?jungle",
      highlights: [
        "Mudumalai Safari",
        "Theppakadu Camp",
        "Elephant Ride",
        "Night Trail",
      ],
      includes: ["Jungle Lodge", "Safari Jeep", "Naturalist", "All Meals"],
      idealFor: "Wildlife Enthusiasts",
      distance: "90 km from Coimbatore",
      price: "₹11,300 per person",
    },
    {
      id: 11,
      title: "Athirapally Waterfalls Tour (1D)",
      image: "https://source.unsplash.com/random/600x400/?waterfall",
      itinerary: [
        "6:00 AM: Departure",
        "10:00 AM: Waterfall Visit",
        "1:00 PM: Lunch at Resort",
        "3:00 PM: Vazhachal Forest",
        "7:00 PM: Return",
      ],
      includes: ["AC Transport", "Breakfast", "Entry Fees", "Guide"],
      price: "₹3,200 per person",
    },
    {
      id: 12,
      title: "Pondicherry French Colony (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?pondicherry",
      highlights: [
        "Promenade Beach",
        "Auroville",
        "Paradise Beach",
        "French Quarter",
      ],
      includes: ["Heritage Hotel", "Breakfast", "Bicycle Tour", "Sightseeing"],
      idealFor: "Couples, Solo Travelers",
      distance: "400 km from Coimbatore",
      price: "₹14,800 per person",
    },
    {
      id: 13,
      title: "Rameshwaram Temple Tour (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?temple",
      highlights: [
        "Ramanathaswamy Temple",
        "Dhanushkodi",
        "Agnitheertham",
        "Pamban Bridge",
      ],
      includes: ["Beach Resort", "Pooja Arrangements", "AC Vehicle", "Guide"],
      idealFor: "Pilgrimage Tourists",
      distance: "450 km from Coimbatore",
      price: "₹12,000 per person",
    },
    {
      id: 14,
      title: "Kanyakumari Sunset Package (2N/3D)",
      image: "https://source.unsplash.com/random/600x400/?kanyakumari",
      highlights: [
        "Vivekananda Rock",
        "Sunrise Point",
        "Thiruvalluvar Statue",
        "Mathur Aqueduct",
      ],
      includes: ["Sea View Hotel", "Breakfast", "Ferry Tickets", "Guide"],
      idealFor: "Families, Photographers",
      distance: "500 km from Coimbatore",
      price: "₹13,500 per person",
    },
    {
      id: 15,
      title: "Kovalam Beach Relaxation (3N/4D)",
      image: "https://source.unsplash.com/random/600x400/?beach",
      highlights: [
        "Lighthouse Beach",
        "Ayurveda Massage",
        "Kovalam Surfing",
        "Local Cuisine",
      ],
      includes: ["Beach Resort", "All Meals", "Spa Session", "Sightseeing"],
      idealFor: "Couples, Honeymooners",
      distance: "350 km from Coimbatore",
      price: "₹21,000 per couple",
    },
  ];

  return (
    <Container className="py-5 tour-packages">
      <h2 className="text-center mb-5 package-header pt-5">
        Explore Our Tour Packages
      </h2>

      <Row className="g-4">
        {packages.map((pkg) => (
          <Col key={pkg.id} xs={12} sm={6} lg={4} xl={3}>
            <Card className="h-100 shadow-sm package-card">
              <Card.Img
                variant="top"
                src={pkg.image}
                alt={pkg.title}
                className="package-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="package-title">{pkg.title}</Card.Title>

                {pkg.highlights && (
                  <div className="mb-3">
                    <h6 className="package-subtitle">
                      <FaHiking className="me-2" /> Highlights
                    </h6>
                    <ul className="package-features">
                      {pkg.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.itinerary && (
                  <div className="mb-3">
                    <h6 className="package-subtitle">
                      <FaClock className="me-2" /> Itinerary
                    </h6>
                    <ul className="package-features">
                      {pkg.itinerary.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                      {pkg.itinerary.length > 3 && (
                        <li className="text-primary">
                          + {pkg.itinerary.length - 3} more activities
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="mb-3">
                  <h6 className="package-subtitle">
                    <FaHotel className="me-2" /> Includes
                  </h6>
                  <ul className="package-features">
                    {pkg.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  {pkg.idealFor && (
                    <p className="package-info">
                      <strong>Ideal for:</strong> {pkg.idealFor}
                    </p>
                  )}

                  {pkg.distance && (
                    <p className="package-info">
                      <FaMapMarkerAlt className="me-2" />
                      <strong>Distance:</strong> {pkg.distance}
                    </p>
                  )}

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5 className="package-price mb-0">{pkg.price}</h5>
                    <Button
                      variant="primary"
                      className="book-btn"
                      onClick={() => handleWhatsAppClick(pkg.title, pkg.price)}
                    >
                      <FaWhatsapp className="me-2" /> Book Now
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Enhanced Contact Section */}
      <section className="contact-section mt-5 p-4 p-md-5">
        <h3 className="text-center mb-4">Ready to Book Your Adventure?</h3>
        <Row className="g-4">
          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon phone-icon">
                <FaPhone size={20} />
              </div>
              <div className="contact-info">
                <h5>Call Us</h5>
                <a href="tel:+919003414107">
                  <FaPhone className="me-2" /> +91 90034 14107
                </a>
                <p className="small mt-2">
                  <FaClock className="me-2" />
                  Available 24/7
                </p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp size={20} />
              </div>
              <div className="contact-info">
                <h5>WhatsApp</h5>
                <a href="https://wa.me/919003414107">
                  <FaWhatsapp className="me-2" /> Chat Now
                </a>
                <p className="small mt-2">
                  <FaRocket className="me-2" />
                  Instant Response
                </p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon location-icon">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="contact-info">
                <h5>Visit Us</h5>
                <p>
                  <FaMapMarkerAlt className="me-2" />
                  123 Travel Street, Coimbatore
                </p>
                <p className="small mt-2">
                  <FaClock className="me-2" />
                  Open 9AM-7PM
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Additional Contact Methods */}
        <Row className="g-4 mt-3">
          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon home-icon">
                <FaHome size={20} />
              </div>
              <div className="contact-info">
                <h5>Home Pickup</h5>
                <a href="tel:+919003414107">
                  <FaPhone className="me-2" /> Schedule Pickup
                </a>
                <p className="small mt-2">
                  <FaCar className="me-2" />
                  Available in select cities
                </p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon email-icon">
                <FaEnvelope size={20} />
              </div>
              <div className="contact-info">
                <h5>Email Us</h5>
                <a href="mailto:info@traveladventures.com">
                  <FaEnvelope className="me-2" /> info@traveladventures.com
                </a>
                <p className="small mt-2">
                  <FaReply className="me-2" />
                  Response within 24 hours
                </p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="contact-method">
              <div className="contact-icon calendar-icon">
                <FaCalendarAlt size={20} />
              </div>
              <div className="contact-info">
                <h5>Book Appointment</h5>
                <a href="#booking-form">
                  <FaCalendarAlt className="me-2" /> Schedule Consultation
                </a>
                <p className="small mt-2">
                  <FaUserTie className="me-2" />
                  Meet our travel experts
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default TourPackages;
