import SectionWrapper from '../components/ui/SectionWrapper';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/courses';
import { BookOpen, Users, Award } from 'lucide-react';
import './Courses.css';

/**
 * Programs dedicated page.
 */
export default function Courses() {
  return (
    <div className="page page--courses">
      <section className="courses-hero" id="courses-hero">
        <div className="courses-hero__inner container">
          <h1 className="courses-hero__title">
            Entrepreneur <span className="text-gradient">Programs</span>
          </h1>
          <p className="courses-hero__subtitle">
            Structured consulting programs that help entrepreneurs build credit
            readiness, funding strategy, business systems, and long-term growth.
          </p>

          <div className="courses-hero__stats">
            <div className="courses-hero__stat">
              <BookOpen size={20} />
              <span>{courses.length} Programs</span>
            </div>
            <div className="courses-hero__stat">
              <Users size={20} />
              <span>Personalized Guidance</span>
            </div>
            <div className="courses-hero__stat">
              <Award size={20} />
              <span>Business Readiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Course Listing ---- */}
      <SectionWrapper id="all-courses" bg="transparent">
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
