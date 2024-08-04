// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://edwardndiyoo.pythonanywhere.com',
});

export default api;



