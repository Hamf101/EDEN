import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { ShieldCheck, TrendingUp, FileSearch, AlertTriangle } from 'lucide-react';
import './CreditRepair.css';

/**
 * Credit Repair dedicated page.
 * Unique green-accented hero with CSS score ring + horizontal process steps.
 */
export default function CreditRepair() {
  return (
    <div className="page page--credit-repair">
      {/* ---- UNIQUE HERO: Split with score ring visual ---- */}
      <section className="credit-hero" id="credit-hero">
        <div className="credit-hero__inner container">
          <div className="credit-hero__content">
            <p className="credit-hero__eyebrow">Credit Repair</p>
            <h1 className="credit-hero__title">
              Build a Strong Credit Foundation
            </h1>
            <p className="credit-hero__subtitle">
              Your credit profile is the gateway to business funding. Our proven
              strategies help clients unlock better rates, higher limits, and more
              opportunities.
            </p>
            <Button variant="primary" size="lg" href="/onboarding/credit">
              Start Your Journey
            </Button>
          </div>

          <div className="credit-hero__score-area">
            <div className="credit-hero__score-ring">
              <span className="credit-hero__score-number">
                100<span className="credit-hero__score-plus">+</span>
              </span>
              <span className="credit-hero__score-label">
                Average Score Increase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Process: Connected horizontal steps ---- */}
      <SectionWrapper id="credit-process" bg="surface">
        <div className="section-header-center">
          <h2>Our <span className="text-gradient">Process</span></h2>
          <p>A simple, structured approach to improving your credit.</p>
        </div>
        <div className="credit-steps">
          <div className="credit-step">
            <div className="credit-step__number">1</div>
            <FileSearch size={24} className="credit-step__icon" />
            <h3 className="credit-step__title">Credit Analysis</h3>
            <p className="credit-step__text">
              We review your full credit report and identify areas for
              improvement, errors, and dispute opportunities.
            </p>
          </div>
          <div className="credit-step">
            <div className="credit-step__number">2</div>
            <AlertTriangle size={24} className="credit-step__icon" />
            <h3 className="credit-step__title">Dispute &amp; Repair</h3>
            <p className="credit-step__text">
              We file disputes, negotiate with creditors, and work to remove
              negative items from your report.
            </p>
          </div>
          <div className="credit-step">
            <div className="credit-step__number">3</div>
            <TrendingUp size={24} className="credit-step__icon" />
            <h3 className="credit-step__title">Build &amp; Grow</h3>
            <p className="credit-step__text">
              We help you establish positive credit habits and build a stronger
              credit profile for the future.
            </p>
          </div>
          <div className="credit-step">
            <div className="credit-step__number">4</div>
            <ShieldCheck size={24} className="credit-step__icon" />
            <h3 className="credit-step__title">Fund &amp; Thrive</h3>
            <p className="credit-step__text">
              With an improved score, we connect you with funding options and
              help you start growing your business.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ---- Your Credit Is Your Superpower ---- */}
      <SectionWrapper id="credit-overview" bg="transparent">
        <div className="credit-overview">
          <div className="page-two-col__content">
            <h2>Your Credit Is Your <span className="text-gradient">Superpower</span></h2>
            <p>
              A strong credit score opens doors to better rates, higher limits, and more
              options. We help you build, repair, and leverage your credit to
              position you for success.
            </p>
            <p>
              Our proven strategies have helped clients increase their scores by
              100+ points, unlocking funding they never thought possible.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Get Started
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
