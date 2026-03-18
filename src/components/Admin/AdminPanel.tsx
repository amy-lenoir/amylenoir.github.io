import React, { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { ProjectManager } from './ProjectManager';

export const AdminPanel: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('adminToken');
  };

  React.useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('adminToken', newToken);
  };

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>CMS Admin Panel</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <ProjectManager token={token} />
      
      <style>{`
        .admin-panel {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #007bff;
          padding-bottom: 20px;
        }
        .admin-header h1 {
          margin: 0;
        }
        .logout-btn {
          padding: 10px 20px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .logout-btn:hover {
          background: #c82333;
        }
      `}</style>
    </div>
  );
};
