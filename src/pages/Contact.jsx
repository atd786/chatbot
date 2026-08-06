import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const openGlobalBot = () => {
    window.dispatchEvent(new Event('open-chatbot'));
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingBottom: '100px', paddingTop: '120px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '15px' }}>
                Book a <span className="gradient-text">Consultation</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                Fill out the form below to speak with our human team, or chat instantly with our AI expert.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <CheckCircle2 size={60} color="#10b981" style={{ margin: '0 auto 20px auto' }} />
                  <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>Request Received!</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>We will be in touch shortly to schedule your consultation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
                      <input type="text" required style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-secondary)' }}>Work Email</label>
                      <input type="email" required style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', fontSize: '1rem' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-secondary)' }}>Company Name</label>
                    <input type="text" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-secondary)' }}>How can we help you?</label>
                    <textarea rows="4" required style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', marginTop: '10px' }}>
                    Submit Request <Send size={18} style={{ marginLeft: '10px' }}/>
                  </button>
                </form>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ height: '1px', background: 'var(--border-color)', flex: 1, maxWidth: '100px' }}></div>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>OR</span>
                <div style={{ height: '1px', background: 'var(--border-color)', flex: 1, maxWidth: '100px' }}></div>
              </div>
              
              <button onClick={openGlobalBot} className="btn" style={{ 
                background: 'linear-gradient(135deg, #1e1e1e 0%, #000000 100%)', 
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Bot size={22} color="#fbbf24" />
                Prefer to chat? Ask our AI
              </button>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
