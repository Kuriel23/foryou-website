import axios, { type AxiosInstance } from 'axios';

export function getApi(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  return api;
}
