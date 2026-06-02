import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

/**
 * Shared navigation bar component.
 * Sticky header with transparent-to-solid transition on scroll.
 * Responsive hamburger menu on mobile.
 */
const navLinks = [
  { to: '/business-loans', label: 'Business Loans' },
  { to: '/business-funding', label: 'Business Funding' },
  { to: '/credit-repair', label: 'Credit Repair' },
  { to: '/courses', label: 'Courses' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      id="main-navbar"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMobile}>
          <span className="navbar__logo-text">Eden</span>
          <span className="navbar__logo-accent">Prosperity</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" id="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="navbar__cta" id="nav-apply-btn">
          Apply Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}
        id="mobile-menu"
      >
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMobile}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="navbar__mobile-cta"
            onClick={closeMobile}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
