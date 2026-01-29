import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'MENU', path: '/menu' },
  { name: 'FRANCHISE', path: '/franchise' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'FEEDBACK', path: '/feedback' },
];

return (
  <nav
    data-testid="main-navbar"
    style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: isScrolled
      ? '#D62828'
      : 'linear-gradient(90deg, #D62828 0%, #FB8C00 100%)',
    color: 'white',
    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
    transition: 'all 0.3s ease',
  }}
>
  <div className="container" style={{ padding: '0 20px' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.5vw, 12px)' }}>
         <img
  src="/AssetsMomosAdda/finalLogo.png"
  alt="Momo's Adda"
  style={{ 
    height: 'clamp(50px, 10vw, 80px)', 
    width: 'auto',
    maxWidth: '60px',
    maxHeight: '80px',
    objectFit: 'contain'
  }}
/>
          <span
            style={{
              fontFamily: 'Copper Black, serif',
              fontSize: 'clamp(18px, 4vw, 30px)',
              fontWeight: '800',
              color: '#FDC500',
              whiteSpace: 'nowrap',
            }}
          >
            MOMO'S ADDA
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              textDecoration: 'none',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              fontWeight: '600',
              color: location.pathname === link.path ? '#FDC500' : 'white',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FDC500')}
            onMouseLeave={(e) =>
              (e.target.style.color =
                location.pathname === link.path ? '#FDC500' : 'white')
            }
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-testid="mobile-menu-button"
        className="mobile-menu-btn"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        {isMobileMenuOpen ? (
          <X size={28} color="white" />
        ) : (
          <Menu size={28} color="white" />
        )}
      </button>
    </div>
  </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="mobile-menu"
          style={{
            background: 'white',
            padding: '20px',
            borderTop: '1px solid rgba(220, 38, 38, 0.1)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 0',
                textDecoration: 'none',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                color: location.pathname === link.path ? '#DC2626' : '#374151',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 969px) {
          .mobile-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .mobile-menu-btn {
            padding: 6px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
