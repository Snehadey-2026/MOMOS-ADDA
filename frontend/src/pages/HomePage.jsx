import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp } from "lucide-react";
import "./HomePage.css"; // Import CSS

const HomePage = () => {
  const slides = [
    "/AssetsMomosAdda/1.jpg",  // Fresh & Delicious
    "/AssetsMomosAdda/NEWSLIDE1.jpg",  // Authentic Momos
    "/AssetsMomosAdda/3RDSLIDE.png",   // Signature Range
    "/AssetsMomosAdda/4THSLIDE.png",   // Taste the Explosion
    "/AssetsMomosAdda/5TH.png",        // Feast of Flavors
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 400000);
    return () => clearTimeout(timer);
  }, [index, paused, slides.length]);

  const currentSlide = slides[index];

  return (
    <>
      {/* HERO SLIDESHOW */}
      <div
        className="hero-slide"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <img
          key={currentSlide}
          src={currentSlide}
          alt="Slide"
          className={`hero-image active slide-${index}`}
        />

        <button
          className="nav-arrow left"
          onClick={() =>
            setIndex((index - 1 + slides.length) % slides.length)
          }
        >
          ❮
        </button>

        <button
          className="nav-arrow right"
          onClick={() => setIndex((index + 1) % slides.length)}
        >
          ❯
        </button>
      </div>

      {/* DOTS */}
      <div className="dots-wrapper">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <FeatureCard
            icon={<Award size={40} />}
            title="Quality Food"
            description="Best momo varieties made fresh."
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Customer Satisfaction"
            description="We care about your happiness."
          />
          <FeatureCard
            icon={<TrendingUp size={40} />}
            title="Affordable Prices"
            description="Delicious at best prices!"
          />
          <FeatureCard
            icon={<Award size={40} />}
            title="Hygienic Kitchen"
            description="Clean & safe food preparation."
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Fast Delivery"
            description="Hot momos delivered fast!"
          />
          <FeatureCard
            icon={<TrendingUp size={40} />}
            title="Taste Guarantee"
            description="Love it or refund!"
          />
        </div>
      </section>

      {/* CTA GRADIENT SECTION (restored) */}
      <section className="cta-section">
        <h2>Hungry Yet?</h2>
        <p>Explore our delicious momo collection now.</p>
        <Link to="/menu" className="cta-btn">
          View Menu 🍽
        </Link>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default HomePage;
