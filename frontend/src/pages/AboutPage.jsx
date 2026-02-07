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
             Momo's Adda was founded in 2016 by Mr.Eshant Jhamnani (Co-Founder), his wife Mrs. Piu Bhattacharya Jhamnani (Co-Founder), and Mr. Monjoy Bose (Co-Founder).
            </p>

            <p className="story-text">
              But our story began much earlier. Since 2008, we were serving authentic Chinese cuisine under the brand name “Angel Dragon” in the mall segment. By 2010, we noticed a new trend—momos were becoming the favorite snack of youngsters and families alike. Recognizing this opportunity, we decided to experiment with a 6x6 kiosk model on High Street, bringing customers freshly prepared momos and Indo-Chinese delicacies.
            </p>

            <p className="story-text">
              We started small, investing our own funds in kiosk models, not to build a brand immediately but to listen, observe, and understand. For 2–3 years, we worked at the ground level, closely interacting with students, families, and working professionals to learn what flavors they liked, what budget suited them, and what varieties excited them the most.
            </p>

            <p className="story-text">
             As owners, we did not stay behind the counter—we stood on the roadside, spoke directly with customers, took their feedback, and prepared food according to their taste and demand. This personal connection gave us deep insights into Raipur’s food culture and helped us create dishes that felt both innovative and authentic.
             </p>

              <p className="story-text">
            Initially, we introduced 50+ varieties of momos, bringing flavors like Chilli Garlic Momos, Hot Garlic Momos, Kurkure Momos, and Smoky Momos. Over time, with the guidance of talented chefs and through extensive travel across the country, we transformed our menu into 100+ momos varieties, each inspired by regional tastes and unique flavor profiles. Alongside, we expanded into Indo-Chinese favorites like Pan-Fried Noodles, Singapore Noodles, Mexican Rice, American Chop Suey, and Thukpa varieties – a menu crafted to delight every customer segment.
            </p>
            <p className="story-text">
              The kiosk journey taught us more than business—it taught us resilience, patience, and the value of customer trust. After years of learning and refining, we opened our first full-fledged Momos Adda outlet opposite Marine Drive in Telibandha, Raipur. The overwhelming response on day one became a milestone that still inspires us.
            </p>

            <p className="story-text">
             Today, Momo's Adda has grown to multiple outlets across Raipur and Chhattisgarh. We also provide franchise opportunities, turning our loyal customers into proud entrepreneurs. From training, chefs, and staff support to operational systems, we ensure our partners succeed and thrive.
             </p>

            <p className="story-text">
              Our journey has not been without challenges. We faced failures, financial struggles, and setbacks. But every failure strengthened us, building a foundation of practical and theoretical knowledge that we now pass on to our franchise partners.
            </p>
            <p className="story-text">
               At Momo's Adda, we live by a simple belief: “We are all human beings first.”
               We treat our employees, franchise partners, and customers with equal respect and care. We value every suggestion, every piece of feedback, and we act on it—because for us, growth is always a collective journey
            </p>

            <p className="story-text">
              With this spirit, we are expanding across India and soon abroad. Our mission is to spread the love, trust, and authentic taste of Momos Adda to every corner of the world.
            </p>

            <p className="story-text">
              This website will continue to share the milestones, stories, and lessons from our journey. Stay connected with us, and be a part of the ever-growing Momo's Adda family.
            </p>
          </div>

         {/*  Right: Image from Assets
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
          </div>  */}
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
                <h3 className="team-member-name">Eshant Jhamnani</h3>
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
                    e.target.src = '/AssetsMomosAdda/PIU2.jpg';
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
