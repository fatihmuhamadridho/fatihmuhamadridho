import { UserFERepositoryImpl } from '@/core/infrastructures/repositories/user.fe.repository.impl';
import { GetProfileUserUseCase } from '../usecases/user.fe.usecase';
import { HttpService } from '@/core/infrastructures/services/http.service';
import { GetProfileUserQueryParams } from '../types/user.type';

export class UserFEController {
  private getProfileUserUseCase: GetProfileUserUseCase;

  constructor() {
    const impl = new UserFERepositoryImpl(new HttpService());
    this.getProfileUserUseCase = new GetProfileUserUseCase(impl);
  }

  getProfileUser(params?: GetProfileUserQueryParams) {
    return this.getProfileUserUseCase.execute(params);
  }
}
