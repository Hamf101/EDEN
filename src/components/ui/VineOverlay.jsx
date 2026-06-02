import { useEffect, useRef, useState } from 'react';
import './VineOverlay.css';

const VINE_PARTICLES = [
  { left: 14, top: 24, duration: 3.4 },
  { left: 28, top: 42, duration: 4.2 },
  { left: 43, top: 30, duration: 3.8 },
  { left: 57, top: 58, duration: 4.6 },
  { left: 68, top: 36, duration: 3.2 },
  { left: 78, top: 64, duration: 4.4 },
  { left: 86, top: 26, duration: 3.6 },
  { left: 92, top: 48, duration: 4.8 },
];

/**
 * VineOverlay — Decorative SVG vine paths along the page edges.
 * Vines "grow" as the user scrolls using stroke-dashoffset animation.
 * Creates the Garden of Eden creeping vine effect.
 */
export default function VineOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const leftVineRef = useRef(null);
  const rightVineRef = useRef(null);

  useEffect(() => {
    /** Calculate and update scroll progress 0..1 */
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateVine = (ref) => {
      if (!ref.current) return;
      const paths = ref.current.querySelectorAll('.vine-path');
      paths.forEach((path) => {
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len * (1 - scrollProgress)}`;
      });
    };

    updateVine(leftVineRef);
    updateVine(rightVineRef);
  }, [scrollProgress]);

  return (
    <div className="vine-overlay" aria-hidden="true">
      {/* Left Vine */}
      <svg
        ref={leftVineRef}
        className="vine-svg vine-svg--left"
        viewBox="0 0 180 2000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main vine trunk */}
        <path
          className="vine-path"
          d="M64 2000 C64 1800, 28 1700, 54 1500 C80 1300, 20 1200, 46 1000 C72 800, 24 700, 52 500 C80 300, 34 200, 56 0"
          stroke="var(--color-gold-dark)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.48"
        />
        {/* Secondary vine tendril */}
        <path
          className="vine-path"
          d="M54 1800 C26 1750, 8 1700, 22 1600 C36 1500, 12 1400, 28 1300 C44 1200, 8 1100, 24 1000"
          stroke="var(--color-gold-dark)"
          strokeWidth="2.75"
          strokeLinecap="round"
          opacity="0.32"
        />
        {/* Tertiary vine tendril */}
        <path
          className="vine-path"
          d="M70 1640 C108 1580, 118 1510, 96 1420 C74 1330, 116 1240, 90 1120 C64 1000, 116 900, 92 780 C68 660, 104 560, 84 440"
          stroke="var(--color-gold-dark)"
          strokeWidth="2.25"
          strokeLinecap="round"
          opacity="0.22"
        />

        {/* Leaves along left vine */}
        <g className="vine-leaves">
          <path d="M48 1700 C30 1690, 15 1680, 20 1660 C25 1640, 40 1650, 48 1670 Z" fill="var(--color-gold-dark)" opacity="0.3" className="leaf-sway" />
          <path d="M35 1400 C18 1385, 5 1370, 12 1350 C19 1330, 30 1345, 35 1365 Z" fill="var(--color-gold-dark)" opacity="0.25" className="leaf-sway" style={{ animationDelay: '0.5s' }} />
          <path d="M42 1100 C25 1085, 10 1070, 18 1050 C26 1030, 38 1050, 42 1070 Z" fill="var(--color-gold-dark)" opacity="0.2" className="leaf-sway" style={{ animationDelay: '1s' }} />
          <path d="M30 800 C15 785, 3 770, 10 750 C17 730, 28 748, 30 768 Z" fill="var(--color-gold-dark)" opacity="0.15" className="leaf-sway" style={{ animationDelay: '1.5s' }} />
          <path d="M45 500 C28 490, 15 475, 22 455 C29 435, 40 452, 45 470 Z" fill="var(--color-gold-dark)" opacity="0.12" className="leaf-sway" style={{ animationDelay: '2s' }} />
        </g>
      </svg>

      {/* Right Vine */}
      <svg
        ref={rightVineRef}
        className="vine-svg vine-svg--right"
        viewBox="0 0 180 2000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main vine trunk */}
        <path
          className="vine-path"
          d="M64 2000 C64 1800, 28 1700, 54 1500 C80 1300, 20 1200, 46 1000 C72 800, 24 700, 52 500 C80 300, 34 200, 56 0"
          stroke="var(--color-silver)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.28"
        />
        {/* Secondary vine tendril */}
        <path
          className="vine-path"
          d="M54 1800 C26 1750, 8 1700, 22 1600 C36 1500, 12 1400, 28 1300 C44 1200, 8 1100, 24 1000"
          stroke="var(--color-silver)"
          strokeWidth="2.75"
          strokeLinecap="round"
          opacity="0.18"
        />
        {/* Tertiary vine tendril */}
        <path
          className="vine-path"
          d="M70 1640 C108 1580, 118 1510, 96 1420 C74 1330, 116 1240, 90 1120 C64 1000, 116 900, 92 780 C68 660, 104 560, 84 440"
          stroke="var(--color-silver)"
          strokeWidth="2.25"
          strokeLinecap="round"
          opacity="0.14"
        />

        {/* Leaves along right vine */}
        <g className="vine-leaves">
          <path d="M48 1700 C30 1690, 15 1680, 20 1660 C25 1640, 40 1650, 48 1670 Z" fill="var(--color-silver)" opacity="0.15" className="leaf-sway" />
          <path d="M35 1400 C18 1385, 5 1370, 12 1350 C19 1330, 30 1345, 35 1365 Z" fill="var(--color-silver)" opacity="0.12" className="leaf-sway" style={{ animationDelay: '0.5s' }} />
          <path d="M42 1100 C25 1085, 10 1070, 18 1050 C26 1030, 38 1050, 42 1070 Z" fill="var(--color-silver)" opacity="0.1" className="leaf-sway" style={{ animationDelay: '1s' }} />
          <path d="M30 800 C15 785, 3 770, 10 750 C17 730, 28 748, 30 768 Z" fill="var(--color-silver)" opacity="0.08" className="leaf-sway" style={{ animationDelay: '1.5s' }} />
          <path d="M45 500 C28 490, 15 475, 22 455 C29 435, 40 452, 45 470 Z" fill="var(--color-silver)" opacity="0.07" className="leaf-sway" style={{ animationDelay: '2s' }} />
        </g>
      </svg>

      {/* Golden dust particles */}
      <div className="vine-particles" style={{ opacity: scrollProgress > 0.1 ? 0.6 : 0 }}>
        {VINE_PARTICLES.map((particle, i) => (
          <span
            key={i}
            className="vine-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
