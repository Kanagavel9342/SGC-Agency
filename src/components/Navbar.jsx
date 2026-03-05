import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBars, 
  FaTimes, 
  FaPhoneAlt,
  FaWhatsapp,
  FaCar,
  FaChevronDown,
  FaUser,
  FaStar,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaArrowRight,
  FaChevronRight
} from "react-icons/fa";
import { MdTravelExplore, MdLocalTaxi } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import "../Styles/navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const location = useLocation();

  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      icon: <FaUser />,
      description: "Go to homepage"
    },
    { 
      name: "Services", 
      path: "/services",
      icon: <FaStar />,
      description: "Explore our premium services",
      dropdown: [
        { name: "Airport Transfers", path: "/services#airport", icon: <FaCar />, description: "24/7 Airport Pickup & Drop" },
        { name: "Local Sightseeing", path: "/services#sightseeing", icon: <MdLocalTaxi />, description: "Explore City Attractions" },
        { name: "Outstation Trips", path: "/services#outstation", icon: <FaCar />, description: "Long Distance Travel" },
        { name: "Corporate Travel", path: "/services#corporate", icon: <FaShieldAlt />, description: "Business Transportation" },
        { name: "Wedding Services", path: "/services#wedding", icon: <FaStar />, description: "Special Event Packages" },
      ]
    },
    { 
      name: "Vehicles", 
      path: "/vehicles",
      icon: <IoCarSport />,
      description: "View our premium fleet"
    },
    { 
      name: "Blogs", 
      path: "/blogs",
      icon: <FaStar />,
      description: "Travel tips & updates"
    },
    { 
      name: "About", 
      path: "/about",
      icon: <FaShieldAlt />,
      description: "Learn about us"
    },
    { 
      name: "Contact", 
      path: "/contact",
      icon: <FaHeadset />,
      description: "Get in touch"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 10);
      if (window.innerWidth >= 1200) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919003414107", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919003414107";
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const linkVariants = {
    hover: {
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="navbar-container">
          
          {/* Logo Section with 3D Effect */}
          <motion.div 
            className="logo-container"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/" className="logo">
              <div className="logo-3d-wrapper">
                <div className="logo-3d-inner">
                  <div className="logo-front">
                    <IoCarSport className="logo-icon-main" />
                  </div>
                  <div className="logo-back">
                    <MdTravelExplore className="logo-icon-sub" />
                  </div>
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-title">Sree Ganapathy</span>
                <span className="logo-subtitle">Premium Cab Services</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Curved Elements */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="nav-item-wrapper"
                onMouseEnter={() => {
                  setActiveDropdown(link.name);
                  setHoveredLink(link.name);
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredLink(null);
                }}
              >
                <motion.div
                  variants={linkVariants}
                  whileHover="hover"
                  className="nav-item"
                >
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    <span className="nav-link-icon">{link.icon}</span>
                    <span className="nav-link-text">{link.name}</span>
                    {link.dropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="dropdown-icon" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Floating Description Tooltip */}
                  <AnimatePresence>
                    {hoveredLink === link.name && !link.dropdown && (
                      <motion.div
                        className="link-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        {link.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Curved Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div 
                      className="curved-dropdown"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="dropdown-header">
                        <span className="dropdown-header-icon">{link.icon}</span>
                        <span className="dropdown-header-title">{link.name}</span>
                        <span className="dropdown-header-badge">Popular</span>
                      </div>
                      <div className="dropdown-grid">
                        {link.dropdown.map((item, index) => (
                          <motion.div
                            key={item.name}
                            variants={dropdownItemVariants}
                          >
                            <Link 
                              to={item.path} 
                              className="curved-dropdown-item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="item-icon-wrapper">
                                {item.icon}
                              </div>
                              <div className="item-content">
                                <span className="item-title">{item.name}</span>
                                <span className="item-description">{item.description}</span>
                              </div>
                              <FaChevronRight className="item-arrow" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <div className="dropdown-footer">
                        <BsLightningCharge className="footer-icon" />
                        <span>Book any service and get 10% off</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Section - Curved Action Buttons */}
          <div className="nav-actions">
            {/* 24/7 Availability Badge */}
            <motion.div 
              className="availability-pill"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <FaClock className="pill-icon" />
              <span>24/7</span>
            </motion.div>

            {/* WhatsApp Button with Curve */}
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="curved-btn whatsapp-curve"
              onClick={handleWhatsAppClick}
              aria-label="Book on WhatsApp"
            >
              <div className="btn-glow"></div>
              <FaWhatsapp className="btn-icon" />
              <span className="btn-text">WhatsApp</span>
            </motion.button> */}

            {/* Call Button with Curve */}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919003414107"
              className="curved-btn call-curve"
              aria-label="Call us"
            >
              <div className="btn-glow"></div>
              <FaPhoneAlt className="btn-icon" />
              <div className="call-info">
                <span className="call-text">Call Now</span>
                <span className="call-number">+91 90034 14107</span>
              </div>
            </motion.a>

            {/* Mobile Menu Button with Curve */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`menu-curve-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="menu-icon-wrapper"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
              <span className="menu-text">Menu</span>
            </motion.button>
          </div>
        </div>

        {/* Curved Progress Bar */}
        <div className="nav-progress-curve">
          <motion.div 
            className="progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: scrolled ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.nav>

      {/* Curved Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <CurvedMobileMenu
            isOpen={mobileMenuOpen}
            closeMenu={() => setMobileMenuOpen(false)}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>

      {/* Overlay with Blur */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="menu-overlay-curve"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Curved Mobile Menu Component
const CurvedMobileMenu = ({ isOpen, closeMenu, navLinks }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState(null);

  const servicesDropdown = [
    { name: "Airport Transfers", path: "/services#airport", icon: <FaCar />, description: "24/7 Service" },
    { name: "Local Sightseeing", path: "/services#sightseeing", icon: <MdLocalTaxi />, description: "City Tours" },
    { name: "Outstation Trips", path: "/services#outstation", icon: <FaCar />, description: "Long Distance" },
    { name: "Corporate Travel", path: "/services#corporate", icon: <FaShieldAlt />, description: "Business" },
    { name: "Wedding Services", path: "/services#wedding", icon: <FaStar />, description: "Events" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919003414107", "_blank");
    closeMenu();
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919003414107";
    closeMenu();
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    })
  };

  return (
    <motion.div
      className="curved-mobile-menu"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Curved Header */}
      <div className="mobile-menu-header-curve">
        <div className="header-content">
          <div className="mobile-logo-curve">
            <div className="logo-3d-small">
              <IoCarSport className="logo-icon" />
            </div>
            <div className="logo-text">
              <span className="title">Sree Ganapathy</span>
              <span className="subtitle">Premium Cab Services</span>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="close-btn-curve"
            onClick={closeMenu}
          >
            <FaTimes />
          </motion.button>
        </div>
        <div className="header-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,21.25,27.93,25.6,44.24,28.45c69.76,11.83,139.19,6.92,208.52-3.91,55.27-8.63,110.48-21.1,165.84-27.23,73.46-8.13,147.16,5.22,220.48,15.69,71.62,10.22,143.52,11.86,215.09,3.6,41.12-4.74,81.94-14.05,122.41-24.93C1033.13,13.9,1117.77,5.23,1200,17.62V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Menu Content */}
      <div className="mobile-menu-content-curve">
        <div className="quick-actions">
          <motion.button
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="quick-action-btn whatsapp"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="action-icon" />
            <span>WhatsApp</span>
          </motion.button>
          <motion.button
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="quick-action-btn call"
            onClick={handleCallClick}
          >
            <FaPhoneAlt className="action-icon" />
            <span>Call Now</span>
          </motion.button>
        </div>

        <div className="nav-links-curve">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index + 2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="nav-link-curve-wrapper"
            >
              {link.name === "Services" ? (
                <div className="accordion-curve">
                  <button
                    className={`accordion-header ${expandedSection === 'services' ? 'active' : ''}`}
                    onClick={() => setExpandedSection(expandedSection === 'services' ? null : 'services')}
                  >
                    <span className="header-left">
                      <span className="header-icon">{link.icon}</span>
                      <span className="header-text">{link.name}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: expandedSection === 'services' ? 90 : 0 }}
                      className="header-arrow"
                    >
                      <FaChevronRight />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {expandedSection === 'services' && (
                      <motion.div
                        className="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {servicesDropdown.map((service, idx) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="service-item-curve"
                            onClick={closeMenu}
                          >
                            <span className="service-icon">{service.icon}</span>
                            <div className="service-info">
                              <span className="service-name">{service.name}</span>
                              <span className="service-desc">{service.description}</span>
                            </div>
                            <FaArrowRight className="service-arrow" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`nav-link-curve ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="link-left">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                  </span>
                  <span className="link-desc">{link.description}</span>
                  <FaArrowRight className="link-arrow" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer with Curved Edge */}
        <div className="mobile-menu-footer-curve">
          <div className="footer-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
              <path d="M0,0V15.81C13,21.25,27.93,25.6,44.24,28.45c69.76,11.83,139.19,6.92,208.52-3.91,55.27-8.63,110.48-21.1,165.84-27.23,73.46-8.13,147.16,5.22,220.48,15.69,71.62,10.22,143.52,11.86,215.09,3.6,41.12-4.74,81.94-14.05,122.41-24.93C1033.13,13.9,1117.77,5.23,1200,17.62V0Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="footer-content">
            <RiCustomerService2Fill className="footer-icon" />
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;