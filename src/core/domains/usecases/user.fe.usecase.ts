import { UserFERepository } from '../repositories/user.fe.repository';
import { GetProfileUserQueryParams } from '../types/user.type';

export class GetProfileUserUseCase {
  constructor(private repo: UserFERepository) {}
  async execute(params?: GetProfileUserQueryParams) {
    const response = await this.repo.getProfileUser(params);
    return response;
  }
}
