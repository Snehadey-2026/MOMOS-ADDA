import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="main-footer"
      style={{
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        color: 'white',
        padding: '60px 20px 20px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Section */}
          <div data-testid="footer-brand-section">
            <img
              src="/AssetsMomosAdda/finallogo.jpg"
              alt="Momo's Adda"
              data-testid="footer-logo"
              style={{ height: '60px', marginBottom: '16px' }}
            />
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '24px',
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
                fontSize: '14px',
                color: '#D1D5DB',
                lineHeight: '1.6',
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
                fontSize: '18px',
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
                  fontSize: '14px',
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
                  fontSize: '14px',
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
                  fontSize: '14px',
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
                  fontSize: '14px',
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
                  fontSize: '14px',
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
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F97316',
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#F97316" />
                <a
                  href="tel:6261256832"
                  data-testid="footer-phone"
                  style={{
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  6261256832
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#F97316" />
                <a
                  href="mailto:momosaddafranchiseofficial@gmail.com"
                  data-testid="footer-email"
                  style={{
                    color: '#D1D5DB',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    wordBreak: 'break-word',
                  }}
                >
                  momosaddafranchiseofficial@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#F97316" style={{ marginTop: '2px' }} />
                <span
                  data-testid="footer-address"
                  style={{
                    color: '#D1D5DB',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.6',
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
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F97316',
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
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
                <Facebook size={20} color="#F97316" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
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
                <Instagram size={20} color="#F97316" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-twitter"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
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
                <Twitter size={20} color="#F97316" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-youtube"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
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
                <Youtube size={20} color="#F97316" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(249, 115, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
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
                <Linkedin size={20} color="#F97316" />
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
              fontSize: '14px',
              color: '#9CA3AF',
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
