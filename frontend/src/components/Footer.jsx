import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="main-footer"
      style={{
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 60px) clamp(16px, 4vw, 20px) 20px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(24px, 5vw, 40px)',
            marginBottom: '40px',
          }}
        >
          {/* Brand Section */}
          <div data-testid="footer-brand-section">
            <img
              src="/AssetsMomosAdda/finallogo.jpg"
              alt="Momo's Adda"
              data-testid="footer-logo"
              style={{ 
                height: 'clamp(45px, 8vw, 60px)', 
                width: 'auto',
                marginBottom: '16px',
                objectFit: 'contain'
              }}
            />
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: '800',
                marginBottom: '12px',
                color: '#F97316',
              }}
            >
              MOMO'S ADDA
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px, 1.8vw, 14px)',
                color: '#D1D5DB',
                lineHeight: '1.6',
                wordBreak: 'break-word',
              }}
            >
              Fresh & Delicious Himalayan Flavors. Experience authentic taste that brings people together.
            </p>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F97316',
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link
                to="/"
                data-testid="footer-link-home"
                style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
              >
                Home
              </Link>
              <Link
                to="/about"
                data-testid="footer-link-about"
                style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
              >
                About Us
              </Link>
              <Link
                to="/menu"
                data-testid="footer-link-menu"
                style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
              >
                Menu
              </Link>
              <Link
                to="/franchise"
                data-testid="footer-link-franchise"
                style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
              >
                Franchise
              </Link>
              <Link
                to="/feedback"
                data-testid="footer-link-feedback"
                style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
              >
                Feedback
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact-info">
            <h4
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: '700',
                marginBottom: 'clamp(16px, 3vw, 20px)',
                color: '#F97316',
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2.5vw, 16px)' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'clamp(10px, 2vw, 12px)',
                flexWrap: 'nowrap'
              }}>
                <Phone 
                  size={18} 
                  color="#F97316" 
                  style={{ 
                    flexShrink: 0,
                    width: 'clamp(16px, 2.2vw, 18px)',
                    height: 'clamp(16px, 2.2vw, 18px)'
                  }} 
                />
                <a
                  href="tel:6261256832"
                  data-testid="footer-phone"
                  style={{
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    fontFamily: 'Inter, sans-serif',
                    wordBreak: 'break-word',
                    lineHeight: '1.5',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                  onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
                >
                  6261256832
                </a>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 'clamp(10px, 2vw, 12px)',
                flexWrap: 'nowrap'
              }}>
                <Mail 
                  size={18} 
                  color="#F97316" 
                  style={{ 
                    flexShrink: 0, 
                    marginTop: '3px',
                    width: 'clamp(16px, 2.2vw, 18px)',
                    height: 'clamp(16px, 2.2vw, 18px)'
                  }} 
                />
                <a
                  href="mailto:momosaddafranchiseofficial@gmail.com"
                  data-testid="footer-email"
                  style={{
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    fontFamily: 'Inter, sans-serif',
                    wordBreak: 'break-word',
                    lineHeight: '1.6',
                    flex: 1,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#F97316')}
                  onMouseLeave={(e) => (e.target.style.color = '#D1D5DB')}
                >
                  momosaddafranchiseofficial@gmail.com
                </a>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 'clamp(10px, 2vw, 12px)',
                flexWrap: 'nowrap'
              }}>
                <MapPin 
                  size={18} 
                  color="#F97316" 
                  style={{ 
                    flexShrink: 0, 
                    marginTop: '3px',
                    width: 'clamp(16px, 2.2vw, 18px)',
                    height: 'clamp(16px, 2.2vw, 18px)'
                  }} 
                />
                <span
                  data-testid="footer-address"
                  style={{
                    color: '#D1D5DB',
                    fontSize: 'clamp(13px, 1.8vw, 14px)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.6',
                    wordBreak: 'break-word',
                    flex: 1,
                  }}
                >
                  Serving Authentic Himalayan Flavors
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div data-testid="footer-social-media">
            <h4
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F97316',
              }}
            >
              Follow Us
            </h4>
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(12px, 2vw, 16px)', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                style={{
                  width: 'clamp(36px, 5vw, 40px)',
                  height: 'clamp(36px, 5vw, 40px)',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F97316';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Facebook size={20} color="#F97316" style={{ width: 'clamp(18px, 2.5vw, 20px)', height: 'clamp(18px, 2.5vw, 20px)' }} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                style={{
                  width: 'clamp(36px, 5vw, 40px)',
                  height: 'clamp(36px, 5vw, 40px)',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F97316';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={20} color="#F97316" style={{ width: 'clamp(18px, 2.5vw, 20px)', height: 'clamp(18px, 2.5vw, 20px)' }} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-x"
                style={{
                  width: 'clamp(36px, 5vw, 40px)',
                  height: 'clamp(36px, 5vw, 40px)',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F97316';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ 
                    width: 'clamp(18px, 2.5vw, 22px)', 
                    height: 'clamp(18px, 2.5vw, 22px)',
                  }}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-youtube"
                style={{
                  width: 'clamp(36px, 5vw, 40px)',
                  height: 'clamp(36px, 5vw, 40px)',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F97316';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Youtube size={20} color="#F97316" style={{ width: 'clamp(18px, 2.5vw, 20px)', height: 'clamp(18px, 2.5vw, 20px)' }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                style={{
                  width: 'clamp(36px, 5vw, 40px)',
                  height: 'clamp(36px, 5vw, 40px)',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F97316';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={20} color="#F97316" style={{ width: 'clamp(18px, 2.5vw, 20px)', height: 'clamp(18px, 2.5vw, 20px)' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          data-testid="footer-bottom"
          style={{
            borderTop: '1px solid rgba(249, 115, 22, 0.2)',
            paddingTop: '20px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(12px, 1.8vw, 14px)',
              color: '#9CA3AF',
              lineHeight: '1.6',
              wordBreak: 'break-word',
              padding: '0 10px',
            }}
          >
            © {currentYear} <span style={{ color: '#F97316', fontWeight: '600' }}>MOMO'S ADDA</span>. All
            rights reserved. | Fresh & Delicious
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
