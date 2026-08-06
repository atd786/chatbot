import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Retail', 'Finance', 'Healthcare', 'Real Estate', 'SaaS', 'Logistics'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h1 className="section-title">Our <span className="gradient-text">Portfolio</span></h1>
            <p className="section-subtitle">Real-world AI automation success stories from our global enterprise clients.</p>
          </motion.div>

          {/* Filter Bar */}
          <div className="filter-bar">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card compact-project-card"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  <div className="project-color-bar" style={{ backgroundColor: project.color }}></div>
                  <div className="project-content">
                    <span className="project-category" style={{ color: project.color }}>{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    
                    <div className="project-metric">
                      <div className="metric-dot" style={{ backgroundColor: project.color }}></div>
                      <span>{project.metric}</span>
                    </div>

                    <Link to={`/portfolio/${project.slug}`} className="project-link">
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
