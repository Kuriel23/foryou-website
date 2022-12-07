import axios, { type AxiosInstance } from 'axios';

export function getApi(): AxiosInstance {
  const api = axios.create({
    baseURL: 'http://localhost:3000/api',
  });

  return api;
}
