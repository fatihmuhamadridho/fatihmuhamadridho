import { VisitorBERepository } from '@/core/domains/repositories/visitor.be.repository';
import { PrismaClient } from '../services/prisma';
import { CreateVisitPayload, VisitorModelData } from '@/core/domains/types/visitor.type';
import { Visitor } from '@/core/domains/models/visitor.model';
import { Security } from '@/core/domains/models/security.model';

export class VisitorBERepositoryImpl implements VisitorBERepository {
  constructor(private prisma: PrismaClient) {}

  async createVisit(payload: CreateVisitPayload): Promise<any> {
    const created = await this.prisma.visitor.create({
      data: {
        path: payload.path,
        referer: payload.referer,
        user_agent: payload.user_agent,
        ip: payload.ip,
        locale: payload.locale,
      },
    });

    const mapped: VisitorModelData = {
      id: created.visitor_id,
      path: created.path,
      referer: created.referer || undefined,
      user_agent: created.user_agent || undefined,
      ip: created.ip || undefined,
      locale: created.locale || undefined,
      created_at: created.created_at,
    };

    const model = Visitor.toModelData(mapped);
    const tuple = Visitor.visitorTupleMapper.toTuple(model);
    return Security.toXXSIProtection([true, tuple]);
  }
}
