import {
  ArrowRight,
  Banknote,
  Calendar,
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
import heroImage from '../assets/eden-legacy-hero.png';
import founderPortrait from '../assets/founder_portrait.png';
import ent1 from '../assets/entrepreneur_1_1780505668429.png';
import ent2 from '../assets/entrepreneur_2_1780505679553.png';
import ent3 from '../assets/entrepreneur_3_1780505690502.png';
import ent4 from '../assets/entrepreneur_4_1780505702152.png';
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
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="/business-funding">
                View Services
              </Button>
            </div>
            
            <div className="home-hero__trust">
              <p className="home-kicker">Trusted By Entrepreneurs Nationwide</p>
              <div className="home-hero__trust-stars">
                 <div className="home-hero__trust-faces">
                <img src={ent1} alt="Client 1" />
                <img src={ent2} alt="Client 2" />
                <img src={ent3} alt="Client 3" />
                <img src={ent4} alt="Client 4" />
              </div>
                 <div className="home-hero__trust-rating">
                    <span>★★★★★</span>
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

      <section className="home-mission" id="about">
        <div className="home-mission__inner container">
          <div className="home-mission__portrait">
            <img src={founderPortrait} alt="Founder of Eden Prosperity Group LLC" />
          </div>
          <div className="home-mission__copy">
            <p className="home-kicker">Founder's Journey</p>
            <h2>My Mission Story</h2>
            <p>
              Born in Seoul and raised in the U.S. foster care system, I had to teach myself financial literacy from the ground up. My journey wasn't easy—I faced homelessness, worked multiple jobs, and supported my younger brother as a teenager. Through it all, my faith in God and a pivotal moment fueled my drive to master credit and business finance.
            </p>
            <p>
              In 2019, I launched my consulting company to help others achieve financial freedom. Today, my mission is to level the playing field. I want to equip you with the tools to leverage credit, access capital, and build generational wealth.
            </p>
            <p>
              My story is proof that your circumstances don't dictate your future. With faith, knowledge, and the right opportunities, anything is possible.
            </p>
            <p className="home-mission__signature">Founder and CEO</p>
          </div>
          <aside className="home-mission__cta">
            <Calendar size={34} />
            <h3>Ready To Take The Next Step?</h3>
            <p>
              Schedule a strategy call and discover how Eden Prosperity can help
              you reach your business goals.
            </p>
            <Button variant="primary" size="md" href="/contact">
              Schedule Consultation
            </Button>
          </aside>
        </div>
      </section>
    </div>
  );
}
