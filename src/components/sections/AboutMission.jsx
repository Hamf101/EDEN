import SectionWrapper from '../ui/SectionWrapper';
import founderImg from '../../assets/founder_transparent.png';
import './AboutMission.css';

/**
 * About/Mission section — founder story and mission statement.
 */
export default function AboutMission() {
  return (
    <SectionWrapper id="about" bg="transparent">
      <div className="about-mission">
        <div className="about-mission__image-col">
          <div className="about-mission__portrait">
            <img src={founderImg} alt="Founder of Eden Prosperity" />
          </div>
        </div>

        <div className="about-mission__content">
          <h2 className="about-mission__title">
            Our <span className="text-gradient">Mission</span>
          </h2>

          <p className="about-mission__text">
            At our core, we believe that everyone deserves the opportunity to
            build wealth, create financial freedom, and pursue their dreams
            through business ownership.
          </p>

          <p className="about-mission__text">
            We don&apos;t just help clients improve their credit profiles — we
            help them create a foundation for long-term success. Whether
            you&apos;re launching your first business, growing an existing
            company, or simply exploring your options, our goal is to position
            you for funding opportunities that can help bring your vision to
            life.
          </p>

          <blockquote className="about-mission__quote">
            <p>
              &ldquo;Keep God first. Build something of your own. Create
              opportunities for yourself and others. We&apos;re blessed to be a
              blessing.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
