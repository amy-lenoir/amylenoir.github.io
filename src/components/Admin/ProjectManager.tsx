import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../config/api';

interface Project {
  _id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
}

interface ProjectManagerProps {
  token: string;
}

export const ProjectManager: React.FC<ProjectManagerProps> = ({ token }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tags: '',
    category: '',
    featured: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.portfolio.projects);
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
      };

      const url = editingId 
        ? `${API_ENDPOINTS.portfolio.projects}/${editingId}`
        : API_ENDPOINTS.portfolio.projects;
      
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        await fetchProjects();
        setFormData({
          title: '',
          description: '',
          image: '',
          link: '',
          tags: '',
          category: '',
          featured: false,
        });
        setEditingId(null);
        setShowForm(false);
      }
    } catch (err) {
      console.error('Failed to save project:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image || '',
      link: project.link || '',
      tags: project.tags?.join(', ') || '',
      category: project.category || '',
      featured: project.featured || false,
    });
    setEditingId(project._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure?')) {
      try {
        const response = await fetch(`${API_ENDPOINTS.portfolio.projects}/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (response.ok) {
          await fetchProjects();
        }
      } catch (err) {
        console.error('Failed to delete project:', err);
      }
    }
  };

  return (
    <div className="project-manager">
      <h3>Projects</h3>
      <button onClick={() => {
        setShowForm(!showForm);
        setEditingId(null);
        setFormData({
          title: '',
          description: '',
          image: '',
          link: '',
          tags: '',
          category: '',
          featured: false,
        });
      }}>
        {showForm ? 'Cancel' : 'Add Project'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="project-form">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <label>
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            Featured
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : editingId ? 'Update' : 'Create'}
          </button>
        </form>
      )}

      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-item">
            <h4>{project.title}</h4>
            <p>{project.description.substring(0, 100)}...</p>
            {project.featured && <span className="badge">Featured</span>}
            <div className="actions">
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button onClick={() => handleDelete(project._id)} className="delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-manager {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .project-form {
          display: grid;
          gap: 10px;
          margin: 15px 0;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 4px;
        }
        .project-form input,
        .project-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
        }
        .project-form button {
          padding: 10px;
          background: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .project-list {
          display: grid;
          gap: 15px;
          margin-top: 15px;
        }
        .project-item {
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          background: #f9f9f9;
        }
        .project-item h4 {
          margin: 0 0 10px 0;
        }
        .project-item p {
          margin: 0 0 10px 0;
          color: #666;
        }
        .project-item .badge {
          display: inline-block;
          padding: 4px 8px;
          background: #ffc107;
          border-radius: 4px;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .project-item .actions {
          display: flex;
          gap: 10px;
        }
        .project-item button {
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: #007bff;
          color: white;
        }
        .project-item button.delete {
          background: #dc3545;
        }
      `}</style>
    </div>
  );
};
