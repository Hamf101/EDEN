import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Landmark, HandCoins, Handshake, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import './BusinessFundingQualifications.css';

/**
 * Business Funding Qualifications dedicated page.
 * Includes same-day funding callout, qualification requirements, and onboarding link.
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

export default function BusinessFundingQualifications() {
  return (
    <div className="page page--business-funding-qualifications">
      {/* ---- UNIQUE HERO: Light with funding pathway badges ---- */}
      <section className="funding-hero" id="funding-hero">
        <div className="funding-hero__inner container">
          <h1 className="funding-hero__title">Business Funding Qualifications</h1>
          <p className="funding-hero__subtitle">
            Explore diverse funding options and check the requirements to qualify your business for same-day capital.
          </p>

          <div className="funding-hero__paths">
            <div className="funding-hero__path">
              <Landmark size={18} />
              <span>Grants</span>
            </div>
            <div className="funding-hero__path-connector" />
            <div className="funding-hero__path">
              <HandCoins size={18} />
              <span>Revenue-Based</span>
            </div>
            <div className="funding-hero__path-connector" />
            <div className="funding-hero__path">
              <Handshake size={18} />
              <span>Investor Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SAME-DAY FUNDING CALLOUT BANNER ---- */}
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

      {/* ---- Qualifications & Documents ---- */}
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

      {/* ---- Funding Types: Timeline layout ---- */}
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

      {/* ---- Overview Section ---- */}
      <SectionWrapper id="funding-overview" bg="surface">
        <div className="funding-overview">
          <div className="page-two-col__content">
            <h2>Diverse Funding <span className="text-gradient">Solutions</span></h2>
            <p>
              Not every business needs the same type of funding. We help you
              explore and secure the right financial solution — from traditional
              loans and grants to alternative financing options that match your
              unique situation.
            </p>
            <p>
              Whether you&apos;re a startup looking for seed capital or an
              established business seeking growth funding, our team provides
              personalized guidance every step of the way.
            </p>
            <Button variant="primary" size="lg" href="/onboarding/business">
              Start Your Application
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
