import axios, { type AxiosInstance } from 'axios';

export function getContributorsService(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CONTRIBUTORS_SERVICE_URL,
  });

  return api;
}
