import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Award, Users, TrendingUp } from "lucide-react";

const HomePage = () => {
  /* ----------------------------------------------------
     SLIDESHOW IMAGES
  ---------------------------------------------------- */
  const images = [
    "/AssetsMomosAdda/slide1_4K.png",
    "/AssetsMomosAdda/PNGSLIDE2.png",
    "/AssetsMomosAdda/3RDSLIDE.png",
    "/AssetsMomosAdda/4THSLIDE.png",
    "/AssetsMomosAdda/5TH.png",
  ];

  /* ----------------------------------------------------
     SLIDER SETTINGS
  ---------------------------------------------------- */
 const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,          // 🔥 Auto sliding enabled
  autoplaySpeed: 2000,     // 🔥 Slide every 3 seconds
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  pauseOnHover: false,     // 🔥 Do NOT pause when mouse moves over
  pauseOnFocus: false,
  swipeToSlide: true,
  cssEase: "ease-in-out",
};

const Slideshow = () => (
  <div style={{ width: "100%", overflow: "hidden", marginTop: "80px" }}>
    <Slider {...sliderSettings}>
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "520px",
            background: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={src}
            alt={`slide-${i}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Slider>
  </div>
);
  return (
    <div data-testid="home-page">
      {/* CLEANED — ONLY ONE SLIDER */}
      <Slideshow />

      {/* ----------------------------------------------------
         WHY CHOOSE US SECTION
      ---------------------------------------------------- */}
      <section data-testid="why-choose-us" style={sectionStyle}>
        <h2 style={headingStyle}>Why Choose Us?</h2>
        <div style={cardContainer}>
          <FeatureCard
            icon={<Award size={40} color="#ff4d4d" />}
            title="Quality Food"
            description="Best momo varieties made with fresh ingredients."
          />
          <FeatureCard
            icon={<Users size={40} color="#ff4d4d" />}
            title="Customer Satisfaction"
            description="Your happiness is our top priority."
          />
          <FeatureCard
            icon={<TrendingUp size={40} color="#ff4d4d" />}
            title="Affordable Prices"
            description="Enjoy delicious momos at great prices!"
          />
        </div>
      </section>

      {/* ----------------------------------------------------
         CALL TO ACTION SECTION
      ---------------------------------------------------- */}
      <section data-testid="cta-section" style={ctaSectionStyle}>
        <h2 style={ctaHeading}>Hungry Yet?</h2>
        <p style={ctaText}>Explore our delicious momo collection now.</p>
        <Link to="/menu" data-testid="view-menu-btn" style={ctaButton}>
          View Menu
        </Link>
      </section>
    </div>
  );
};

/* ----------------------------------------------------
   FEATURE CARD COMPONENT
---------------------------------------------------- */
const FeatureCard = ({ icon, title, description }) => (
  <div style={cardStyle}>
    {icon}
    <h3 style={cardTitle}>{title}</h3>
    <p style={cardDesc}>{description}</p>
  </div>
);

/* ----------------------------------------------------
   STYLES
---------------------------------------------------- */
const sectionStyle = {
  padding: "50px 20px",
  textAlign: "center",
  backgroundColor: "#fff",
};

const headingStyle = {
  fontSize: "32px",
  marginBottom: "30px",
  fontWeight: "bold",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const cardStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const cardTitle = {
  fontSize: "22px",
  marginTop: "10px",
  fontWeight: "600",
};

const cardDesc = {
  fontSize: "16px",
  marginTop: "10px",
  color: "#555",
};

const ctaSectionStyle = {
  padding: "60px 20px",
  textAlign: "center",
  backgroundColor: " #F97316 100%",
  color: "#fff",
  marginTop: "40px",
};

const ctaHeading = {
  fontSize: "36px",
  fontWeight: "bold",
};

const ctaText = {
  fontSize: "18px",
  marginTop: "10px",
};

const ctaButton = {
  display: "inline-block",
  padding: "12px 30px",
  marginTop: "20px",
  backgroundColor: "#fff",
  color: "#ff4d4d",
  fontWeight: "bold",
  borderRadius: "30px",
  textDecoration: "none",
  fontSize: "18px",
};

export default HomePage;