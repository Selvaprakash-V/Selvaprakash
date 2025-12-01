import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const projectService = {
  getAll: () => axios.get(`${API_URL}/projects`),
  getFeatured: () => axios.get(`${API_URL}/projects/featured`),
  getById: (id) => axios.get(`${API_URL}/projects/${id}`),
  create: (data) => axios.post(`${API_URL}/projects`, data),
  update: (id, data) => axios.put(`${API_URL}/projects/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/projects/${id}`),
};

export const contactService = {
  send: (data) => axios.post(`${API_URL}/contact`, data),
  getAll: () => axios.get(`${API_URL}/contact`),
};

export const aboutService = {
  get: () => axios.get(`${API_URL}/about`),
  update: (data) => axios.put(`${API_URL}/about`, data),
};
