// API configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/api/auth/login`,
  },
  portfolio: {
    projects: `${API_BASE_URL}/api/portfolio/projects`,
    skills: `${API_BASE_URL}/api/portfolio/skills`,
    experience: `${API_BASE_URL}/api/portfolio/experience`,
    about: `${API_BASE_URL}/api/portfolio/about`,
  },
};

export default {
  API_BASE_URL,
  API_ENDPOINTS,
};
