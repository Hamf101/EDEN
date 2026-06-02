import { useState } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';
import './Testimonials.css';

/**
 * Testimonials dedicated page.
 * Features a dark hero with a featured pull-quote,
 * plus a tabbed listing for Credit Repair vs Business Funding testimonials.
 */

const TABS = [
  { id: 'all', label: 'All Testimonials' },
  { id: 'credit-repair', label: 'Credit Repair' },
  { id: 'business-funding', label: 'Business Funding' },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');

  const featured = testimonials[0];

  const filtered =
    activeTab === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  return (
    <div className="page page--testimonials">
      {/* ---- UNIQUE HERO: Dark with featured testimonial quote ---- */}
      <section className="testimonials-hero" id="testimonials-hero">
        <div className="testimonials-hero__inner container">
          <div className="testimonials-hero__quote-mark">&ldquo;</div>

          <blockquote className="testimonials-hero__featured-quote">
            {featured.quote}
          </blockquote>

          <div className="testimonials-hero__stars">
            {Array.from({ length: featured.rating }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>

          <div className="testimonials-hero__author">
            <span className="testimonials-hero__name">{featured.name}</span>
            <span className="testimonials-hero__role">{featured.role}</span>
          </div>
        </div>
      </section>

      {/* ---- Tabbed Testimonial Listing ---- */}
      <SectionWrapper id="all-testimonials" bg="transparent">
        {/* Tab Toggle */}
        <div className="testimonials-tabs" id="testimonials-tab-bar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`testimonials-tab ${activeTab === tab.id ? 'testimonials-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
