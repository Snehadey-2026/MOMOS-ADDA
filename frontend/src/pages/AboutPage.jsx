import React from 'react';
import { Heart, Target, Eye, Flame } from 'lucide-react';

const AboutPage = () => {
  return (
    <div data-testid="about-page" style={{ marginTop: '80px' }}>
      {/* Hero Section */}
      <section
        data-testid="about-hero"
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/ABOUTUS.png")',
         width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
        
      >
        <div className="container">
          <h1
            data-testid="about-title"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
            }}
          >
            About MOMO'S ADDA
          </h1>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(20px, 2vw, 20px)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '2',
            }}
          >
            A journey of authentic flavors, tradition, and passion for bringing the best Himalayan momos to your plate
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                data-testid="story-title"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: '700',
                  marginBottom: '24px',
                }}
                className="gradient-text"
              >
                Our Story
              </h2>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}
              >
                MOMO'S ADDA was born from a passion to bring authentic Himalayan flavors to food lovers across India.
                Our journey began with a simple mission: to serve the freshest, most delicious momos that remind you
                of the mountains.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}
              >
                Each momo is crafted with care, using traditional recipes passed down through generations, combined
                with innovative flavors that appeal to modern taste buds. From steamed to fried, from classic to
                exotic - we offer a momo experience like no other.
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.8',
                }}
              >
                Today, MOMO'S ADDA has become a trusted name, serving thousands of happy customers who keep coming
                back for that perfect bite of happiness.
              </p>
            </div>
            <div>
              <img
                src="../public/AssetsMomosAdda/combinedimage.png"
                alt="Momo's Adda Logo"
                data-testid="about-logo-image"
                style={{
                  width: '200%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(220, 38, 38, 0.2)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ background: '#FAFAFA' }}>
        <div className="container">
          <h2
            data-testid="values-title"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
            }}
            className="gradient-text"
          >
            Our Core Values
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
            }}
          >
            <div
              data-testid="value-passion"
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Heart size={40} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#1F2937',
                }}
              >
                Passion
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                }}
              >
                We pour our heart into every dish we create
              </p>
            </div>

            <div
              data-testid="value-quality"
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Target size={40} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#1F2937',
                }}
              >
                Quality
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                }}
              >
                Only the finest ingredients make it to your plate
              </p>
            </div>

            <div
              data-testid="value-authenticity"
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Flame size={40} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#1F2937',
                }}
              >
                Authenticity
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                }}
              >
                Traditional recipes meet modern innovation
              </p>
            </div>

            <div
              data-testid="value-vision"
              className="glass-card"
              style={{
                padding: '40px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Eye size={40} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#1F2937',
                }}
              >
                Vision
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                }}
              >
                To become India's most loved momo brand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, #DC2626 0%, #F97316 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            data-testid="join-title"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              marginBottom: '24px',
            }}
          >
            Join Our Journey
          </h2>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px',
            }}
          >
            Be part of India's fastest-growing momo brand. Explore franchise opportunities today!
          </p>
          <a href="/franchise" style={{ textDecoration: 'none' }}>
            <button
              data-testid="franchise-cta-button"
              style={{
                background: 'white',
                color: '#DC2626',
                padding: '14px 32px',
                borderRadius: '50px',
                border: 'none',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
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
