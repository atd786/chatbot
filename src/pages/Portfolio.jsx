import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Global E-Commerce Assistant",
      category: "Retail Automation",
      description: "A multilingual chatbot deployed across 15 countries that handles product recommendations, order tracking, and returns processing, reducing support tickets by 45%.",
      metrics: ["45% Ticket Reduction", "24/7 Multilingual Support", "$1.2M Saved Annually"],
      color: "#2563eb"
    },
    {
      title: "FinTech Lead Qualifier",
      category: "Financial Services",
      description: "An intelligent bot integrated with Salesforce that pre-qualifies mortgage leads and automatically books appointments with regional advisors based on user location.",
      metrics: ["300% Increase in Qualified Leads", "Zero Wait Time", "Seamless CRM Sync"],
      color: "#059669"
    },
    {
      title: "Healthcare Triage Bot",
      category: "Healthcare",
      description: "A HIPAA-compliant assistant that securely triages patient symptoms, provides basic medical information, and routes urgent cases to on-call nurses.",
      metrics: ["2M+ Patients Served", "99.9% Uptime", "HIPAA Compliant"],
      color: "#7c3aed"
    }
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h1 className="section-title">Our <span className="gradient-text">Portfolio</span></h1>
            <p className="section-subtitle">Real-world AI automation success stories from our global enterprise clients.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
                className="glass-card"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '40px', 
                  alignItems: 'center',
                  padding: '50px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: project.color }}></div>
                
                <div>
                  <div style={{ color: project.color, fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                    {project.category}
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px' }}>
                    {project.description}
                  </p>
                  <Link to="/contact" className="btn btn-secondary" style={{ padding: '10px 24px' }}>
                    Request Case Study <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                  </Link>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {project.metrics.map((metric, j) => (
                    <motion.div 
                      key={j}
                      whileHover={{ scale: 1.05, x: 10 }}
                      style={{ 
                        background: 'var(--bg-secondary)', 
                        padding: '20px', 
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        fontWeight: '600',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: project.color }}></div>
                      {metric}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Ready to be our next success story?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Let's discuss how custom AI automation can transform your business operations.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
