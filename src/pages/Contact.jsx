import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
            <p className="section-subtitle">Send us an inquiry and our team will get back to you shortly.</p>
            
            <div className="glass-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" required className="form-input" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="email" required className="form-input" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input type="text" name="company" className="form-input" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea name="message" required className="form-input" value={formData.message} onChange={handleChange} placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>

                {status === 'success' && <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>Inquiry sent successfully!</p>}
                {status === 'error' && <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>Failed to send inquiry. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
