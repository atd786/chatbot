import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Target } from 'lucide-react';
import { projects } from '../data/projects';

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate, slug]);

  if (!project) return null;

  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: '40px', paddingTop: '120px' }}>
        <div className="container">
          <Link to="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: '600', textDecoration: 'none' }}>
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', backgroundColor: `${project.color}15`, color: project.color, fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
              {project.category}
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="case-study-grid">
            
            {/* Left Content Column */}
            <div className="case-study-content">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="story-block"
              >
                <div className="story-icon" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                  <Target size={28} />
                </div>
                <h2>The Challenge</h2>
                <p>{project.challenge}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="story-block"
              >
                <div className="story-icon" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                  <TrendingUp size={28} />
                </div>
                <h2>Our Solution</h2>
                <p>{project.solution}</p>
              </motion.div>
            </div>

            {/* Right Sidebar (Metrics & Results) */}
            <div className="case-study-sidebar">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card results-card"
                style={{ borderTop: `4px solid ${project.color}` }}
              >
                <h2>The Results</h2>
                <div className="primary-metric" style={{ color: project.color }}>
                  {project.metric}
                </div>
                <ul className="results-list">
                  {project.results.map((res, i) => (
                    <li key={i}>
                      <CheckCircle2 size={20} color={project.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project & CTA */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', marginTop: '40px' }}>
        <div className="container">
          <div className="case-study-footer">
            <div className="next-project">
              <span className="footer-label">Next Case Study</span>
              <h3>{nextProject.title}</h3>
              <Link to={`/portfolio/${nextProject.slug}`} className="btn btn-secondary">Read Story</Link>
            </div>
            
            <div className="cta-box">
              <span className="footer-label">Ready for similar results?</span>
              <h3>Let's build your AI solution.</h3>
              <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default CaseStudy;
