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
 * Shared footer component — Garden of Eden themed.
 * Four-column layout: Brand, Services, Company, Newsletter.
 */
const serviceLinks = [
  { to: '/business-funding', label: 'Business Funding' },
  { to: '/credit-consulting', label: 'Credit Consulting' },
  { to: '/courses', label: 'Programs' },
];

const companyLinks = [
  { to: '/', label: 'About Us' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      {/* Gold vine separator */}
      <div className="footer__vine-separator" aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none">
          <path
            d="M0 20 C200 5, 400 35, 600 20 C800 5, 1000 35, 1200 20"
            stroke="var(--color-gold-dark)"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

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
          <div className="footer__social">
            <a
              href="https://www.instagram.com/fundedbykc/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="mailto:Eden@ProsperityGroupLLC.net"
              className="footer__social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <nav className="footer__nav">
            {serviceLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer__link">
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Company Column */}
        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <nav className="footer__nav">
            {companyLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer__link">
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter Column */}
        <div className="footer__col">
          <h4 className="footer__heading">Newsletter</h4>
          <p className="footer__newsletter-text">
            Get strategic insights delivered to your inbox.
          </p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Address"
              className="footer__newsletter-input"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {currentYear} Eden Prosperity Group LLC. All rights reserved.
          </p>
          <p className="footer__blessing">
            We&apos;re blessed to be a blessing.
          </p>
        </div>
      </div>
    </footer>
  );
}
