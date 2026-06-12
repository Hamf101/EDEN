import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const BusinessFunding = lazy(() => import('./pages/BusinessFunding'));
const CreditConsulting = lazy(() => import('./pages/CreditConsulting'));
const Courses = lazy(() => import('./pages/Courses'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const BusinessOnboarding = lazy(() => import('./pages/BusinessOnboarding'));
const CreditOnboarding = lazy(() => import('./pages/CreditOnboarding'));

/**
 * Root application component.
 * Sets up client-side routing with a shared Layout shell and lazy loading.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-gold)' }}>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/business-funding" element={<BusinessFunding />} />
            <Route path="/credit-consulting" element={<CreditConsulting />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/onboarding/business" element={<BusinessOnboarding />} />
            <Route path="/onboarding/credit" element={<CreditOnboarding />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
