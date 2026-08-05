import { motion } from 'framer-motion';
import LeadBot from '../components/LeadBot';

const Contact = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingBottom: '150px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 className="section-title">Let's <span className="gradient-text">Chat</span></h1>
              <p className="section-subtitle">
                Experience our AI in action. Chat with our assistant below to submit your inquiry, and our human team will follow up shortly!
              </p>
            </div>
            
            <LeadBot />
            
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
