import { UserBERepository } from '../repositories/user.be.repository';
import { FindOneProfileQueryParams } from '../types/user.type';

export class FindOneProfileUseCase {
  constructor(private repo: UserBERepository) {}
  async execute(params?: FindOneProfileQueryParams) {
    try {
      const response = await this.repo.findOneProfile(params);
      return response;
    } catch (err: any) {
      throw err;
    }
  }
}
