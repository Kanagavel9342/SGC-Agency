import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
// import travelBanner from '../assets/images/travel-banner.jpg';

export const table = [
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

const Top10TravelAgencies = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Top 10 Travel Agencies in Coimbatore | Sree Ganapathy Tours
        </title>
        <meta
          name="description"
          content="Explore the top 10 travel agencies in Coimbatore for your next vacation or business trip. Sree Ganapathy Tours and Travels leads the list with excellence."
        />
      </Helmet>

      {/* Hero Banner Section */}
      <div className="relative">
        <img
          src={travelBanner}
          alt="Travel Agencies in Coimbatore"
          className="w-full h-64 md:h-96 object-cover"
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <p className="text-justify mb-8">
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
          {table.map((item, index) => (
            <SingleQuestion2 {...item} key={index} />
          ))}
        </section>

        {/* Travel Agencies List */}
        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              1. Sree Ganapathy Tours and Travels
            </h2>
            <p className="text-justify">
              Sree Ganapathy Tours and Travels is a leading travel agency in
              Coimbatore, known for personalized service, timely execution, and
              great value. They specialize in domestic and international
              packages, corporate bookings, honeymoon trips, and pilgrimages.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              2. Akshaya Tours and Travels
            </h2>
            <p className="text-justify">
              A trusted name in travel planning, Akshaya offers curated travel
              packages with special attention to customer comfort and
              affordability.
            </p>
          </div>

          {/* Continue with other agencies in the same pattern */}

          <div className="pt-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Conclusion:
            </h2>
            <p className="text-justify">
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
  );
};

const SingleQuestion2 = ({ question, answers }) => {
  const [showAnswer, setShowAnswer] = useState(true);

  return (
    <div className="border border-gray-300 rounded-lg bg-orange-500 shadow-md mb-6">
      <article
        className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="text-lg md:text-xl font-bold text-white">{question}</h2>
        <button
          className="text-white focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? <BiMinus size={24} /> : <BsPlusLg size={24} />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-gray-300 p-4 lg:p-6 bg-orange-50">
          <ul className="space-y-2">
            {answers.map((answer, index) => (
              <li
                key={index}
                className="text-gray-800 pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-orange-500 before:rounded-full"
              >
                {answer}
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};

export default Top10TravelAgencies;
