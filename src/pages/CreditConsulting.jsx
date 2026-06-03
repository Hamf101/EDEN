import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ArrowRight, CreditCard, FileSearch, ShieldCheck, TrendingUp } from 'lucide-react';
import './CreditConsulting.css';

const PROCESS = [
  {
    icon: <FileSearch size={24} />,
    title: 'Profile Review',
    text: 'Review your current credit picture and identify practical opportunities to strengthen readiness.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Strategy Session',
    text: 'Build a clear plan around credit habits, documentation, business structure, and financial positioning.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Business Credit Education',
    text: 'Understand how business credit works and what signals help entrepreneurs prepare for funding.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Readiness Support',
    text: 'Use the plan to improve organization, confidence, and capital readiness over time.',
  },
];

export default function CreditConsulting() {
  return (
    <div className="page page--credit-consulting">
      <section className="credit-hero" id="credit-hero">
        <div className="credit-hero__inner container">
          <div className="credit-hero__content">
            <p className="credit-hero__eyebrow">Credit Consulting</p>
            <h1 className="credit-hero__title">
              Strengthen Your Credit Foundation
            </h1>
            <p className="credit-hero__subtitle">
              Your credit profile influences how your business is positioned.
              We provide education, review, and strategic guidance to help you
              prepare for stronger opportunities.
            </p>
            <Button variant="primary" size="lg" href="/onboarding/credit">
              Start Your Consultation <ArrowRight size={18} />
            </Button>
          </div>

          <div className="credit-hero__score-area">
            <div className="credit-hero__score-ring">
              <span className="credit-hero__score-number">14</span>
              <span className="credit-hero__score-label">
                Business Day Consultation Window
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="credit-process" bg="surface">
        <div className="section-header-center">
          <h2>Our <span className="text-gradient">Consulting Process</span></h2>
          <p>A structured approach to credit education and funding readiness.</p>
        </div>
        <div className="credit-steps">
          {PROCESS.map((step, index) => (
            <article className="credit-step" key={step.title}>
              <div className="credit-step__number">{index + 1}</div>
              <div className="credit-step__icon">{step.icon}</div>
              <h3 className="credit-step__title">{step.title}</h3>
              <p className="credit-step__text">{step.text}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="credit-overview" bg="transparent">
        <div className="credit-overview">
          <div className="page-two-col__content">
            <h2>Credit Readiness Is <span className="text-gradient">Business Readiness</span></h2>
            <p>
              A stronger credit foundation can support better conversations with
              lenders, partners, and vendors. We help you understand where you
              stand and what actions can make your business more fundable.
            </p>
            <p>
              The goal is not a quick promise. It is a clear strategy,
              education, and disciplined preparation for long-term business
              growth.
            </p>
            <Button variant="primary" size="lg" href="/onboarding/credit">
              Begin Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
