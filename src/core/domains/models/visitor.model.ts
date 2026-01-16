import { Security } from './security.model';
import { TupleMapper } from './tupleMapper.model';
import { VisitorModelData } from '../types/visitor.type';

export class Visitor {
  constructor(
    public readonly id: string,
    public path: string,
    public referer?: string,
    public user_agent?: string,
    public ip?: string,
    public locale?: string,
    public created_at?: Date,
  ) {}

  static visitorTupleMapper = new TupleMapper<Visitor>(
    ['id', 'path', 'referer', 'user_agent', 'ip', 'locale', 'created_at'],
    {
      beforeWrite: (val) => (typeof val === 'string' ? Security.encodeValue(val) : val),
      afterRead: (val) => (typeof val === 'string' ? Security.decodeValue(val) : val),
    },
  );

  static toModelData(data: VisitorModelData): Visitor {
    const id = data.id || '';
    const path = data.path || '';
    return new Visitor(
      id,
      path,
      data.referer,
      data.user_agent,
      data.ip,
      data.locale,
      data.created_at ? new Date(data.created_at) : undefined,
    );
  }
}
