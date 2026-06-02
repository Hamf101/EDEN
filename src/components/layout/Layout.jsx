import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout shell that wraps all pages.
 * Provides persistent Navbar and Footer around routed content.
 */
export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
