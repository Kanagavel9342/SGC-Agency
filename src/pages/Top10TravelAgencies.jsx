import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import travelBanner from '/public/images/hero.jpg'; 

// Error Boundary Component (create this in a separate file if used across multiple components)
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
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-4">We're working to fix this issue. Please try again later.</p>
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
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-6">
      <button
        className="w-full flex justify-between items-center p-4 bg-orange-600 text-white font-bold text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span>{isOpen ? <BiMinus size={24} /> : <BsPlusLg size={24} />}</span>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <ul className="list-disc pl-5 space-y-2">
            {answers.map((answer, index) => (
              <li key={index} className="text-gray-700">{answer}</li>
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
    <div className="border-l-4 border-orange-500 pl-6 mb-8">
      <h2 className="text-2xl font-bold text-orange-600 hover:underline">
        {number}. {title}
      </h2>
      <p className="mt-2 text-justify text-gray-700">{description}</p>
    </div>
  );
};

// Main Component
const Top10TravelAgencies = () => {
  return (
    <ErrorBoundary>
      <div className="bg-white min-h-screen">
        <Helmet>
          <title>Top 10 Travel Agencies in Coimbatore | Sree Ganapathy Tours</title>
          <meta
            name="description"
            content="Explore the top 10 travel agencies in Coimbatore for your next vacation or business trip. Sree Ganapathy Tours and Travels leads the list with excellence."
          />
          <meta name="mobile-web-app-capable" content="yes" />
        </Helmet>

        {/* Hero Banner Section */}
        <div className="relative">
          <img
            src={travelBanner}
            alt="Travel Agencies in Coimbatore"
            className="w-full h-64 md:h-96 object-cover"
            width={1200}
            height={600}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Top 10 Travel Agencies in Coimbatore
              </h1>
              <p className="text-lg md:text-xl">
                Find the perfect travel partner for your next adventure
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <p className="text-justify mb-8 text-lg">
            Planning a vacation, pilgrimage, honeymoon, or business trip?
            Coimbatore is home to several reputed travel agencies that offer
            affordable, customized, and all-inclusive packages.{" "}
            <span className="text-orange-500 font-medium">
              Here's a carefully curated list of the top 10 travel agencies in
              Coimbatore — led by the trusted Sree Ganapathy Tours and Travels.
            </span>
          </p>

          {/* Table of Contents */}
          <section className="mb-12">
            {tableOfContents.map((item, index) => (
              <TravelAccordion {...item} key={index} />
            ))}
          </section>

          {/* Travel Agencies List */}
          <div className="space-y-8">
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
            <div className="pt-8 mt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                Conclusion:
              </h2>
              <p className="text-justify text-lg">
                No matter your travel style or destination, these top-rated
                agencies in Coimbatore offer everything from luxury escapes to
                budget getaways. <strong>Sree Ganapathy Tours and Travels</strong>{" "}
                tops the list for their dedication, reliability, and wide-ranging
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Top10TravelAgencies;