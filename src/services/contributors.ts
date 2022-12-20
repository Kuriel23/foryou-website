import axios from 'axios';

export const contributors = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONTRIBUTORS_SERVICE_URL,
});
