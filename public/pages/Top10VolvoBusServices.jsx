import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';
import bannerImage from '../'; 

// Banner style configuration
const bannerStyles = {
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '2rem',
  marginBottom: '2rem'
};

// Table of contents data
export const tableOfContents = [
  {
    question: "TABLE OF CONTENTS",
    answers: [
      "Sree Ganapathy Volvo Bus Services",
      "KPN Travels",
      "SRM Transports",
      "Parveen Travels",
      "ABT X Travels",
      "Vivegam Travels",
      "Royal Travels",
      "Infant Jesus Travels",
      "RKK Travels",
      "Kallada Travels"
    ],
  },
];

const Top10VolvoBusServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Top 10 Volvo Bus Services in Coimbatore | Sree Ganapathy Volvo</title>
        <meta name="description" content="Explore the best Volvo bus services in Coimbatore for comfortable and safe travel. Book with Sree Ganapathy Volvo Buses and more." />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      {/* Banner Section */}
      <div style={bannerStyles}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Top 10 Volvo Bus Services in Coimbatore</h1>
          <p className="text-xl">Luxury travel with the best operators in the region</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-justify mb-8">
          Volvo buses offer unmatched comfort, safety, and performance for long and short-distance travel. 
          Coimbatore, being a major hub for intercity transportation, is served by several reputable Volvo operators. 
          <span className="text-orange-500 font-semibold"> Here's our curated list of the best 10 Volvo bus services in the city — starting with the leading name in the market:</span>
        </p>

        {/* Table of Contents */}
        <section className="mb-12">
          {tableOfContents.map((item, index) => (
            <AccordionItem {...item} key={index} />
          ))}
        </section>

        {/* Bus Services List */}
        <div className="space-y-12">
          <ServiceItem 
            number={1}
            title="Sree Ganapathy Volvo Bus Services"
            description="Sree Ganapathy Volvo is the most preferred Volvo bus service in Coimbatore. Offering a fleet of luxury air-conditioned buses with professional drivers and punctual schedules, they ensure a relaxing and safe journey. Whether it's a business trip, vacation, or regular commute, their superior service quality makes them the top choice."
          />

          <ServiceItem 
            number={2}
            title="KPN Travels"
            description="KPN Travels has a long-standing reputation for reliability and coverage across South India. Their Volvo fleet connects Coimbatore to major cities with high standards of safety and comfort."
          />

          <ServiceItem 
            number={3}
            title="SRM Transports"
            description="Known for its punctual service and modern buses, SRM offers a premium Volvo experience with features like reclining seats, charging ports, and onboard entertainment."
          />

          <ServiceItem 
            number={4}
            title="Parveen Travels"
            description="Parveen is a popular choice for its well-maintained Volvo fleet and quality service on routes to Chennai, Bangalore, and Kerala."
          />

          <ServiceItem 
            number={5}
            title="ABT X Travels"
            description="ABT X is known for its luxurious Volvo buses and excellent service on select intercity routes, with a focus on passenger safety and comfort."
          />

          <ServiceItem 
            number={6}
            title="Vivegam Travels"
            description="Vivegam offers budget-friendly Volvo services with good connectivity and consistent customer satisfaction."
          />

          <ServiceItem 
            number={7}
            title="Royal Travels"
            description="With a wide network and reliable Volvo buses, Royal Travels is a preferred option for daily travelers and weekend getaways."
          />

          <ServiceItem 
            number={8}
            title="Infant Jesus Travels"
            description="Infant Jesus Travels provides efficient Volvo bus services to popular destinations, combining affordability with quality."
          />

          <ServiceItem 
            number={9}
            title="RKK Travels"
            description="RKK is known for offering clean and punctual Volvo buses operating mainly in Tamil Nadu and Karnataka."
          />

          <ServiceItem 
            number={10}
            title="Kallada Travels"
            description="Kallada is a leading name in interstate travel with Volvo services extending from Coimbatore to various destinations in Kerala and beyond."
          />
        </div>

        {/* Conclusion */}
        <div className="mt-12 p-6 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Conclusion:</h2>
          <p className="text-justify">
            For a seamless and luxurious travel experience, Volvo buses remain a top choice. Whether you're traveling for business or leisure, these 10 services offer trustworthy and premium options. At the top of the list, Sree Ganapathy Volvo Bus Services continues to lead with unmatched professionalism and passenger satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable Accordion Component
const AccordionItem = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-orange-600 text-white font-bold text-left"
        onClick={() => setIsOpen(!isOpen)}
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

// Reusable Service Item Component
const ServiceItem = ({ number, title, description }) => {
  return (
    <div className="border-l-4 border-orange-500 pl-6">
      <h2 className="text-2xl font-bold text-orange-600 hover:underline">
        {number}. {title}
      </h2>
      <p className="mt-2 text-justify text-gray-700">{description}</p>
    </div>
  );
};

export default Top10VolvoBusServices;