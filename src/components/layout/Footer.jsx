import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

/**
 * Custom Instagram SVG icon since lucide-react v1.x removed brand icons.
 */
function InstagramIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import './Footer.css';

/**
 * Shared footer component.
 * Three-column layout: brand info, quick links, contact info.
 */
const quickLinks = [
  { to: '/business-loans', label: 'Business Loans' },
  { to: '/business-funding', label: 'Business Funding' },
  { to: '/credit-repair', label: 'Credit Repair' },
  { to: '/courses', label: 'Courses' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner container">
        {/* Brand Column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-text">Eden</span>
            <span className="footer__logo-accent">Prosperity</span>
          </Link>
          <p className="footer__tagline">
            Building wealth, creating financial freedom, and empowering
            entrepreneurs through business ownership.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h4 className="footer__heading">Quick Links</h4>
          <nav className="footer__nav">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer__link">
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer__contact">
          <h4 className="footer__heading">Get In Touch</h4>
          <div className="footer__contact-items">
            <a
              href="mailto:EdenProsperityLLC@Gmail.com"
              className="footer__contact-item"
            >
              <Mail size={18} />
              <span>EdenProsperityLLC@Gmail.com</span>
            </a>
            <a
              href="https://instagram.com/_K_C_BIG"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
            >
              <InstagramIcon size={18} />
              <span>@_K_C_BIG</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {currentYear} Eden Prosperity LLC. All rights reserved.
          </p>
          <p className="footer__blessing">
            We&apos;re blessed to be a blessing.
          </p>
        </div>
      </div>
    </footer>
  );
}
