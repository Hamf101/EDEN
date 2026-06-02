import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import BusinessLoans from './pages/BusinessLoans';
import BusinessFunding from './pages/BusinessFunding';
import CreditRepair from './pages/CreditRepair';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

/**
 * Root application component.
 * Sets up client-side routing with a shared Layout shell.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/business-funding" element={<BusinessFunding />} />
          <Route path="/credit-repair" element={<CreditRepair />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
