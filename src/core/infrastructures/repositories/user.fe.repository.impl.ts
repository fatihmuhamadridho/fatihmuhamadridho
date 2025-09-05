import { User } from '@/core/domains/models/user.model';
import { UserFERepository } from '@/core/domains/repositories/user.fe.repository';
import { GetProfileUserQueryParams, GetProfileUserResponseDTO } from '@/core/domains/types/user.type';
import { HttpService } from '../services/http.service';
import { Security } from '@/core/domains/models/security.model';

export class UserFERepositoryImpl implements UserFERepository {
  constructor(private httpService: HttpService) {}
  async getProfileUser(params?: GetProfileUserQueryParams): Promise<GetProfileUserResponseDTO> {
    try {
      const response = await this.httpService.get('/profile', { params: { u: Security.encodeValue(params?.u || '') } });
      const rawData = Security.fromXXSIProtection(response);
      const decodeData = {
        id: Security.decodeValue(rawData[1][0]),
        username: Security.decodeValue(rawData[1][1]),
        email: Security.decodeValue(rawData[1][2]),
        password: Security.decodeValue(rawData[1][3]),
        fullname: Security.decodeValue(rawData[1][4]),
        phone: Security.decodeValue(rawData[1][5]),
        detail: {
          role: Security.decodeValue(rawData[1][6][0]),
          short_description: {
            id: Security.decodeValue(rawData[1][6][1][0]),
            en: Security.decodeValue(rawData[1][6][1][1]),
          },
          long_description: {
            id: Security.decodeValue(rawData[1][6][2][0]),
            en: Security.decodeValue(rawData[1][6][2][1]),
          },
          social_media: rawData[1][6][3][0].map((item: any[]) => ({
            icon: Security.decodeValue(item[0]),
            url: Security.decodeValue(item[1]),
          })),
        },
      };
      const modelData = User.toModelData(decodeData);
      return {
        data: modelData,
        meta: null,
      };
    } catch (error: any) {
      throw {
        code: error?.response?.data?.code || 'SERVER_ERROR',
        message: error?.response?.data?.message || 'Something went wrong!',
      };
    }
  }
}
