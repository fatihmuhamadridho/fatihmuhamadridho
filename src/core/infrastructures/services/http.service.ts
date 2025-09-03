import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from '@/configs/base.config';

export class HttpService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_API_URL,
    });
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config).then((res) => res.data);
  }

  post<T = any>(url: string, data: any): Promise<T> {
    return this.client.post(url, data).then((res) => res.data);
  }

  put<T = any>(url: string, data: any): Promise<T> {
    return this.client.put(url, data).then((res) => res.data);
  }

  delete<T = any>(url: string): Promise<T> {
    return this.client.delete(url).then((res) => res.data);
  }
}
