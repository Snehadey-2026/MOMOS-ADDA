// src/pages/AboutPage.jsx
import React from "react";
import { Heart, Target, Eye, Flame } from "lucide-react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div data-testid="about-page" className="about-container">
      {/* 🌄 HERO SECTION – full-screen background image + gradient + text */}
      <section className="about-hero" data-testid="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1
              data-testid="about-title"
              className="about-hero-title"
            >
              About MOMO&apos;S ADDA
            </h1>
            <p className="about-hero-subtext">
              A journey of authentic flavors, tradition, and passion for bringing
              the best Himalayan momos to your plate.
            </p>
          </div>
        </div>
      </section>

      {/* 📖 OUR STORY + IMAGE */}
      <section className="section-padding story-section">
        <div className="container story-grid">
          {/* Left: Our Story Text */}
          <div className="story-text-block">
            <h2
              data-testid="story-title"
              className="story-title gradient-text"
            >
              Our Story
            </h2>

            <p className="story-text">
              MOMO&apos;S ADDA was born from a passion to bring authentic
              Himalayan flavors to food lovers across India. Our journey began
              with a simple mission: to serve the freshest, most delicious momos
              that remind you of the mountains.
            </p>

            <p className="story-text">
              Each momo is crafted with care, using traditional recipes passed
              down through generations, combined with innovative flavors that
              appeal to modern taste buds. From steamed to fried, from classic to
              exotic – we offer a momo experience like no other.
            </p>

            <p className="story-text">
              Today, MOMO&apos;S ADDA has become a trusted name, serving
              thousands of happy customers who keep coming back for that perfect
              bite of happiness.
            </p>
          </div>

          {/* Right: Image from Assets */}
          <div className="story-image-block">
            <div className="story-image-card">
              <img
                src="/AssetsMomosAdda/TEAMMEMBER.png"
                alt="Momo's Adda Team"
                className="story-image"
                onError={(e) => {
                  e.target.src = '/AssetsMomosAdda/Combinedimage.png';
                  e.target.onerror = null;
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 👥 OUR LEADERSHIP TEAM - Horizontal Cards */}
      <section className="section-padding team-section">
        <div className="container">
          <h2
            className="section-title gradient-text"
            style={{
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Our Leadership Team
          </h2>
          
          <div className="team-grid-horizontal">
            <div className="team-member-card">
              <div className="team-member-image-wrapper">
                <img
                  src="/AssetsMomosAdda/CROPPEDISHAN.jpg"
                  alt="Ishan"
                  className="team-member-image"
                  onError={(e) => {
                    e.target.src = '/AssetsMomosAdda/ISHAN.jpg';
                    e.target.onerror = null;
                  }}
                  loading="lazy"
                />
                <div className="team-member-overlay"></div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Ishan</h3>
                <p className="team-member-designation">Founder & CEO</p>
              </div>
            </div>
            
            <div className="team-member-card">
              <div className="team-member-image-wrapper">
                <img
                  src="/AssetsMomosAdda/CROPPEDPIU.jpg"
                  alt="Piu Bhattachariya"
                  className="team-member-image"
                  onError={(e) => {
                    e.target.src = '/AssetsMomosAdda/PIU BHATTACHARIYA.jpg';
                    e.target.onerror = null;
                  }}
                  loading="lazy"
                />
                <div className="team-member-overlay"></div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Piu Bhattachariya</h3>
                <p className="team-member-designation">Co-Founder</p>
              </div>
            </div>
            
            <div className="team-member-card">
              <div className="team-member-image-wrapper">
                <img
                  src="/AssetsMomosAdda/CROPPEDSAM.jpg"
                  alt="Sam Bose"
                  className="team-member-image"
                  onError={(e) => {
                    e.target.src = '/AssetsMomosAdda/SAM BOSE.jpg';
                    e.target.onerror = null;
                  }}
                  loading="lazy"
                />
                <div className="team-member-overlay"></div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Sam Bose</h3>
                <p className="team-member-designation">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ CORE VALUES */}
      <section className="section-padding values-section">
        <div className="container">
          <h2
            data-testid="values-title"
            className="section-title gradient-text"
          >
            Our Core Values
          </h2>

          <div className="values-grid">
            <div
              data-testid="value-passion"
              className="glass-card value-card"
            >
              <div className="icon-circle">
                <Heart size={40} color="white" />
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-text">
                We pour our heart into every dish we create.
              </p>
            </div>

            <div
              data-testid="value-quality"
              className="glass-card value-card"
            >
              <div className="icon-circle">
                <Target size={40} color="white" />
              </div>
              <h3 className="value-title">Quality</h3>
              <p className="value-text">
                Only the finest ingredients make it to your plate.
              </p>
            </div>

            <div
              data-testid="value-authenticity"
              className="glass-card value-card"
            >
              <div className="icon-circle">
                <Flame size={40} color="white" />
              </div>
              <h3 className="value-title">Authenticity</h3>
              <p className="value-text">
                Traditional recipes meet modern innovation.
              </p>
            </div>

            <div
              data-testid="value-vision"
              className="glass-card value-card"
            >
              <div className="icon-circle">
                <Eye size={40} color="white" />
              </div>
              <h3 className="value-title">Vision</h3>
              <p className="value-text">
                To become India&apos;s most loved momo brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="section-padding cta-section">
        <div className="container">
          <h2
            data-testid="join-title"
            className="section-title cta-title"
          >
            Join Our Journey
          </h2>

          <p className="cta-text">
            Be part of India&apos;s fastest-growing momo brand. Explore franchise
            opportunities today!
          </p>

          <a href="/franchise" className="cta-link">
            <button
              data-testid="franchise-cta-button"
              className="cta-button"
            >
              Become a Franchise Partner
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
