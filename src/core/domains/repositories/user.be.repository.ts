import { FindOneProfileQueryParams } from '../types/user.type';

export interface UserBERepository {
  findOneProfile(params?: FindOneProfileQueryParams): Promise<any>;
}
