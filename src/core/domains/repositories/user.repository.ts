import { User } from '../models/user.model';
import { UserQueryParams } from '../types/user.type';

export interface UserRepository {
  getProfileWeb(params?: UserQueryParams): Promise<User>;
}
