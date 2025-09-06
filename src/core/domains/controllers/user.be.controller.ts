import { UserBERepositoryImpl } from '@/core/infrastructures/repositories/user.be.repository.impl';
import { FindOneProfileUseCase } from '../usecases/user.be.usecase';
import { PrismaClient } from '@/core/infrastructures/services/prisma';
import { FindOneProfileQueryParams } from '../types/user.type';

export class UserBEController {
  private findOneProfileUseCase: FindOneProfileUseCase;

  constructor() {
    const impl = new UserBERepositoryImpl(new PrismaClient());
    this.findOneProfileUseCase = new FindOneProfileUseCase(impl);
  }

  findOneProfile(params?: FindOneProfileQueryParams) {
    return this.findOneProfileUseCase.execute(params);
  }
}
