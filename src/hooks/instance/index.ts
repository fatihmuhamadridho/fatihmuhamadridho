import axios, { AxiosRequestConfig } from 'axios';

const instance = ({ baseURL, ...options }: AxiosRequestConfig) => {
  const baseAxios = axios.create({
    baseURL,
    ...options
  });

  baseAxios.interceptors.request.use(
    (config: any) => {
      if (options.headers) {
        config.headers = options.headers
        return config
      }
      
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => Promise.reject(error)
  );

  return baseAxios;
};

export { instance };
