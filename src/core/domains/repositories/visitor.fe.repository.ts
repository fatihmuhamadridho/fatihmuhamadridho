import { CreateVisitPayload, CreateVisitResponseDTO } from '../types/visitor.type';

export interface VisitorFERepository {
  createVisit(payload: CreateVisitPayload): Promise<CreateVisitResponseDTO>;
}
