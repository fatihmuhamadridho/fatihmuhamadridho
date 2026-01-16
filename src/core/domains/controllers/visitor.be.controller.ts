import { CreateVisitUseCase } from '../usecases/visitor.be.usecase';
import { VisitorBERepositoryImpl } from '@/core/infrastructures/repositories/visitor.be.repository.impl';
import { PrismaClient } from '@/core/infrastructures/services/prisma';
import { CreateVisitPayload } from '../types/visitor.type';

export class VisitorBEController {
  private createVisitUseCase: CreateVisitUseCase;

  constructor() {
    const impl = new VisitorBERepositoryImpl(new PrismaClient());
    this.createVisitUseCase = new CreateVisitUseCase(impl);
  }

  createVisit(payload: CreateVisitPayload) {
    return this.createVisitUseCase.execute(payload);
  }
}
