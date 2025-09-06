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
      const rawDataFromTuple = User.userTupleMapper.toObject(rawData[1]);
      const decodeData = {
        ...rawDataFromTuple,
        password: '',
      };
      const modelData = User.toModelData(decodeData);
      return {
        data: modelData,
        meta: null,
      };
    } catch (error: any) {
      throw {
        code: error?.response?.data?.code || 'CLIENT_ERROR',
        message: error?.response?.data?.message || error?.message || 'Something went wrong!',
      };
    }
  }
}
