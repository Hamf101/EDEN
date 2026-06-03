import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import {
  Landmark,
  HandCoins,
  Handshake,
  ShieldCheck,
  ArrowRight,
  FileText,
  Banknote,
  Clock,
  FileCheck,
  BadgeDollarSign,
  CreditCard,
  Building2
} from 'lucide-react';
import founderImg from '../assets/founder2_transparent.png';
import './BusinessFunding.css';

/**
 * Business Funding dedicated page.
 * Merges previous Business Loans & Business Funding pages.
 */

const QUALIFICATIONS = [
  'Business operating for at least 12 months',
  'No prior defaults',
  'No UCC liens attached to you',
  'Generating at least $100K/month in revenue',
  'If you have a website, please attach it',
];

const REQUIRED_DOCUMENTS = [
  { label: '3 months business bank statements', required: true },
  { label: 'PROOF of ownership ID (EIN Letter, LLC Filing, etc.)', required: true },
  { label: 'Social Security Number (Social)', required: true },
  { label: 'Latest business tax return (if available, not required)', required: false },
  { label: 'POS system latest transaction report (if you have a POS system)', required: false },
];

export default function BusinessFunding() {
  return (
    <div className="page page--business-funding">
      {/* 1. HERO (from Business Loans, adapted for Business Funding) */}
      <section className="funding-hero-loans" id="funding-hero">
        <div className="loans-hero__inner container">
          <div className="loans-hero__content">
            <p className="loans-hero__eyebrow">Business Funding</p>
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

      {/* 2. SAME-DAY FUNDING CALLOUT BANNER (right under the Hero) */}
      <SectionWrapper id="same-day-funding-callout" bg="transparent">
        <div className="funding-callout-card">
          <div className="funding-callout-card__content">
            <h2 className="funding-callout-card__title">
              Same-Day Funding
            </h2>
            <p className="funding-callout-card__text">
              We offer same-day funding of <span className="text-gradient font-bold">up to three times (3x) your average monthly income</span>. Check qualifications and submit your intake form to get started.
            </p>
          </div>
          <div className="funding-callout-card__action">
            <Button variant="primary" size="lg" href="/onboarding/business">
              Apply Here <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. FUNDING THAT WORKS FOR YOU (two-column list + founder image) */}
      <SectionWrapper id="funding-details" bg="transparent">
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
          </div>

          <div className="page-two-col__media">
            <img
              src={founderImg}
              alt="Eden Prosperity — Business Funding"
              className="page-two-col__image"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 4. TYPES OF LOANS (three cards) */}
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

      {/* 5. FUNDING PATHWAYS (timeline layout) */}
      <SectionWrapper id="funding-types" bg="transparent">
        <div className="section-header-center">
          <h2>Funding <span className="text-gradient">Pathways</span></h2>
          <p>Multiple routes to the capital your business needs.</p>
        </div>
        <div className="funding-timeline">
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <Landmark size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Business Grants</h3>
              <p className="funding-timeline__text">
                Free money that doesn&apos;t need to be repaid. We help you find and
                apply for grants you qualify for — including same-day options.
              </p>
            </div>
          </div>
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <HandCoins size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Revenue-Based Financing</h3>
              <p className="funding-timeline__text">
                Get funded based on your business revenue. Flexible same-day repayment options that scale with your monthly sales volume.
              </p>
            </div>
          </div>
          <div className="funding-timeline__item">
            <div className="funding-timeline__marker">
              <Handshake size={24} />
            </div>
            <div className="funding-timeline__content">
              <h3 className="funding-timeline__title">Investor Matching</h3>
              <p className="funding-timeline__text">
                Connect with investors who believe in your vision. We help prepare
                your pitch and match you with the right funding partners.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. DOCUMENTS AND QUALIFICATIONS (two-column grid) */}
      <SectionWrapper id="funding-qualifications" bg="surface">
        <div className="section-header-center">
          <h2>Qualification &amp; <span className="text-gradient">Document Requirements</span></h2>
          <p>Review the criteria and documents needed to qualify your business for funding.</p>
        </div>
        
        <div className="funding-requirements-grid">
          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Criteria to Qualify</h3>
            <div className="funding-qualifications__list">
              {QUALIFICATIONS.map((q, i) => (
                <div key={i} className="funding-qualification-item">
                  <ShieldCheck size={20} className="funding-qualification-item__icon" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Documents Needed</h3>
            <div className="funding-qualifications__list">
              {REQUIRED_DOCUMENTS.map((doc, i) => (
                <div key={i} className="funding-qualification-item">
                  <FileText size={20} className="funding-qualification-item__icon" />
                  <span>
                    {doc.label} {!doc.required && <span className="text-muted-light">(Optional)</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="funding-qualifications__cta">
          <Button variant="primary" size="lg" href="/onboarding/business">
            Start Your Application <ArrowRight size={18} />
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
