import { instance } from '@/hooks/instance';

const apiClient = instance({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
  }
});

export class AuthService {
  static ApiEndpoint = {
    auth: '/app/auth'
  };

  static getPrivilege() {
    return apiClient.get(this.ApiEndpoint.auth);
  }
}
