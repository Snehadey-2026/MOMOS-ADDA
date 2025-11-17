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
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/GALLERY.png")',
            width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
              objectFit: "cover",
          color: 'white',
          textAlign: 'center',
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
      <section className="section-padding">
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
              <Image size={32} color="#DC2626" />
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '700',
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
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
                      height: '280px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <h3
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#1F2937',
                        textAlign: 'center',
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
              <Video size={32} color="#DC2626" />
              <h2
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '700',
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
                padding: '60px 40px',
                textAlign: 'center',
              }}
            >
              <Video size={64} color="#DC2626" style={{ margin: '0 auto 24px' }} />
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '12px',
                }}
              >
                Coming Soon!
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: '#6B7280',
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
