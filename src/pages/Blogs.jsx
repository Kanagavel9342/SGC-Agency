import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogData = [
  {
    id: 1,
    name: "Top 10 Cab Services in Coimbatore",
    text: "Here are the top 10 cab services in Coimbatore, known for their quality craftsmanship and exceptional service.",
  },
  {
    id: 2,
    name: "Top 10 Volvo Bus Services in Coimbatore",
    text: "Here are the top 10 Volvo bus services in Coimbatore renowned for their creative excellence and transformative designs.",
  },
  {
    id: 3,
    name: "Top 10 Travel Agencies in Coimbatore",
    text: "Find the best travel agencies in Coimbatore to ensure the best quality for your sports or recreational area.",
  },
];

const Blogpost = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    switch (id) {
      case 1:
        navigate("/blogs/top-10-cab-services-in-coimbatore");
        break;
      case 2:
        navigate("/blogs/top-10-volvo-bus-services-in-coimbatore");
        break;
      case 3:
        navigate("/blogs/top-10-travel-agencies-in-coimbatore");
        break;
      default:
        break;
    }
  };

  return (
    <div className="px-4 md:ml-4">
      <Helmet>
        <title>Blog Posts | Sreeganapathycaabs</title>
        <meta
          name="description"
          content="Read our blog posts to learn more about transportation services in Coimbatore."
        />
      </Helmet>
      <h1
        className="text-center font-bold py-7 md:py-5 text-3xl md:text-5xl"
        style={{ color: "orange" }}
      >
        BLOG POSTS
      </h1>
      <div className="py-10 md:py-14 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-center">
            {BlogData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white hover:bg-primary relative shadow-xl duration-300 group max-w-[350px] w-full h-[350px] md:h-[400px] flex flex-col"
              >
                <div className="h-[150px] bg-gray-200 rounded-t-2xl flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h1 className="text-xl font-bold mb-3 line-clamp-2">
                    {service.name}
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm flex-1 line-clamp-3">
                    {service.text}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-2 px-6 rounded-full mt-6 group-hover:bg-white group-hover:text-primary mx-auto"
                    onClick={() => handleReadMore(service.id)}
                  >
                    Read More
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

export default Blogpost;