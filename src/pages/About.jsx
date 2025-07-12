import React from "react";
import {
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCar,
  FaClock,
  FaUserTie,
  FaRupeeSign,
} from "react-icons/fa";
import "../Styles/about.css";

const About = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment:
        "Excellent service! The driver was punctual and the bus was very clean.",
      date: "15 Jan 2025",
    },
    {
      id: 2,
      name: "Mohana Priya",
      rating: 4,
      comment:
        "Comfortable ride at reasonable rates. Will definitely use again.",
      date: "22 Feb 2025",
    },

    {
      id: 3,
      name: "Raja",
      rating: 5,
      comment:
        "Reliable service even during long journeys. Professional drivers.",
      date: "5 Mar 2025",
    },
  ];

  return (
    <div className="about-page-container">
      {/* Hero Banner */}
      <div className="about-hero-banner">
        <h1>About Sree Ganapathy Caabs</h1>
        <p>Your trusted travel partner since 1995</p>
      </div>

      {/* Owner Section */}
      <section className="about-owner-section">
        <div className="about-owner-grid">
          <div className="about-owner-info">
            <h2>Meet Our Founder</h2>
            <h3>Mr. Veshnu Selvaraj</h3>
            <p>
              With over 28 years of experience in the transportation industry,
              Mr. Veshnu Selvaraj founded Sree Ganapathy Caabs with a vision to
              provide reliable and comfortable transport solutions across South
              India.
            </p>
            <div className="about-owner-contact">
              <p>
                <FaPhone /> Call Us :+91 9003414107
              </p>
              <p>
                <FaEnvelope /> Email :sreeganapathycaabs@gmail.com
              </p>
            </div>
          </div>
          <div className="about-owner-image">
            <img
              src="/images/owner_img.jpg"
              alt="Owner of Sree Ganapathy Caabs"
            />
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="about-company-section">
        <h2>Our Journey</h2>
        <div className="about-company-timeline">
          <div className="about-timeline-item">
            <h3>1995</h3>
            <p>Founded in Coimbatore with a small fleet of vehicles</p>
          </div>
          <div className="about-timeline-item">
            <h3>2005</h3>
            <p>
              Expanded services to cover all major South Indian destinations
            </p>
          </div>
          <div className="about-timeline-item">
            <h3>2015</h3>
            <p>
              Celebrated 20 years of trusted service with a modernized fleet
            </p>
          </div>
          <div className="about-timeline-item">
            <h3>2023</h3>
            <p>
              Continuing to serve with well-maintained vehicles and experienced
              drivers
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services-section">
        <h2>Our Services</h2>
        <div className="about-services-grid">
          <div className="about-service-card">
            <FaCar className="about-service-icon" />
            <h3>Cars & Vans</h3>
            <p>Comfortable vehicles for small groups and families</p>
          </div>
          <div className="about-service-card">
            <FaClock className="about-service-icon" />
            <h3>AC Sleeper Buses</h3>
            <p>Overnight journeys made comfortable</p>
          </div>
          <div className="about-service-card">
            <FaUserTie className="about-service-icon" />
            <h3>Seater Buses</h3>
            <p>Economical travel for large groups</p>
          </div>
          <div className="about-service-card">
            <FaRupeeSign className="about-service-icon" />
            <h3>All Occasions</h3>
            <p>Family trips, corporate outings, pilgrimages, and tours</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="about-reviews-section">
        <h2>Customer Testimonials</h2>
        <div className="about-reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="about-review-card">
              <div className="about-review-header">
                <h3>{review.name}</h3>
                <div className="about-review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating
                          ? "about-star-filled"
                          : "about-star-empty"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="about-review-comment">"{review.comment}"</p>
              <p className="about-review-date">{review.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="about-location-section">
        <h2>Our Location</h2>
        <div className="about-map-container">
          <iframe
            title="Sree Ganapathy Caabs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789012!2d76.9897919!3d11.0475397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAyJzUxLjEiTiA3NsKwNTknMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="about-contact-info">
          <p>
            <FaMapMarkerAlt /> Coimbatore, Tamil Nadu
          </p>
          <p>
            <FaPhone /> +91 9003414107 (24/7 Support)
          </p>
          <p>
            <FaEnvelope /> Email sreeganapathycaabs@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
