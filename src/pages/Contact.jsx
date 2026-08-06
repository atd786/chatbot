import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import LeadBot from '../components/LeadBot';

const Contact = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingBottom: '100px', paddingTop: '100px', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)'
                }}>
                  <Bot size={40} color="white" />
                </div>
              </motion.div>

              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '15px' }}>
                Let's build your <span className="gradient-text">AI Future</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                Traditional contact forms are a thing of the past. Our AI Sales Engineer is ready to take your details and book your consultation instantly below.
              </p>
            </div>

            <motion.div 
              style={{ width: '100%', maxWidth: '600px', height: '600px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <LeadBot inline={true} />
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
