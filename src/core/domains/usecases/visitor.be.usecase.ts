import { VisitorBERepository } from '../repositories/visitor.be.repository';
import { CreateVisitPayload } from '../types/visitor.type';

export class CreateVisitUseCase {
  constructor(private repo: VisitorBERepository) {}
  async execute(payload: CreateVisitPayload) {
    return this.repo.createVisit(payload);
  }
}
