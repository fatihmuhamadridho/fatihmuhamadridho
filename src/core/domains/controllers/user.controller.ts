import { GetProfileWebUsecase } from '../usecases/user.usecase';
import { UserQueryParams } from '../types/user.type';
import { UserRepository } from '../repositories/user.repository';

export class UserController {
  private getProfileWebUsecase: GetProfileWebUsecase;

  constructor(private userRepository: UserRepository) {
    this.getProfileWebUsecase = new GetProfileWebUsecase(this.userRepository);
  }

  getProfileWeb(params?: UserQueryParams) {
    return this.getProfileWebUsecase.execute(params);
  }
}
