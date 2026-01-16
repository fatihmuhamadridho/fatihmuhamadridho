import { CreateVisitPayload } from '../types/visitor.type';

export interface VisitorBERepository {
  createVisit(payload: CreateVisitPayload): Promise<any>;
}
