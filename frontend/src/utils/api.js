import axios from 'axios';

// Configure base URL - change this for production
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Projects API
export const getProjects = async () => {
  const res = await axios.get('/api/projects');
  return res.data;
};

export const getProject = async (id) => {
  const res = await axios.get(`/api/projects/${id}`);
  return res.data;
};

export const createProject = async (projectData) => {
  const res = await axios.post('/api/projects', projectData);
  return res.data;
};

export const updateProject = async (id, projectData) => {
  const res = await axios.put(`/api/projects/${id}`, projectData);
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await axios.delete(`/api/projects/${id}`);
  return res.data;
};

// Contact API
export const submitContact = async (contactData) => {
  const res = await axios.post('/api/contact', contactData);
  return res.data;
};

export const getContacts = async () => {
  const res = await axios.get('/api/contact');
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`/api/contact/${id}`);
  return res.data;
};

// GitHub API
export const getGitHubRepos = async (username) => {
  const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
  return res.data;
};

export default {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  submitContact,
  getContacts,
  deleteContact,
  getGitHubRepos,
};