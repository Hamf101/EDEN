import { motion } from 'framer-motion';
import './SectionWrapper.css';

/**
 * Wrapper component for page sections.
 * Provides consistent padding, max-width, and scroll-reveal animation.
 *
 * @param {object} props
 * @param {string} [props.id] - Section ID for anchor linking
 * @param {'dark'|'surface'|'transparent'} [props.bg] - Background variant
 * @param {boolean} [props.narrow] - Use narrow max-width
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 */
export default function SectionWrapper({
  id,
  bg = 'transparent',
  narrow = false,
  className = '',
  children,
}) {
  return (
    <motion.section
      id={id}
      className={`section section--${bg} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`section__inner ${narrow ? 'container--narrow' : ''}`}>
        {children}
      </div>
    </motion.section>
  );
}
