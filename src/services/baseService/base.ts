import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/v1'
});

export class BaseService {
  static ApiEndpoint = {
    base: '/base'
  };

  static getAlllBase() {
    return apiClient.get(this.ApiEndpoint.base);
  }
}
