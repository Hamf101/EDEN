import SectionWrapper from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';
import { Banknote, TrendingUp, ShieldCheck } from 'lucide-react';
import './ServicesOverview.css';

/**
 * Services overview section — 3 service cards on the homepage.
 */
const services = [
  {
    icon: <Banknote size={28} />,
    title: 'Business Funding',
    description:
      'Access capital to grow your business with same-day approval. Explore loans up to $20M, revenue-based funding, grants, and investor matching pathways.',
    to: '/business-funding',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Credit Consulting',
    description:
      'Build a strong credit foundation. We help you optimize your credit profile and create a pathway to better funding opportunities.',
    to: '/credit-consulting',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Programs & Packages',
    description:
      'Accelerate your success with our Business Mentor packages and Credit Consulting programs designed to scale your financial growth.',
    to: '/courses',
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services" bg="surface">
      <div className="services-overview">
        <div className="services-overview__header">
          <h2 className="services-overview__title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="services-overview__subtitle">
            We provide comprehensive solutions to help you build wealth and
            create financial freedom through business ownership.
          </p>
        </div>
        <div className="services-overview__grid reveal-stagger">
          {services.map((service) => (
            <ServiceCard key={service.to} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
