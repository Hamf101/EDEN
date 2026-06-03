/**
 * Shared premium package mark used for Eden Prosperity program cards.
 */
export default function PackageIcon({ size = 38, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.4" opacity="0.72" />
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <path
        d="M19 27l5-8 6 7 6-10 5 10 6-7 4 8v8H19v-8z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M22 38h20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M25 43h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M28 48h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M32 24.5l1.8 3.5 3.8.6-2.8 2.7.7 3.8-3.5-1.8-3.5 1.8.7-3.8-2.8-2.7 3.8-.6L32 24.5z"
        fill="currentColor"
      />
    </svg>
  );
}
