import { Visitor } from '../models/visitor.model';
import { BaseResponse } from './base.type';

export type CreateVisitPayload = {
  path: string;
  referer?: string;
  user_agent?: string;
  ip?: string;
  locale?: string;
};

export type CreateVisitResponseDTO = BaseResponse<Visitor>;

export type VisitorModelData = {
  readonly id: string;
  path: string;
  referer?: string;
  user_agent?: string;
  ip?: string;
  locale?: string;
  created_at?: string | Date;
};
