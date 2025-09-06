import { GetProfileUserQueryParams, GetProfileUserResponseDTO } from '../types/user.type';

export interface UserFERepository {
  getProfileUser(params?: GetProfileUserQueryParams): Promise<GetProfileUserResponseDTO>;
}
