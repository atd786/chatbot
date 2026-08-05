import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInquiries = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/admin/inquiries', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (res.ok) {
          const data = await res.json();
          setInquiries(data);
        } else {
          localStorage.removeItem('adminToken');
          navigate('/admin');
        }
      } catch (err) {
        console.error('Failed to fetch inquiries', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '100px' }}>Loading...</div>;

  return (
    <div className="container" style={{ padding: '40px 24px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Inquiries Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {inquiries.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: '60px' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No inquiries found yet.</p>
          </div>
        ) : (
          inquiries.map((inq) => (
            <div key={inq.id} className="inquiry-card">
              <div className="inquiry-meta">
                <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{inq.name}</span>
                <span>{new Date(inq.created_at).toLocaleString()}</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                Email: {inq.email}
              </div>
              {inq.company && (
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Company: {inq.company}
                </div>
              )}
              <div className="inquiry-message">
                {inq.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
