import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Banknote, Clock, FileCheck, ShieldCheck, BadgeDollarSign, CreditCard, Building2 } from 'lucide-react';
import founderImg from '../assets/founder2_transparent.png';
import './BusinessLoans.css';

/**
 * Business Loans dedicated page.
 * Unique dark-purple hero with stat cards + horizontal loan-type cards.
 */
export default function BusinessLoans() {
  return (
    <div className="page page--business-loans">
      {/* ---- UNIQUE HERO: Dark purple with stat cards ---- */}
      <section className="loans-hero" id="loans-hero">
        <div className="loans-hero__inner container">
          <div className="loans-hero__content">
            <p className="loans-hero__eyebrow">Business Loans</p>
            <h1 className="loans-hero__title">
              Access Capital to{' '}
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="loans-hero__subtitle">
              Competitive rates, flexible terms, and same-day approval.
              Get the funding you need without the hassle.
            </p>
          </div>

          <div className="loans-hero__stats">
            <div className="loans-hero__stat-card">
              <span className="loans-hero__stat-value">$20M+</span>
              <span className="loans-hero__stat-label">Available Funding</span>
            </div>
            <div className="loans-hero__stat-card">
              <span className="loans-hero__stat-value">Same Day</span>
              <span className="loans-hero__stat-label">Approval Speed</span>
            </div>
            <div className="loans-hero__stat-card">
              <span className="loans-hero__stat-value">No Minimum</span>
              <span className="loans-hero__stat-label">Credit Score Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Loan Types: Horizontal cards ---- */}
      <SectionWrapper id="loan-types" bg="surface">
        <div className="section-header-center">
          <h2>Types of <span className="text-gradient">Loans</span></h2>
          <p>We offer a wide range of financing options for every stage of your business.</p>
        </div>
        <div className="grid-3">
          <div className="loan-type-card">
            <div className="loan-type-card__icon">
              <Banknote size={28} />
            </div>
            <div className="loan-type-card__content">
              <h3 className="loan-type-card__title">Term Loans</h3>
              <p className="loan-type-card__text">
                Traditional business loans with fixed repayment schedules. Ideal for large
                investments, equipment purchases, or expansion projects.
              </p>
            </div>
          </div>
          <div className="loan-type-card">
            <div className="loan-type-card__icon">
              <CreditCard size={28} />
            </div>
            <div className="loan-type-card__content">
              <h3 className="loan-type-card__title">Lines of Credit</h3>
              <p className="loan-type-card__text">
                Flexible revolving credit you can draw from as needed. Perfect for managing
                cash flow, seasonal expenses, or unexpected opportunities.
              </p>
            </div>
          </div>
          <div className="loan-type-card">
            <div className="loan-type-card__icon">
              <Building2 size={28} />
            </div>
            <div className="loan-type-card__content">
              <h3 className="loan-type-card__title">SBA Loans</h3>
              <p className="loan-type-card__text">
                Government-backed loans with favorable terms and lower interest rates. We
                help you navigate the application process from start to finish.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ---- Details Section ---- */}
      <SectionWrapper id="loan-details" bg="transparent">
        <div className="page-two-col">
          <div className="page-two-col__content">
            <h2>Funding That Works <span className="text-gradient">For You</span></h2>
            <p>
              We connect entrepreneurs with the right funding solutions — whether
              you&apos;re launching a new venture, expanding operations, or managing
              cash flow. Our network of lenders offers competitive rates with
              terms tailored to your business needs.
            </p>

            <ul className="feature-list">
              <li className="feature-list__item">
                <BadgeDollarSign size={20} className="feature-list__icon" />
                <span>Loans up to $20 Million</span>
              </li>
              <li className="feature-list__item">
                <Clock size={20} className="feature-list__icon" />
                <span>Same Day Approval</span>
              </li>
              <li className="feature-list__item">
                <FileCheck size={20} className="feature-list__icon" />
                <span>No Proof of Income Required</span>
              </li>
              <li className="feature-list__item">
                <ShieldCheck size={20} className="feature-list__icon" />
                <span>No Minimum Credit Score</span>
              </li>
            </ul>

            <Button variant="primary" size="lg" href="/onboarding/business">
              Apply Now
            </Button>
          </div>

          <div className="page-two-col__media">
            <img
              src={founderImg}
              alt="Eden Prosperity — Business Loans"
              className="page-two-col__image"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
