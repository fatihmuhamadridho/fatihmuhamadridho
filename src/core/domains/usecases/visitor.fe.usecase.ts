import { VisitorFERepository } from '../repositories/visitor.fe.repository';
import { CreateVisitPayload } from '../types/visitor.type';

export class CreateVisitFEUseCase {
  constructor(private repo: VisitorFERepository) {}

  async execute(payload: CreateVisitPayload) {
    return this.repo.createVisit(payload);
  }
}
