import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import "../Styles/navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <MdTravelExplore className="logo-icon" />
            <span>SreeGanapathyCaabs</span>
          </Link>

          <div className="desktop-links">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={link.path} className="nav-link">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="nav-contact">
            <FaPhoneAlt className="phone-icon" />
            <span>+91 9003414107</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
