import { Visitor } from '@/core/domains/models/visitor.model';
import { VisitorFERepository } from '@/core/domains/repositories/visitor.fe.repository';
import { CreateVisitPayload, CreateVisitResponseDTO } from '@/core/domains/types/visitor.type';
import { Security } from '@/core/domains/models/security.model';
import { HttpService } from '../services/http.service';

export class VisitorFERepositoryImpl implements VisitorFERepository {
  constructor(private httpService: HttpService) {}

  async createVisit(payload: CreateVisitPayload): Promise<CreateVisitResponseDTO> {
    try {
      const response = await this.httpService.post('/visitor', payload);
      const rawData = Security.fromXXSIProtection(response);
      const model = Visitor.toModelData(Visitor.visitorTupleMapper.toObject(rawData[1]));
      return {
        data: model,
        meta: null,
        status: rawData?.[0],
      };
    } catch (error: any) {
      throw {
        code: error?.response?.data?.code || 'CLIENT_ERROR',
        message: error?.response?.data?.message || error?.message || 'Something went wrong!',
      };
    }
  }
}
