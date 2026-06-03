import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Mail, MapPin } from 'lucide-react';
import './Contact.css';

/**
 * Custom Instagram SVG icon since lucide-react v1.x removed brand icons.
 */
function InstagramIcon({ size = 20 }) {
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

/**
 * Contact dedicated page.
 * Unique warm hero with inline contact cards + centered form below.
 */
export default function Contact() {
  return (
    <div className="page page--contact">
      {/* ---- UNIQUE HERO: Warm with inline contact cards ---- */}
      <section className="contact-hero" id="contact-hero">
        <div className="contact-hero__inner container">
          <h1 className="contact-hero__title">Let&apos;s Talk</h1>
          <p className="contact-hero__subtitle">
            Ready to get started? Reach out and let&apos;s discuss how we can help
            you achieve your financial goals.
          </p>

          <div className="contact-hero__cards">
            <a
              href="mailto:Eden@ProsperityGroupLLC.net"
              className="contact-hero__card"
            >
              <Mail size={24} className="contact-hero__card-icon" />
              <span className="contact-hero__card-label">Email</span>
              <span className="contact-hero__card-value">
                Eden@ProsperityGroupLLC.net
              </span>
            </a>

            <a
              href="https://www.instagram.com/fundedbykc/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-hero__card"
            >
              <InstagramIcon size={24} />
              <span className="contact-hero__card-label">Instagram</span>
              <span className="contact-hero__card-value">@fundedbykc</span>
            </a>

            <div className="contact-hero__card">
              <MapPin size={24} className="contact-hero__card-icon" />
              <span className="contact-hero__card-label">Service Area</span>
              <span className="contact-hero__card-value">Nationwide — USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Contact Form ---- */}
      <SectionWrapper id="contact-form" bg="transparent">
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <label htmlFor="contact-name" className="contact-form__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="contact-form__input"
                  placeholder="Your full name"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-email" className="contact-form__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="contact-form__input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__group">
                <label htmlFor="contact-phone" className="contact-form__label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  className="contact-form__input"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="contact-service" className="contact-form__label">
                  Service Interested In
                </label>
                <select id="contact-service" className="contact-form__input">
                  <option value="">Select a service...</option>
                  <option value="business-funding">Business Funding</option>
                  <option value="credit-consulting">Credit Consulting</option>
                  <option value="courses">Courses</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-message" className="contact-form__label">
                Message
              </label>
              <textarea
                id="contact-message"
                className="contact-form__input contact-form__textarea"
                rows="5"
                placeholder="Tell us about your goals..."
              />
            </div>

            <Button variant="primary" size="lg" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
