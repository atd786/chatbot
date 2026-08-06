import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const Contact = () => {

  useEffect(() => {
    // Automatically trigger the chatbot to open when user visits the Contact page
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('open-chatbot'));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
      <section className="section" style={{ paddingBottom: '100px', paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px auto',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)'
              }}>
                <Bot size={50} color="white" />
              </div>
            </motion.div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
              Let's build your <span className="gradient-text">AI Future</span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
              Traditional contact forms are a thing of the past. <br/>
              Our AI Sales Engineer is ready to take your details and book your consultation instantly.
            </p>

            <button onClick={openGlobalBot} className="btn btn-primary" style={{ 
              padding: '18px 40px',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)',
              cursor: 'pointer'
            }}>
              <Bot size={24} />
              Chat with AI to Book
            </button>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
