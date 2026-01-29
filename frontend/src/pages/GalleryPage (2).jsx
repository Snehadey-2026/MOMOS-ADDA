import React from 'react';
import { Image, Video } from 'lucide-react';

const GalleryPage = () => {
  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/6iddl6tl_DISH50.jpg',
      title: 'Cheese Baked Paneer Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/uzufqs0r_DISH68.jpg',
      title: 'Kulladh Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/llb9cuuy_DISH62.jpg',
      title: 'Afghani Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/ruj6u69q_dish64.jpg',
      title: 'Jhol Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/3gx2l0qa_DISH27.jpg',
      title: 'Veg Steam Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/4jseq6t9_DISH1.jpg',
      title: 'Cheese Corn Peri Peri Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/pcnao1zy_DISH28.jpg',
      title: 'Grilled Sezwan Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/o3lh0bk4_DISH57.jpg',
      title: 'BBQ Momos',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_cuisine-portal-5/artifacts/dtwn2oef_DISH56.jpg',
      title: 'Tandoori Momos',
    },
  ];

  return (
    <div data-testid="gallery-page" style={{ marginTop: '80px' }}>
      {/* Hero Section */}
      <section
        data-testid="gallery-hero"
        className="gallery-hero-section"
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/GALLERY.png")',
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: 'white',
          textAlign: 'center',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="container">
          <h1
            data-testid="gallery-title"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
            }}
          >
            Gallery
          </h1>
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Feast your eyes on our delicious creations
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding" style={{ 
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 50%, #FFFFFF 100%)",
      }}>
        <div className="container">
          {/* Images Section */}
          <div style={{ marginBottom: '60px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              <Image size={32} color="#DC2626" style={{ flexShrink: 0, width: 'clamp(28px, 4vw, 32px)', height: 'clamp(28px, 4vw, 32px)' }} />
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '700',
                  margin: 0,
                }}
                className="gradient-text"
              >
                Photos
              </h2>
            </div>
            <div
              data-testid="gallery-images-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                gap: 'clamp(20px, 3vw, 24px)',
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  data-testid={`gallery-image-${index}`}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(220, 38, 38, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                     /* height: 'clamp(220px, 35vw, 280px)',*/
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                      onError={(e) => {
                        e.target.style.opacity = '0.5';
                        e.target.alt = 'Image not available';
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.03)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <h3
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 18px)',
                        fontWeight: '600',
                        color: '#1F2937',
                        textAlign: 'center',
                        wordBreak: 'break-word',
                        margin: 0,
                      }}
                    >
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Section - Placeholder */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              <Video size={32} color="#DC2626" style={{ flexShrink: 0, width: 'clamp(28px, 4vw, 32px)', height: 'clamp(28px, 4vw, 32px)' }} />
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '700',
                  margin: 0,
                }}
                className="gradient-text"
              >
                Videos
              </h2>
            </div>
            <div
              data-testid="gallery-videos-placeholder"
              className="glass-card"
              style={{
                padding: 'clamp(40px, 8vw, 60px) clamp(24px, 5vw, 40px)',
                textAlign: 'center',
              }}
            >
              <Video size={64} color="#DC2626" style={{ margin: '0 auto 24px', width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)' }} />
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(20px, 3vw, 24px)',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '12px',
                  wordBreak: 'break-word',
                }}
              >
                Coming Soon!
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  color: '#6B7280',
                  margin: 0,
                  wordBreak: 'break-word',
                }}
              >
                Exciting video content will be added here soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
