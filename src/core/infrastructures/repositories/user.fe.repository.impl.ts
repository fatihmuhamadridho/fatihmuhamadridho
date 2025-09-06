import { User } from '@/core/domains/models/user.model';
import { UserFERepository } from '@/core/domains/repositories/user.fe.repository';
import { GetProfileUserQueryParams, GetProfileUserResponseDTO, UserModelData } from '@/core/domains/types/user.type';
import { HttpService } from '../services/http.service';
import { Security } from '@/core/domains/models/security.model';

export class UserFERepositoryImpl implements UserFERepository {
  constructor(private httpService: HttpService) {}
  async getProfileUser(params?: GetProfileUserQueryParams): Promise<GetProfileUserResponseDTO> {
    try {
      const response = await this.httpService.get('/profile', { params: { u: Security.encodeValue(params?.u || '') } });
      const rawData = Security.fromXXSIProtection(response);
      const rawDataFromTuple = User.userTupleMapper.toObject(rawData[1]);
      const decodeData: UserModelData = {
        id: Security.decodeValue(rawDataFromTuple.id),
        username: Security.decodeValue(rawDataFromTuple.username),
        email: Security.decodeValue(rawDataFromTuple.email),
        password: '',
        fullname: Security.decodeValue(rawDataFromTuple.fullname),
        phone: Security.decodeValue(rawDataFromTuple.phone),
        detail: {
          role: Security.decodeValue(rawDataFromTuple.detail.role),
          short_description: {
            id: Security.decodeValue(rawDataFromTuple.detail.short_description.id),
            en: Security.decodeValue(rawDataFromTuple.detail.short_description.en),
          },
          long_description: {
            id: Security.decodeValue(rawDataFromTuple.detail.long_description.id),
            en: Security.decodeValue(rawDataFromTuple.detail.long_description.id),
          },
          social_media: rawDataFromTuple.detail.social_media.map((item) => ({
            icon: Security.decodeValue(item.icon),
            url: Security.decodeValue(item.url),
          })),
        },
        experiences: rawDataFromTuple.experiences?.map((item) => ({
          id: Security.decodeValue(item.id),
          company: Security.decodeValue(item.company),
          role: Security.decodeValue(item.role),
          type: Security.decodeValue(item.type),
          description: Security.decodeValue(item.description),
          tools: item.tools.map((tool) => Security.decodeValue(tool)),
          start_date: Security.decodeValue(item.start_date),
          end_date: Security.decodeValue(item.end_date),
          is_present: item.is_present,
          is_show: item.is_show,
        })),
        projects: rawDataFromTuple.projects?.map((item) => ({
          id: Security.decodeValue(item.id),
          title: Security.decodeValue(item.title),
          description: Security.decodeValue(item.description),
          role: Security.decodeValue(item.role),
          thumbnail: Security.decodeValue(item.thumbnail),
          tools: item.tools.map((tool) => Security.decodeValue(tool)),
          made_at: Security.decodeValue(item.made_at),
          date: Security.decodeValue(item.date),
          link: {
            title: Security.decodeValue(item.link?.title || ''),
            url: Security.decodeValue(item.link?.url || ''),
          },
        })),
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
