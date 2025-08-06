import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../Styles/top10cabservices.css";

// Table of Contents data
export const table = [
  {
    question: "TABLE OF CONTENTS",
    answers: [
      "Sree Ganapathy Cabs",
      "Red Taxi",
      "Go Taxi",
      "Fasttrack Taxi",
      "TaxiGo",
      "Friends Track Call Taxi",
      "Cabs India",
      "Namma Auto",
      "Ezi Drive",
      "City Taxi Coimbatore",
    ],
  },
];

// Related blog posts data
const relatedBlogs = [
  {
    id: 1,
    title: "Top 10 Volvo Bus Services in Coimbatore",
    excerpt:
      "Discover the best luxury bus services for comfortable travel from Coimbatore.",
    path: "/pages/top-10-volvo-bus-services-in-coimbatore",
  },
  {
    id: 2,
    title: "Top 10 Travel Agencies in Coimbatore",
    excerpt:
      "Find reliable travel agencies for your next vacation or business trip.",
    path: "/blogs/top-10-travel-agencies-in-coimbatore",
  },
  {
    id: 3,
    title: "Best Places to Visit Near Coimbatore",
    excerpt:
      "Explore amazing weekend getaways within driving distance from Coimbatore.",
    path: "/blogs/best-places-to-visit-near-coimbatore",
  },
];

const Top10CabServices = () => {
  const navigate = useNavigate();

  const handleBlogNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Top 10 Cab Services in Coimbatore | Sree Ganapathy Cabs</title>
        <meta
          name="description"
          content="Explore the best cab services in Coimbatore for safe, reliable, and comfortable travel. Book Sree Ganapathy Cabs and more."
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative bg-gray-800 text-white pt-3">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 pt-5">
              Top 10 Cab Services in Coimbatore
            </h1>
            <p className="text-lg md:text-xl">
              Discover the most reliable and comfortable cab services for your
              travel needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            Whether you're commuting within the city or heading out on a long
            trip, Coimbatore offers a variety of reliable cab services. From
            24/7 availability to safety and comfort, these companies ensure your
            travel experience is seamless. Discover the top 10 cab service
            providers in Coimbatore that you can trust for both personal and
            business travel needs.{" "}
            <span className="text-orange-500 font-medium">
              Here's your comprehensive list featuring the most trusted names in
              the cab industry of Coimbatore:
            </span>
          </p>

          {/* Table of Contents */}
          <section className="mb-12">
            {table.map((item, index) => (
              <SingleQuestion2 {...item} key={index} />
            ))}
          </section>

          {/* Cab Services List */}
          <div className="space-y-10 mb-16">
            {[
              {
                id: 1,
                name: "Sree Ganapathy Cabs",
                description:
                  "Sree Ganapathy Cabs is Coimbatore's most trusted and top-rated cab service provider. Known for their punctuality, customer-centric service, and well-maintained vehicles, they offer everything from airport transfers to outstation trips at competitive rates. With a strong reputation for professionalism and safety, Sree Ganapathy Cabs is the go-to choice for residents and visitors alike.",
              },
              {
                id: 2,
                name: "Red Taxi",
                description:
                  "Red Taxi is a popular name in Coimbatore, offering AC and Non-AC taxis with transparent fares. Their well-trained drivers and easy-to-use booking app make them a favorite among daily commuters and travelers.",
              },
              {
                id: 3,
                name: "Go Taxi",
                description:
                  "Go Taxi is known for providing reliable 24/7 cab services with affordable pricing in and around Coimbatore. Their service includes airport pickups, drops, and outstation travel.",
              },
              {
                id: 4,
                name: "Fasttrack Taxi",
                description:
                  "Fasttrack is a well-established cab aggregator with a wide fleet in Coimbatore. From economy rides to luxury sedans, they provide a variety of travel options to suit every customer.",
              },
              {
                id: 5,
                name: "TaxiGo",
                description:
                  "TaxiGo offers professional taxi services with GPS-enabled vehicles, experienced drivers, and 24/7 support, ensuring comfort and safety on every ride.",
              },
              {
                id: 6,
                name: "Friends Track Call Taxi",
                description:
                  "A local favorite for fast and friendly service, Friends Track Call Taxi offers hassle-free travel experiences at economical prices.",
              },
              {
                id: 7,
                name: "Cabs India",
                description:
                  "Cabs India is known for their clean fleet and courteous drivers. Their booking is quick and their pricing is transparent, making them a reliable travel partner in Coimbatore.",
              },
              {
                id: 8,
                name: "Namma Auto",
                description:
                  "While focused mainly on autos, Namma Auto has become a trusted transport partner in Coimbatore for quick and low-cost city commuting.",
              },
              {
                id: 9,
                name: "Ezi Drive",
                description:
                  "Ezi Drive provides outstation cabs and hourly packages for local usage. Their well-trained drivers ensure safe and relaxed trips.",
              },
              {
                id: 10,
                name: "City Taxi Coimbatore",
                description:
                  "City Taxi Coimbatore offers budget-friendly and reliable cab services for city rides and outstation journeys with round-the-clock availability.",
              },
            ].map((service) => (
              <div key={service.id} className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                  {service.id}. {service.name}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              Conclusion:
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Choosing the right cab service in Coimbatore can significantly
              improve your travel comfort and efficiency. Whether it's a quick
              city ride, an airport drop, or a long-distance journey, these top
              10 cab companies deliver trustworthy and safe transportation. Sree
              Ganapathy Cabs leads the way with unmatched service, making your
              commute stress-free and enjoyable.
            </p>
          </div>
        </div>

        {/* Related Blogs Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleBlogNavigation(blog.path)}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button className="text-orange-500 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Table of Contents Component
const SingleQuestion2 = ({ question, answers }) => {
  const [showAnswer, setShowAnswer] = useState(true);

  return (
    <div className="border border-gray-300 rounded-lg bg-orange-500 shadow-md">
      <article
        className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="text-lg md:text-xl font-bold text-white">{question}</h2>
        <button
          className="focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? (
            <BiMinus className="text-white text-xl" />
          ) : (
            <BsPlusLg className="text-white text-xl" />
          )}
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

export default Top10CabServices;
