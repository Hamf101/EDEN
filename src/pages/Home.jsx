import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Banknote,
  Building2,
  Calendar,
  CheckCircle2,
  Coins,
  CreditCard,
  Landmark,
  Megaphone,
  Monitor,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';
import Button from '../components/ui/Button';
import crownIcon from '../assets/crown-icon.png';
import heroImage from '../assets/eden-legacy-hero.png';
import growthImage from '../assets/eden-growth-path.png';
import founderImage from '../assets/founder_transparent.png';
import founderPortrait from '../assets/founder_portrait.png';
import './Home.css';

const STATS = [
  { icon: <Coins size={40} strokeWidth={1} />, value: '$50M+', label: 'Funding Solutions Available' },
  { icon: <Calendar size={40} strokeWidth={1} />, value: '14 Days', label: 'Credit Optimization Process' },
  { icon: <User size={40} strokeWidth={1} />, value: '1-ON-1', label: 'Personalized Coaching' },
  { icon: <TrendingUp size={40} strokeWidth={1} />, value: '1000+', label: 'Entrepreneurs Empowered' },
];

const SERVICES = [
  {
    icon: <Landmark size={44} strokeWidth={1} />,
    title: 'Business Development',
    description: 'From business formation to systems and structure, we build your foundation for success.',
  },
  {
    icon: <CreditCard size={44} strokeWidth={1} />,
    title: 'Credit Consulting',
    description: 'Improve your credit profile and build strong business credit for more funding opportunities.',
  },
  {
    icon: <Banknote size={44} strokeWidth={1} />,
    title: 'Business Funding',
    description: 'Access up to $50M in funding with same-day options available for qualified businesses.',
  },
  {
    icon: <Monitor size={44} strokeWidth={1} />,
    title: 'Website & Integration',
    description: 'Professional websites, automation, and integrations that create a powerful online presence.',
  },
  {
    icon: <Megaphone size={44} strokeWidth={1} />,
    title: 'Marketing & Branding',
    description: 'Build your brand, attract clients, and scale with strategic marketing solutions.',
  },
  {
    icon: <Users size={44} strokeWidth={1} />,
    title: 'Coaching & Mentorship',
    description: '1-on-1 coaching to help you scale, overcome challenges, and grow your business faster.',
  },
];

const SCALE_ITEMS = [
  'Business Funding up to $50 Million',
  'Same-Day Funding Options Available',
  'Credit Consulting Results in as Little as 14 Business Days',
  'Business Formation & Structure',
  'Website Development & Marketing',
  'Business Credit Building & Funding Readiness',
];

const PROGRAMS = [
  {
    title: 'Entrepreneur Success Program',
    price: '$3,500',
    description:
      'Designed for entrepreneurs who want more than funding. Establish, structure, and position your business for long-term growth and funding opportunities.',
    highlights: [
      'One-on-One Business Consulting',
      'Business Formation & Structure Guidance',
      'Professional Website & Brand Setup',
      'Business Credit Strategy',
      'Complimentary Credit Optimization',
      'Funding Preparation & Readiness',
      'Strategic Growth Planning',
      'Dedicated Support & Mentorship',
    ],
  },
  {
    title: 'Business Consulting Mastery',
    price: '$4,795',
    description:
      'Learn directly from an experienced entrepreneur through personalized coaching designed to help you launch, grow, and scale your own consulting business.',
    highlights: [
      'One-on-One Business Mentorship',
      'Credit Consulting Business Setup',
      'Business Funding Strategies',
      'Sales & Client Acquisition Training',
      'Marketing & Brand Development',
      'Systems, Automation & Operations',
      'Business Credit Education',
      '60 Days of Personalized Coaching',
      'Templates, Tools & Implementation Guides',
    ],
  },
];

/**
 * Premium homepage for Eden Prosperity Group LLC.
 */
export default function Home() {
  return (
    <div className="page home-page">
      <section className="home-hero" id="home">
        <img src={heroImage} alt="" className="home-hero__image" aria-hidden="true" />
        <div className="home-hero__overlay" aria-hidden="true" />
        <div className="home-hero__inner container">
          <div className="home-hero__content">
            <p className="home-kicker">Blueprint to Financial Freedom</p>
            <h1 className="home-hero__title">
              <span>Build The Business.</span>
              <span>Create The Wealth.</span>
            </h1>
            <p className="home-hero__text">
              We help entrepreneurs build business credit, access capital, and
              leverage funding to create lasting financial freedom and long-term
              wealth through business ownership.
            </p>
            <div className="home-hero__actions">
              <Button variant="primary" size="lg" href="/onboarding/business">
                Start Your Journey <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="/business-funding">
                Our Services
              </Button>
            </div>
            <div className="home-hero__trusted">
              <p className="home-hero__trusted-title">TRUSTED BY ENTREPRENEURS NATIONWIDE</p>
              <div className="home-hero__trusted-row">
                <div className="home-hero__avatars">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={founderImage} alt="" aria-hidden="true" />
                  ))}
                </div>
                <div className="home-hero__rating">
                  <div className="home-hero__stars">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <span>4.9 (500+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label="Eden Prosperity proof points">
        <div className="home-stats__inner container">
          {STATS.map((stat) => (
            <div className="home-stat" key={stat.label}>
              <div className="home-stat__icon">{stat.icon}</div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section home-section--services" id="services">
        <div className="container">
          <div className="home-section__header">
            <p className="home-kicker">What We Do</p>
            <h2>Complete Solutions For Your Business Growth</h2>
          </div>
          <div className="home-services">
            {SERVICES.map((service) => (
              <article className="home-service-card" key={service.title}>
                <div className="home-service-card__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-scale" id="scale">
        <img src={growthImage} alt="" className="home-scale__image" aria-hidden="true" />
        <div className="home-scale__overlay" aria-hidden="true" />
        <div className="home-scale__inner container">
          <div className="home-scale__content">
            <h2>Build. Fund. Scale.</h2>
            <p>
              Helping entrepreneurs build fundable businesses, access capital,
              receive credit consulting, and create long-term wealth through
              business ownership.
            </p>
            <ul className="home-check-list">
              {SCALE_ITEMS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="home-scale__actions">
              <Button variant="primary" size="md" href="/onboarding/business">
                Apply Now <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="md" href="/contact">
                Book A Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section--programs" id="programs">
        <div className="container">
          <div className="home-section__header">
            <p className="home-kicker">Our Programs</p>
            <h2>Designed For Entrepreneurs Building Legacy</h2>
          </div>
          <div className="home-programs">
            {PROGRAMS.map((program) => (
              <article className="home-program-card" key={program.title}>
                <div className="home-program-card__top">
                  <div className="home-program-card__icon">
                    <img src={crownIcon} alt="Program Icon" style={{ width: 48, height: 48, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3>{program.title}</h3>
                    <strong>{program.price}</strong>
                  </div>
                </div>
                <p>{program.description}</p>
                <ul className="home-check-list home-check-list--compact">
                  {program.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/courses" className="home-card-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-mission" id="about">
        <div className="home-mission__inner container">
          <div className="home-mission__portrait">
            <img src={founderPortrait} alt="Founder of Eden Prosperity Group LLC" />
          </div>
          <div className="home-mission__copy">
            <p className="home-kicker">Our Mission</p>
            <h2>Your Success Is Our Purpose</h2>
            <p>
              At Eden Prosperity Group LLC, our mission is to empower
              entrepreneurs with the tools, knowledge, and capital readiness
              strategy they need to build successful businesses and create
              generational wealth.
            </p>
            <p className="home-mission__signature">African Deuck</p>
            <span>Founder & CEO</span>
          </div>
          <aside className="home-mission__cta">
            <Calendar size={34} />
            <h3>Ready To Take The Next Step?</h3>
            <p>
              Schedule a strategy call and discover how Eden Prosperity can help
              you reach your business goals.
            </p>
            <Button variant="primary" size="md" href="/contact">
              Schedule A Call
            </Button>
          </aside>
        </div>
      </section>
    </div>
  );
}
