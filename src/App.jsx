import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Services from "./pages/service";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contect";
import Top10CabServices from "./pages/Top10CabServices";
import Top10TravelAgencies from "./pages/Top10TravelAgencies";
import Top10VolvoBusServices from "./pages/Top10VolvoBusServices";

import "./Styles/main.css";
import "./Styles/animation.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Show Preloader First
  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/top-10-cab-services-in-coimbatore"
              element={<Top10CabServices />}
            />

            <Route
              path="/top-10-travel-agencies-in-coimbatore"
              element={<Top10TravelAgencies />}
            />

            <Route
              path="/top-10-volvo-bus-services-in-coimbatore"
              element={<Top10VolvoBusServices />}
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
