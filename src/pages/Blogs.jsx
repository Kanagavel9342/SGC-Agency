import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaClock,
  FaArrowRight,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaSearch,
  FaFilter,
  FaTimes,
  FaChevronRight,
  FaEye,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaTag,
  FaNewspaper,
  FaBlog,
  FaRss
} from "react-icons/fa";
import "../Styles/blogs.css";

// Import images
import cabServicesImg from "../assets/mercedes-front.jpg";
import volvoBusImg from "../../public/images/vehicles/volvo-front.JPG";
import travelAgenciesImg from "../assets/hero.jpg";

const BlogData = [
  {
    id: 1,
    name: "Top 10 Cab Services in Coimbatore",
    text: "Here are the top 10 cab services in Coimbatore, known for their quality craftsmanship and exceptional service. Discover the best options for your travel needs with our comprehensive guide.",
    path: "/top-10-cab-services-in-coimbatore",
    image: cabServicesImg,
    category: "Cab Services",
    author: "Sree Ganapathy Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    views: 1250,
    likes: 89,
    comments: 24,
    tags: ["Coimbatore", "Cab Service", "Transportation"],
    featured: true
  },
  {
    id: 2,
    name: "Top 10 Volvo Bus Services in Coimbatore",
    text: "Here are the top 10 Volvo bus services in Coimbatore renowned for their creative excellence and transformative designs. Experience luxury travel with our recommended bus services.",
    path: "/top-10-volvo-bus-services-in-coimbatore",
    image: volvoBusImg,
    category: "Bus Services",
    author: "Sree Ganapathy Team",
    date: "March 10, 2024",
    readTime: "6 min read",
    views: 980,
    likes: 67,
    comments: 18,
    tags: ["Volvo", "Bus Service", "Luxury Travel"],
    featured: true
  },
  {
    id: 3,
    name: "Top 10 Travel Agencies in Coimbatore",
    text: "Find the best travel agencies in Coimbatore to ensure the best quality for your sports or recreational area. Our curated list helps you choose the perfect travel partner.",
    path: "/top-10-travel-agencies-in-coimbatore",
    image: travelAgenciesImg,
    category: "Travel Agencies",
    author: "Sree Ganapathy Team",
    date: "March 5, 2024",
    readTime: "4 min read",
    views: 820,
    likes: 45,
    comments: 12,
    tags: ["Travel Agencies", "Tour Packages", "Holiday"],
    featured: false
  },
  // Adding more sample blog posts for richer content
  {
    id: 4,
    name: "Complete Guide to Airport Transfers",
    text: "Everything you need to know about airport transfers in Coimbatore. Tips for hassle-free travel, booking guides, and what to expect.",
    path: "/airport-transfer-guide",
    image: cabServicesImg,
    category: "Travel Tips",
    author: "Sree Ganapathy Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    views: 650,
    likes: 34,
    comments: 8,
    tags: ["Airport", "Travel Tips", "Guide"],
    featured: false
  },
  {
    id: 5,
    name: "Weekend Getaways from Coimbatore",
    text: "Discover beautiful weekend destinations within 200km of Coimbatore. Perfect for family trips, romantic getaways, and group outings.",
    path: "/weekend-getaways-coimbatore",
    image: travelAgenciesImg,
    category: "Destinations",
    author: "Sree Ganapathy Team",
    date: "February 20, 2024",
    readTime: "8 min read",
    views: 1100,
    likes: 92,
    comments: 31,
    tags: ["Weekend", "Travel", "Destinations"],
    featured: true
  }
];

const Blogpost = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(BlogData.map(post => post.category))];

  // Filter and sort posts
  const filteredPosts = BlogData
    .filter(post => {
      const matchesSearch = post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "latest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "liked") return b.likes - a.likes;
      return 0;
    });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleReadMore = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const toggleBookmark = (postId) => {
    setBookmarkedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const toggleLike = (postId) => {
    setLikedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const formatNumber = (num) => {
    if (num >= 1000) return (num/1000).toFixed(1) + 'k';
    return num;
  };

  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog - Sree Ganapathy Cabs | Travel Tips & Updates</title>
        <meta
          name="description"
          content="Read our latest blog posts about cab services, travel tips, and transportation updates in Coimbatore. Stay informed with Sree Ganapathy Cabs."
        />
        <meta name="keywords" content="cab service blog, travel tips, Coimbatore transport, bus services, travel agencies" />
        <link rel="canonical" href="https://sreeganapathycabs.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="blog-hero-content"
            >
              <span className="blog-hero-badge">
                <FaNewspaper /> Our Blog
              </span>
              <h1>Travel Insights & Updates</h1>
              <p>Discover the latest travel tips, guides, and news from Sree Ganapathy Cabs</p>
              
              {/* Search Bar */}
              <div className="blog-search-wrapper">
                <div className="blog-search-box">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="blog-search-input"
                  />
                  {searchTerm && (
                    <button
                      className="search-clear"
                      onClick={() => setSearchTerm("")}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="blog-filter-bar">
            <div className="filter-left">
              <button
                className={`filter-toggle ${showFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter /> Filters
              </button>
              
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "All Posts" : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-right">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="liked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && isMobile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mobile-filters"
              >
                <div className="mobile-filter-header">
                  <h4>Filter Posts</h4>
                  <button onClick={() => setShowFilters(false)}>
                    <FaTimes />
                  </button>
                </div>
                <div className="mobile-filter-content">
                  <h5>Categories</h5>
                  <div className="mobile-categories">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`mobile-category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowFilters(false);
                        }}
                      >
                        {category === "all" ? "All Posts" : category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          <div className="blog-results">
            <p>{filteredPosts.length} articles found</p>
            <div className="blog-rss">
              <FaRss /> Subscribe to RSS
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && searchTerm === "" && selectedCategory === "all" && (
            <div className="featured-posts-section">
              <h2 className="section-subtitle">Featured Articles</h2>
              <div className="featured-grid">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="featured-post-card"
                  >
                    <div className="featured-post-image">
                      <img src={post.image} alt={post.name} loading="lazy" />
                      <span className="featured-badge">Featured</span>
                    </div>
                    <div className="featured-post-content">
                      <div className="post-meta">
                        <span><FaCalendarAlt /> {post.date}</span>
                        <span><FaUserAlt /> {post.author}</span>
                        <span><FaClock /> {post.readTime}</span>
                      </div>
                      <h3>{post.name}</h3>
                      <p>{post.text.substring(0, 120)}...</p>
                      <div className="post-tags ">
                        {post.tags.map(tag => (
                          <span key={tag} className="post-tag ">{tag}</span>
                        ))}
                      </div>
                      <button
                        className="read-more-btn"
                        onClick={() => handleReadMore(post.path)}
                      >
                        Read Full Article <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="posts-grid">
            {regularPosts.slice(0, visiblePosts).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blog-post-card"
              >
                <div className="post-card-image">
                  <img src={post.image} alt={post.name} loading="lazy" />
                  <span className="post-category">{post.category}</span>
                  
                  <div className="post-actions">
                    <button
                      className={`action-btn ${likedPosts.includes(post.id) ? 'active' : ''}`}
                      onClick={() => toggleLike(post.id)}
                    >
                      {likedPosts.includes(post.id) ? <FaHeart /> : <FaRegHeart />}
                      <span className="action-count">{formatNumber(post.likes + (likedPosts.includes(post.id) ? 1 : 0))}</span>
                    </button>
                    <button
                      className={`action-btn ${bookmarkedPosts.includes(post.id) ? 'active' : ''}`}
                      onClick={() => toggleBookmark(post.id)}
                    >
                      {bookmarkedPosts.includes(post.id) ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                    <button className="action-btn">
                      <FaShare />
                    </button>
                  </div>
                </div>

                <div className="post-card-content">
                  <div className="post-meta">
                    <span><FaCalendarAlt /> {post.date}</span>
                    <span><FaClock /> {post.readTime}</span>
                    <span><FaEye /> {formatNumber(post.views)}</span>
                  </div>

                  <h3 className="post-title">{post.name}</h3>
                  <p className="post-excerpt">{post.text}</p>

                  <div className="post-footer">
                    <div className="post-author">
                      <FaUserAlt />
                      <span>{post.author}</span>
                    </div>
                    <button
                      className="read-link"
                      onClick={() => handleReadMore(post.path)}
                    >
                      Read More <FaChevronRight />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < regularPosts.length && (
            <div className="load-more-container">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="load-more-btn"
                onClick={loadMore}
              >
                Load More Articles
              </motion.button>
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <FaBlog className="no-results-icon" />
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
              <button
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSortBy("latest");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest travel tips and updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogpost;