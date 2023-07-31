import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/v1'
});

export class PortofolioService {
  static ApiEndpoint = {
    portofolio: '/portofolio'
  };

  static getAllPortofolio() {
    return apiClient.get(this.ApiEndpoint.portofolio);
  }
}
