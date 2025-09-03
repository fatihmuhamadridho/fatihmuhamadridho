import { User } from '@/core/domains/models/user.model';
import { UserRepository } from '@/core/domains/repositories/user.repository';
import { UserQueryParams, UserProfileWebResponseDTO } from '@/core/domains/types/user.type';
import { HttpService } from '../services/http.service';
import { AxiosError } from 'axios';

export class UserRepositoryFrontendImpl implements UserRepository {
  constructor(private httpService: HttpService) {}
  async getProfileWeb(params?: UserQueryParams): Promise<User> {
    try {
      const response = await this.httpService.get('/api/profile', { params });
      if (!String(response).startsWith(")]}',")) {
        throw new Error('Something went wrong!');
      }
      return User.fromApiForProfileWeb(response);
    } catch (err: unknown) {
      const error = err as AxiosError;
      throw new Error(error.message || 'Something went wrong!');
    }
  }
}

export class UserRepositoryBackendImpl implements UserRepository {
  constructor() {}
  async getProfileWeb(params?: UserQueryParams): Promise<User> {
    try {
      const mockResponse: UserProfileWebResponseDTO = [
        true,
        [
          User.encodeData('test_id'),
          User.encodeData('Fatih M. Ridho'),
          [
            User.encodeData('Software Development'),
            'test',
            'teest',
            [['https://dummyimage.com/600x400/000/fff', 'https://fatihmuhamadridho.vercel.app/']],
          ],
        ],
      ];
      return Promise.resolve(User.toResponseApi(mockResponse));
    } catch (err: unknown) {
      return err as any;
    }
  }
}
