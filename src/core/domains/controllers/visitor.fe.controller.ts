import { VisitorFERepositoryImpl } from '@/core/infrastructures/repositories/visitor.fe.repository.impl';
import { CreateVisitFEUseCase } from '../usecases/visitor.fe.usecase';
import { HttpService } from '@/core/infrastructures/services/http.service';
import { CreateVisitPayload } from '../types/visitor.type';

export class VisitorFEController {
  private createVisitUseCase: CreateVisitFEUseCase;

  constructor() {
    const impl = new VisitorFERepositoryImpl(new HttpService());
    this.createVisitUseCase = new CreateVisitFEUseCase(impl);
  }

  createVisit(payload: CreateVisitPayload) {
    return this.createVisitUseCase.execute(payload);
  }
}
