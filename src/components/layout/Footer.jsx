import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import './Footer.css';

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
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/business-funding', label: 'Business Funding' },
  { to: '/credit-consulting', label: 'Credit Consulting' },
  { to: '/courses', label: 'Programs' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { to: '/courses', label: 'Entrepreneur Programs' },
  { to: '/onboarding/business', label: 'Business Application' },
  { to: '/onboarding/credit', label: 'Credit Assessment' },
  { to: '/contact', label: 'Schedule A Call' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logoImg} alt="" className="footer__logo-img" aria-hidden="true" />
            <div className="footer__logo-text-wrapper">
              <span>
                Eden <strong>Prosperity</strong>
              </span>
              <span className="footer__logo-llc">LLC</span>
            </div>
          </Link>
          <p>
            Building wealth, creating legacy, and empowering entrepreneurs for
            a stronger future.
          </p>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Our Services" links={serviceLinks} />

        <div className="footer__col">
          <h4>Follow Us</h4>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/fundedbykc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a href="mailto:services@edenprosperitygroup.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <Link to="/contact" className="footer__cta">
            Schedule A Call <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Eden Prosperity Group LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer__col">
      <h4>{title}</h4>
      <nav>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
            <ArrowUpRight size={13} />
          </Link>
        ))}
      </nav>
    </div>
  );
}
