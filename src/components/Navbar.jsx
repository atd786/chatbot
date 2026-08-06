import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BotMessageSquare, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo gradient-text" onClick={closeMenu}>
        <BotMessageSquare size={28} color="#2563eb" />
        Azitics
      </Link>
      
      <div className="nav-links desktop-only">
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
        <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>Portfolio</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
        <Link to="/pricing" className={`nav-link ${isActive('/pricing')}`}>Pricing</Link>
        <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>Get Started</Link>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/services" className={`mobile-nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
            <Link to="/portfolio" className={`mobile-nav-link ${isActive('/portfolio')}`} onClick={closeMenu}>Portfolio</Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
            <Link to="/pricing" className={`mobile-nav-link ${isActive('/pricing')}`} onClick={closeMenu}>Pricing</Link>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '10px' }} onClick={closeMenu}>Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
