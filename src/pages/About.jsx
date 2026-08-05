import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="section-title">About <span className="gradient-text">Azitics</span></h1>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              We are a team of AI engineers, conversational designers, and automation experts dedicated to revolutionizing how businesses interact with their customers.
            </p>
            
            <div className="glass-card" style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-primary)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                At Azitics, our mission is to democratize advanced AI automation. We believe that every business, regardless of size, deserves access to intelligent systems that can scale their operations globally, reduce overhead, and deliver exceptional 24/7 customer experiences.
              </p>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent-primary)' }}>Global Expertise</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Based on a global operational model, we serve clients across North America, Europe, and Asia. Our multilingual AI agents break down language barriers, allowing you to seamlessly acquire and support customers in new international markets.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', marginTop: '60px' }}>
              {[
                { number: "50+", label: "Enterprise Clients" },
                { number: "10M+", label: "Conversations Automated" },
                { number: "24/7", label: "Global Availability" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)' }}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '10px' }}>{stat.number}</div>
                  <div style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
