import React, { useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.auth.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Invalid password');
      }

      const { token } = await response.json();
      onLoginSuccess(token);
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <style>{`
        .admin-login {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .admin-login h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .admin-login form {
          display: flex;
          gap: 10px;
        }
        .admin-login input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .admin-login button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .admin-login button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .admin-login .error {
          color: red;
          margin-top: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
