import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import BusinessFunding from './pages/BusinessFunding';
import CreditConsulting from './pages/CreditConsulting';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BusinessOnboarding from './pages/BusinessOnboarding';
import CreditOnboarding from './pages/CreditOnboarding';

/**
 * Root application component.
 * Sets up client-side routing with a shared Layout shell.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  );
}

