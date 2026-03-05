import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../Styles/blogs.css";

const BlogData = [
  {
    id: 1,
    name: "Top 10 Cab Services in Coimbatore",
    text: "Here are the top 10 cab services in Coimbatore, known for their quality craftsmanship and exceptional service.",
    path: "/top-10-cab-services-in-coimbatore"
  },
  {
    id: 2,
    name: "Top 10 Volvo Bus Services in Coimbatore",
    text: "Here are the top 10 Volvo bus services in Coimbatore renowned for their creative excellence and transformative designs.",
    path: "/top-10-volvo-bus-services-in-coimbatore"
  },
  {
    id: 3,
    name: "Top 10 Travel Agencies in Coimbatore",
    text: "Find the best travel agencies in Coimbatore to ensure the best quality for your sports or recreational area.",
    path: "/top-10-travel-agencies-in-coimbatore"
  },
];

const Blogpost = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    navigate(path);
  };

  return (
    <div className="blogs-container px-4 md:ml-4">
      <Helmet>
        <title>Blog Posts | Sreeganapathycaabs</title>
        <meta
          name="description"
          content="Read our blog posts to learn more about transportation services in Coimbatore."
        />
      </Helmet>
      <h1 className="blogs-title">    BLOG POSTS </h1>
      <div className="blogs-content py-10 md:py-14 mb-1">
        <div className="container mx-auto ">
          <div className="blogs-grid">
            {BlogData.map((service) => (
              <div
                key={service.id}
                className="blog-card"
              >
                <div className="blog-image-container">
                  <span className="blog-image-placeholder">Blog Image</span>
                </div>
                <div className="blog-content">
                  <h1 className="blog-title">
                    {service.name}
                  </h1>
                  <p className="blog-text">
                    {service.text}
                  </p>
                  <button
                    className="blog-button"
                    onClick={() => handleReadMore(service.path)}
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