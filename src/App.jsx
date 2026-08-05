import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo gradient-text">Azitics</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content animate-fade-up">
            <h1 className="hero-title">
              Next-Generation AI <br/>
              <span className="gradient-text">Chatbot Agency</span>
            </h1>
            <p className="hero-subtitle">
              We build intelligent, conversational AI solutions that automate customer service, acquire clients, and scale your business globally.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Start Your Project</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section features">
        <div className="container">
          <h2 className="section-title scroll-animate">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle scroll-animate delay-1">Comprehensive AI chatbot development designed for modern businesses targeting a global audience.</p>
          
          <div className="features-grid">
            <div className="feature-card scroll-animate delay-1">
              <div className="feature-content">
                <div className="feature-icon">🤖</div>
                <h3 className="feature-title">Custom AI Chatbots</h3>
                <p className="feature-desc">Tailor-made conversational agents trained on your business data to provide precise, human-like interactions 24/7.</p>
              </div>
            </div>
            <div className="feature-card scroll-animate delay-2">
              <div className="feature-content">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">Global Client Acquisition</h3>
                <p className="feature-desc">Multilingual bots designed to capture leads, qualify prospects, and seamlessly convert international traffic into paying clients.</p>
              </div>
            </div>
            <div className="feature-card scroll-animate delay-3">
              <div className="feature-content">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Seamless Integration</h3>
                <p className="feature-desc">Connect your AI assistant natively with your existing CRM, helpdesk, and workflow automation tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title scroll-animate">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle scroll-animate delay-1">Ready to transform your business with AI? Reach out to our dedicated teams.</p>
          
          <div className="contact-grid">
            <div className="contact-info scroll-animate delay-1">
              <h3 style={{fontSize: '1.8rem', marginBottom: '30px'}}>Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Direct Line / WhatsApp</div>
                  <div style={{fontSize: '1.2rem', fontWeight: '600'}}>03477890730</div>
                </div>
              </div>

              <div style={{marginTop: '40px'}}>
                <div style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px'}}>Department Emails</div>
                <div className="emails-list">
                  <div className="email-chip">✉️ hello@chatbot.azitics.com</div>
                  <div className="email-chip">💼 sales@chatbot.azitics.com</div>
                  <div className="email-chip">🛠️ support@chatbot.azitics.com</div>
                  <div className="email-chip">🤝 partners@chatbot.azitics.com</div>
                  <div className="email-chip">💳 billing@chatbot.azitics.com</div>
                </div>
              </div>
            </div>
            
            <div className="contact-info scroll-animate delay-2" style={{background: 'transparent', border: 'none', padding: '0'}}>
              <div style={{background: 'var(--bg-card)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-light)'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Global Operations</h3>
                <p style={{color: 'var(--text-secondary)', marginBottom: '20px'}}>
                  Azitics Chatbot Agency operates globally, providing world-class AI solutions to clients across North America, Europe, and Asia.
                </p>
                <p style={{color: 'var(--text-secondary)'}}>
                  Our intelligent agents are always online, ensuring your customers receive instant support regardless of time zones.
                </p>
                <div style={{marginTop: '30px'}}>
                  <a href="mailto:hello@chatbot.azitics.com" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Send us an Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Azitics Chatbot Agency. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
