import axios from 'axios';
import { API_ROOT } from './api-config';

const axiosInstance = axios.create({
  baseURL: `${API_ROOT}`,
  timeout: 5000,
  headers: JSON.parse(sessionStorage.getItem('user')),
});

export const AXIOS_INSTANCE = axiosInstance;
