import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import {
  ArrowRight,
  Banknote,
  Building2,
  FileText,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import founderImg from '../assets/founder2_portrait.png';
import './BusinessFunding.css';

const READINESS_ITEMS = [
  'Business structure and entity review',
  'Revenue and document readiness',
  'Business credit profile preparation',
  'Funding pathway recommendations',
  'Website and brand presence review',
];

const DOCUMENTS = [
  { label: 'Recent business bank statements', required: true },
  { label: 'Proof of business ownership', required: true },
  { label: 'Business entity documents', required: true },
  { label: 'Tax return or bookkeeping records if available', required: false },
  { label: 'Website, offer, or sales material if available', required: false },
];

const PATHWAYS = [
  {
    icon: <Banknote size={28} />,
    title: 'Funding Readiness',
    text: 'Prepare your business profile, documents, and credit position before approaching lenders or partners.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Growth Capital Strategy',
    text: 'Map funding options to your business model, revenue stage, and growth goals.',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Guided Access',
    text: 'Move forward with a clear plan, better positioning, and support through the next step.',
  },
];

export default function BusinessFunding() {
  return (
    <div className="page page--business-funding">
      <section className="capital-hero" id="funding-hero">
        <div className="capital-hero__inner container">
          <div className="capital-hero__content">
            <p className="capital-hero__eyebrow">Capital Readiness</p>
            <h1 className="capital-hero__title">
              Build A Fundable <span className="text-gradient">Business</span>
            </h1>
            <p className="capital-hero__subtitle">
              We help entrepreneurs organize their business, strengthen their
              credit profile, and prepare for funding opportunities with a clear
              capital strategy.
            </p>
            <Button variant="primary" size="lg" href="/onboarding/business">
              Start Application <ArrowRight size={18} />
            </Button>
          </div>

          <div className="capital-hero__stats">
            <div className="capital-hero__stat-card">
              <span className="capital-hero__stat-value">$50M+</span>
              <span className="capital-hero__stat-label">Funding Network</span>
            </div>
            <div className="capital-hero__stat-card">
              <span className="capital-hero__stat-value">Strategy</span>
              <span className="capital-hero__stat-label">Before Submission</span>
            </div>
            <div className="capital-hero__stat-card">
              <span className="capital-hero__stat-value">1-on-1</span>
              <span className="capital-hero__stat-label">Guided Support</span>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="funding-details" bg="transparent">
        <div className="page-two-col">
          <div className="page-two-col__content">
            <h2>Capital Strategy <span className="text-gradient">For Growth</span></h2>
            <p>
              Funding is more than an application. Eden Prosperity helps you
              understand what lenders and partners look for, then prepares your
              business profile so you can pursue capital with more confidence.
            </p>

            <ul className="feature-list">
              {READINESS_ITEMS.map((item) => (
                <li className="feature-list__item" key={item}>
                  <ShieldCheck size={20} className="feature-list__icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="page-two-col__media">
            <img
              src={founderImg}
              alt="Eden Prosperity capital readiness advisor"
              className="page-two-col__image"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="funding-pathways" bg="surface">
        <div className="section-header-center">
          <h2>Funding <span className="text-gradient">Pathways</span></h2>
          <p>Practical preparation for the next stage of your business.</p>
        </div>
        <div className="grid-3">
          {PATHWAYS.map((pathway) => (
            <article className="capital-path-card" key={pathway.title}>
              <div className="capital-path-card__icon">{pathway.icon}</div>
              <div className="capital-path-card__content">
                <h3 className="capital-path-card__title">{pathway.title}</h3>
                <p className="capital-path-card__text">{pathway.text}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="funding-qualifications" bg="transparent">
        <div className="section-header-center">
          <h2>Readiness &amp; <span className="text-gradient">Document Review</span></h2>
          <p>Bring the right details so your strategy session is productive.</p>
        </div>

        <div className="funding-requirements-grid">
          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Readiness Review</h3>
            <div className="funding-qualifications__list">
              {READINESS_ITEMS.map((item) => (
                <div key={item} className="funding-qualification-item">
                  <Building2 size={20} className="funding-qualification-item__icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="funding-req-col">
            <h3 className="funding-req-col__title">Helpful Documents</h3>
            <div className="funding-qualifications__list">
              {DOCUMENTS.map((doc) => (
                <div key={doc.label} className="funding-qualification-item">
                  <FileText size={20} className="funding-qualification-item__icon" />
                  <span>
                    {doc.label} {!doc.required && <span className="text-muted">(Optional)</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="funding-qualifications__cta">
          <Button variant="primary" size="lg" href="/onboarding/business">
            Apply For Funding <ArrowRight size={18} />
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
