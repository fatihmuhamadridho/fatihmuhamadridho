import { User } from '@/core/domains/models/user.model';
import { UserFERepository } from '@/core/domains/repositories/user.fe.repository';
import { GetProfileUserQueryParams } from '@/core/domains/types/user.type';
import { HttpService } from '../services/http.service';
import { AxiosError } from 'axios';

export class UserFERepositoryImpl implements UserFERepository {
  constructor(private httpService: HttpService) {}
  async getProfileUser(params?: GetProfileUserQueryParams): Promise<User> {
    try {
      const response = await this.httpService.get('/profile', { params: { u: User.encodeValue(params?.u || '') } });
      const rawData = User.fromTupleData(response);
      const decodeData = {
        id: User.decodeValue(rawData[0]),
        username: User.decodeValue(rawData[1]),
        email: User.decodeValue(rawData[2]),
        password: User.decodeValue(rawData[3]),
        fullname: User.decodeValue(rawData[4]),
        phone: User.decodeValue(rawData[5]),
        detail: {
          role: User.decodeValue(rawData[6][0]),
          short_description: {
            id: User.decodeValue(rawData[6][1][0]),
            en: User.decodeValue(rawData[6][1][1]),
          },
          long_description: {
            id: User.decodeValue(rawData[6][2][0]),
            en: User.decodeValue(rawData[6][2][1]),
          },
          social_media: rawData[6][3][0].map((item: any[]) => ({
            icon: User.decodeValue(item[0]),
            url: User.decodeValue(item[1]),
          })),
        },
      };
      const modelData = User.toModelData(decodeData);
      return modelData;
    } catch (err: unknown) {
      const error = err as AxiosError;
      throw new Error(error?.message);
    }
  }
}
