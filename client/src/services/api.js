// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api' // Update with your server's base URL
});

export const addCustomer = (customerData) => api.post('/customers/add', customerData);
