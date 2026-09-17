import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        color: 'white',
        padding: '18px 14px 10px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '18px',
            marginBottom: '15px',
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="/AssetsMomosAdda/LOGOPNG2.png"
              alt="Momo's Adda"
              style={{
                height: '36px',
                marginBottom: '6px',
              }}
            />

            <h3
              style={{
                fontSize: '15px',
                fontWeight: '600',
                marginBottom: '5px',
                color: '#F97316',
              }}
            >
              MOMO'S ADDA
            </h3>

            <p
              style={{
                fontSize: '12px',
                color: '#D1D5DB',
                lineHeight: '1.4',
              }}
            >
              Fresh Himalayan Flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#F97316',
              }}
            >
              Links
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/about" style={linkStyle}>About</Link>
              <Link to="/menu" style={linkStyle}>Menu</Link>
              <Link to="/franchise" style={linkStyle}>Franchise</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#F97316',
              }}
            >
              Contact
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={rowStyle}>
                <Phone size={14} color="#F97316" />
                <span style={textStyle}>6261256832</span>
              </div>

              <div style={rowStyle}>
                <Mail size={14} color="#F97316" />
                <span style={textStyle}>Email Us</span>
              </div>

              <div style={rowStyle}>
                <MapPin size={14} color="#F97316" />
                <span style={textStyle}>Raipur</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#F97316',
              }}
            >
              Follow
            </h4>

            <div style={{ display: 'flex', gap: '8px' }}>
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(249, 115, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={14} color="#F97316" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(249, 115, 22, 0.2)',
            paddingTop: '6px',
            textAlign: 'center',
            fontSize: '11px',
            color: '#9CA3AF',
          }}
        >
          © {currentYear} <span style={{ color: '#F97316' }}>MOMO'S ADDA</span>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: '#D1D5DB',
  textDecoration: 'none',
  fontSize: '12px',
};

const rowStyle = {
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
};

const textStyle = {
  fontSize: '12px',
  color: '#D1D5DB',
};

export default Footer;