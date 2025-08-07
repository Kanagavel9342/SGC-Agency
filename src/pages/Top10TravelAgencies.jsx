import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import "../Styles/Top10TravelAgencies.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're working to fix this issue. Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Table of contents data
export const tableOfContents = [
  {
    question: "TABLE OF CONTENTS",
    answers: [
      "Sree Ganapathy Tours and Travels",
      "Akshaya Tours and Travels",
      "Dream Holidays Coimbatore",
      "Rathimeena Holidays",
      "Grand Royal Tours",
      "Trippy Wheels",
      "Atlas Tours and Travels",
      "Coimbatore Tour World",
      "Classic Travel Service",
      "Holiday Planners Coimbatore",
    ],
  },
];

// Reusable Accordion Component
const TravelAccordion = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span>{isOpen ? <BiMinus size={24} /> : <BsPlusLg size={24} />}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          <ul className="answers-list">
            {answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Reusable Agency Item Component
const AgencyItem = ({ number, title, description }) => {
  return (
    <div className="agency-item">
      <h2>
        {number}. {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

// Main Component
const Top10TravelAgencies = () => {
  return (
    <ErrorBoundary>
      <div className="page-container">
        <Helmet>
          <title>
            Top 10 Travel Agencies in Coimbatore | Sree Ganapathy Tours
          </title>
          <meta
            name="description"
            content="Explore the top 10 travel agencies in Coimbatore for your next vacation or business trip. Sree Ganapathy Tours and Travels leads the list with excellence."
          />
          <meta name="mobile-web-app-capable" content="yes" />
        </Helmet>

        {/* Hero Banner Section - Removed image */}
        <div className="hero-banner">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Top 10 Travel Agencies in Coimbatore</h1>
              <p>Find the perfect travel partner for your next adventure</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content container">
          <p className="intro-text">
            Planning a vacation, pilgrimage, honeymoon, or business trip?
            Coimbatore is home to several reputed travel agencies that offer
            affordable, customized, and all-inclusive packages.{" "}
            <span className="highlight">
              Here's a carefully curated list of the top 10 travel agencies in
              Coimbatore — led by the trusted Sree Ganapathy Tours and Travels.
            </span>
          </p>

          {/* Table of Contents */}
          <section className="toc-section">
            {tableOfContents.map((item, index) => (
              <TravelAccordion {...item} key={index} />
            ))}
          </section>

          {/* Travel Agencies List */}
          <div className="agencies-list">
            <AgencyItem
              number={1}
              title="Sree Ganapathy Tours and Travels"
              description="Sree Ganapathy Tours and Travels is a leading travel agency in Coimbatore, known for personalized service, timely execution, and great value. They specialize in domestic and international packages, corporate bookings, honeymoon trips, and pilgrimages."
            />

            <AgencyItem
              number={2}
              title="Akshaya Tours and Travels"
              description="A trusted name in travel planning, Akshaya offers curated travel packages with special attention to customer comfort and affordability."
            />

            <AgencyItem
              number={3}
              title="Dream Holidays Coimbatore"
              description="Specializing in international tours and luxury vacations, Dream Holidays provides tailor-made itineraries with attention to detail."
            />

            <AgencyItem
              number={4}
              title="Rathimeena Holidays"
              description="Known for competitive pricing and reliable service, Rathimeena offers a wide range of domestic tour packages."
            />

            <AgencyItem
              number={5}
              title="Grand Royal Tours"
              description="With expertise in both leisure and business travel, Grand Royal provides comprehensive travel solutions."
            />

            <AgencyItem
              number={6}
              title="Trippy Wheels"
              description="A favorite among young travelers, Trippy Wheels specializes in adventure tours and group packages."
            />

            <AgencyItem
              number={7}
              title="Atlas Tours and Travels"
              description="Atlas offers a perfect blend of quality service and value-for-money packages for all travel needs."
            />

            <AgencyItem
              number={8}
              title="Coimbatore Tour World"
              description="Specializing in South India tours, this agency provides authentic local experiences and cultural immersion."
            />

            <AgencyItem
              number={9}
              title="Classic Travel Service"
              description="A veteran in the industry, Classic Travel offers reliable service with decades of experience."
            />

            <AgencyItem
              number={10}
              title="Holiday Planners Coimbatore"
              description="Known for creative itineraries and excellent customer support, they make vacation planning effortless."
            />

            {/* Conclusion */}
            <div className="conclusion">
              <h2>Conclusion:</h2>
              <p>
                No matter your travel style or destination, these top-rated
                agencies in Coimbatore offer everything from luxury escapes to
                budget getaways.{" "}
                <strong>Sree Ganapathy Tours and Travels</strong> tops the list
                for their dedication, reliability, and wide-ranging services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Top10TravelAgencies;