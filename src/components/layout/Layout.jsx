import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import VineOverlay from '../ui/VineOverlay';

/**
 * Shared layout shell — wraps every page with nav, footer, and vine overlay.
 */
export default function Layout() {
  return (
    <>
      <Navbar />
      <VineOverlay />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
