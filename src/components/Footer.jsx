import { Link } from 'react-router-dom';
import { BotMessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="logo gradient-text" style={{ marginBottom: '16px' }}>
              <BotMessageSquare size={24} color="#2563eb" />
              Azitics
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              Next-generation AI automation and client acquisition tools for ambitious businesses globally.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-secondary)' }}>Services</Link></li>
              <li><Link to="/portfolio" style={{ color: 'var(--text-secondary)' }}>Portfolio</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Azitics Chatbot Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
