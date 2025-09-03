import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { BaseUseCase } from '../types/base.type';
import { UserQueryParams } from '../types/user.type';

export class GetProfileWebUsecase implements BaseUseCase<UserQueryParams, User> {
  constructor(private userRepository: UserRepository) {}
  execute(params?: UserQueryParams | undefined): Promise<User> {
    return this.userRepository.getProfileWeb(params);
  }
}
