import axios, { AxiosError } from 'axios';
import { envConfig } from '../env';

export const httpClient = axios.create({
  baseURL: envConfig.backendBaseUrl
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);
