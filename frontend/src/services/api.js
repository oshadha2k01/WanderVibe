import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// API services for destinations
export const destinationService = {
  getAll: async () => {
    const response = await API.get('/destinations');
    return response.data;
  },
  getFeatured: async () => {
    const response = await API.get('/destinations/featured');
    return response.data;
  },
  getById: async (id) => {
    const response = await API.get(`/destinations/${id}`);
    return response.data;
  }
};

// API services for services
export const serviceService = {
  getAll: async (category = '') => {
    const response = await API.get(`/services${category ? `?category=${category}` : ''}`);
    return response.data;
  },
  getById: async (id) => {
    const response = await API.get(`/services/${id}`);
    return response.data;
  }
};

// API services for packages
export const packageService = {
  getAll: async () => {
    const response = await API.get('/packages');
    return response.data;
  },
  getFeatured: async () => {
    const response = await API.get('/packages/featured');
    return response.data;
  },
  getById: async (id) => {
    const response = await API.get(`/packages/${id}`);
    return response.data;
  }
};

// API services for contact
export const contactService = {
  submitForm: async (formData) => {
    const response = await API.post('/contact/submit', formData);
    return response.data;
  },
  getOffices: async () => {
    const response = await API.get('/contact/offices');
    return response.data;
  }
};

export default API;
