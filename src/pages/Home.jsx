import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe2, Zap } from 'lucide-react';

const Home = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingTop: '80px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container perspective-container">
          <div className="hero-grid">
            
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="hero-title-responsive" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1.5px' }}>
                Next-Gen AI <br/>
                <span className="gradient-text">Automation</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
                Transform your customer experience with intelligent conversational agents. We build bots that acquire clients, drive sales, and operate globally 24/7.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Start Project <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="glass-card" style={{ padding: '60px', background: 'linear-gradient(135deg, #ffffff 0%, #f4f6fb 100%)', transformStyle: 'preserve-3d' }}>
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  style={{ textAlign: 'center' }}
                >
                  <Bot size={120} color="var(--accent-primary)" style={{ filter: 'drop-shadow(0 20px 30px rgba(37, 99, 235, 0.2))' }} />
                  <h3 style={{ marginTop: '20px', fontSize: '1.5rem', fontWeight: '700' }}>AI Assistant Active</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Processing global inquiries...</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose <span className="gradient-text">Azitics</span>?</h2>
            <p className="section-subtitle">We deliver premium, robust AI solutions that integrate seamlessly into your business.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: <Bot size={40}/>, title: "Intelligent Bots", desc: "Train your AI on your specific business data for accurate, human-like responses." },
              { icon: <Globe2 size={40}/>, title: "Global Reach", desc: "Multilingual capabilities ensure you can acquire clients from anywhere in the world." },
              { icon: <Zap size={40}/>, title: "Lightning Fast", desc: "Zero wait times. Your customers get the answers they need instantly, 24/7." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">A seamless process from deployment to optimization.</p>
          </motion.div>

          <div className="steps-grid">
            {[
              { step: "01", title: "Integration", desc: "We connect our AI models directly to your CRM and website via secure APIs." },
              { step: "02", title: "Custom Training", desc: "The bot ingests your company's FAQs, products, and support history." },
              { step: "03", title: "Live Optimization", desc: "Our system continuously learns from live chats to improve response accuracy." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                style={{ 
                  padding: '40px', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(37, 99, 235, 0.1)', position: 'absolute', top: '20px', right: '30px' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', position: 'relative', zIndex: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
