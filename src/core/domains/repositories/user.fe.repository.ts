import { User } from '../models/user.model';
import { GetProfileUserQueryParams } from '../types/user.type';

export interface UserFERepository {
  getProfileUser(params?: GetProfileUserQueryParams): Promise<User>;
}
