import React from 'react';
import "../Styles/packages.css";

const packages = [
  {
    title: "Coimbatore to Ooty",
    duration: "2N/3D",
    highlights: ["Botanical Garden", "Doddabetta Peak", "Ooty Lake", "Coonoor Tea Gardens", "Sim’s Park"],
    includes: ["Hotel Stay", "Sightseeing", "Any vehicle of your choice"],
    idealFor: "Family & Couple Trip",
    distance: "85 km from Coimbatore"
  },
  {
    title: "Coimbatore to Kodaikanal",
    duration: "2N/3D",
    highlights: ["Coaker’s Walk", "Kodai Lake", "Pine Forest", "Silver Cascade Falls"],
    includes: ["AC Vehicle", "Hotel", "Breakfast", "Local Sightseeing"],
    idealFor: "Honeymooners, Family Trip, Nature Lovers",
    distance: "175 km from Coimbatore"
  },
  {
    title: "Coimbatore to Valparai",
    duration: "2N/3D",
    highlights: ["Tea Estates", "Aliyar Dam", "Monkey Falls", "Loam’s View Point"],
    includes: ["Eco Stay", "Forest Entry", "Jeep Safari"],
    idealFor: "Nature & Wildlife Enthusiasts",
    distance: "110 km from Coimbatore"
  },
  {
    title: "Coimbatore to Isha Yoga Center",
    duration: "1 Day",
    highlights: [
      "Adiyogi Shiva Statue (112 ft)",
      "Dhyanalinga (Silent Meditation Space)",
      "Linga Bhairavi Temple",
      "Nadivijnana Wellness Walkway"
    ],
    includes: [
      "AC Cab / Tempo Traveller (Pickup & Drop from Coimbatore)",
      "Guided Visit (Optional)",
      "Refreshments & Water",
      "Entry Assistance",
      "2 Hours Free Time for Meditation"
    ],
    idealFor: "Spiritual Seekers",
    distance: "Local - Coimbatore"
  }
];

const TourPackages = () => {
  return (
    <div className="container">
      <h1 className="title">Coimbatore Travel Packages</h1>
      <div className="cards">
        {packages.map((pkg, index) => (
          <div className="card" key={index}>
            <h2>{pkg.title}</h2>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Distance:</strong> {pkg.distance}</p>
            <p><strong>Ideal for:</strong> {pkg.idealFor}</p>
            <p><strong>Highlights:</strong></p>
            <ul>{pkg.highlights.map((item, i) => <li key={i}>{item}</li>)}</ul>
            <p><strong>Includes:</strong></p>
            <ul>{pkg.includes.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
