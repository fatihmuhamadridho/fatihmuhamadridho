import { BASE_API_URL } from '@/configs/base.config';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_API_URL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      async (config) => {
        (config.headers as any) = {
          ...config.headers,
        };

        return config;
      },
      (error) => Promise.reject(error),
    );

    this.client.interceptors.response.use(
      (res) => res,
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config).then((res) => res.data);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.post(url, data, config).then((res) => res.data);
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.client.put(url, data, config).then((res) => res.data);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.delete(url, config).then((res) => res.data);
  }
}
