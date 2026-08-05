import { Link, useLocation } from 'react-router-dom';
import { BotMessageSquare } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="logo gradient-text">
        <BotMessageSquare size={28} color="#2563eb" />
        Azitics
      </Link>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
        <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>Portfolio</Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
        <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
