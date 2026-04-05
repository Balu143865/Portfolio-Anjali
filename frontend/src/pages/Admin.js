import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getContacts,
  deleteContact,
} from '../utils/api';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ArrowRightOnRectangleIcon,
  FolderIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Admin = () => {
  const { user, token, login, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    techStack: '',
    githubLink: '',
    liveLink: '',
    featured: false,
  });

  useEffect(() => {
    if (!loading && !token) {
      navigate('/admin/login');
    }
  }, [loading, token, navigate]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [activeTab, token]);

  const fetchData = async () => {
    if (activeTab === 'projects') {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    } else if (activeTab === 'messages') {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await login(email, password);
    if (result.success) {
      toast.success('Login successful!');
      navigate('/admin');
    } else {
      toast.error(result.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...formData,
        techStack: formData.techStack.split(',').map((s) => s.trim()),
      };

      if (editingProject) {
        await updateProject(editingProject._id, projectData);
        toast.success('Project updated!');
      } else {
        await createProject(projectData);
        toast.success('Project created!');
      }
      setShowModal(false);
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        image: '',
        techStack: '',
        githubLink: '',
        liveLink: '',
        featured: false,
      });
      fetchData();
    } catch (error) {
      toast.error('Failed to save project');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      try {
        if (activeTab === 'projects') {
          await deleteProject(id);
          toast.success('Project deleted!');
        } else {
          await deleteContact(id);
          toast.success('Message deleted!');
        }
        fetchData();
      } catch (error) {
        toast.error('Failed to delete');
      }
    }
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      techStack: project.techStack.join(', '),
      githubLink: project.githubLink || '',
      liveLink: project.liveLink || '',
      featured: project.featured,
    });
    setShowModal(true);
  };

  // Login Form
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'projects'
                ? 'bg-primary-500 text-white'
                : 'bg-white dark:bg-dark-800'
            }`}
          >
            <FolderIcon className="w-5 h-5" />
            <span>Projects</span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'messages'
                ? 'bg-primary-500 text-white'
                : 'bg-white dark:bg-dark-800'
            }`}
          >
            <EnvelopeIcon className="w-5 h-5" />
            <span>Messages ({contacts.length})</span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'projects' ? (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => {
                  setEditingProject(null);
                  setFormData({
                    title: '',
                    description: '',
                    image: '',
                    techStack: '',
                    githubLink: '',
                    liveLink: '',
                    featured: false,
                  });
                  setShowModal(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                <PlusIcon className="w-5 h-5" />
                <span>Add Project</span>
              </button>
            </div>
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-dark-700">
                  <tr>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Tech Stack</th>
                    <th className="px-4 py-3 text-left">Featured</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id} className="border-t dark:border-dark-700">
                      <td className="px-4 py-3">{project.title}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {project.featured ? '⭐ Yes' : 'No'}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => openEditModal(project)}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(project._id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      {contact.email}
                    </p>
                    {contact.subject && (
                      <p className="text-sm font-medium">{contact.subject}</p>
                    )}
                    <p className="mt-2">{contact.message}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-dark-800 p-6 rounded-2xl w-full max-w-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              {editingProject ? 'Edit Project' : 'Add Project'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tech Stack (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.techStack}
                  onChange={(e) =>
                    setFormData({ ...formData, techStack: e.target.value })
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GitHub Link</label>
                <input
                  type="text"
                  value={formData.githubLink}
                  onChange={(e) =>
                    setFormData({ ...formData, githubLink: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Live Link</label>
                <input
                  type="text"
                  value={formData.liveLink}
                  onChange={(e) =>
                    setFormData({ ...formData, liveLink: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg bg-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <label htmlFor="featured" className="text-sm font-medium">
                  Featured
                </label>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  {editingProject ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 dark:border-dark-700 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Admin;