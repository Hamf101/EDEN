# Eden Prosperity Group LLC

Premium website for Eden Prosperity Group LLC, a business consulting and credit consulting brand focused on capital readiness, business funding preparation, credit strategy, education, and client onboarding.

The app is a React + Vite single page application with client-side routing, branded landing content, service pages, testimonials, contact flow, and onboarding forms for business funding and credit consulting prospects.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Routes

- `/` - Homepage with hero, stats, services, Build/Fund/Scale, programs, mission, and CTA sections.
- `/business-funding` - Capital readiness positioning, funding pathways, business preparation, and document review.
- `/credit-consulting` - Credit consultation overview, process, education, and readiness messaging.
- `/courses` - Programs and education offers for business and credit readiness.
- `/testimonials` - Client success stories and proof points.
- `/contact` - Contact details and inquiry form.
- `/onboarding/business` - Capital readiness onboarding and application form.
- `/onboarding/credit` - Credit consultation assessment form.

## Asset And Design Notes

- Brand imagery and founder assets live in `src/assets`.
- Shared visual tokens live in `src/styles/tokens.css`.
- The design direction is premium, polished, and trust-forward: dark surfaces, gold and silver accents, refined serif headings, and clear calls to action.
- Keep imagery optimized before adding it to the repository, and prefer brand-relevant visuals over generic stock assets.

## Deployment

Run `npm run build` and deploy the generated `dist` directory to a static host. Configure the host with an SPA fallback to `index.html` so direct links to client-side routes resolve correctly.
