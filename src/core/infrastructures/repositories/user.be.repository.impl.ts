import { UserBERepository } from '@/core/domains/repositories/user.be.repository';
import { PrismaClient } from '../services/prisma';
import { FindOneProfileQueryParams, UserModelData } from '@/core/domains/types/user.type';
import { PrismaClientKnownRequestError } from '../services/prisma/runtime/library';
import { User } from '@/core/domains/models/user.model';

export class UserBERepositoryImpl implements UserBERepository {
  constructor(private prisma: PrismaClient) {}
  async findOneProfile(params?: FindOneProfileQueryParams): Promise<any> {
    try {
      const data = await this.prisma.user.findUniqueOrThrow({ where: { username: User.decodeValue(params?.u || '') } });
      const encodeData: UserModelData = {
        id: User.encodeValue(data.user_id),
        username: User.encodeValue(data.username),
        email: User.encodeValue(data.email),
        password: User.encodeValue(data.password),
        fullname: User.encodeValue(data.fullname),
        phone: User.encodeValue(data.phone),
        detail: {
          long_description: {
            id: User.encodeValue((data.detail.long_description as any)?.id),
            en: User.encodeValue((data.detail.long_description as any)?.en),
          },
          short_description: {
            id: User.encodeValue((data.detail.short_description as any)?.id),
            en: User.encodeValue((data.detail.short_description as any)?.en),
          },
          role: User.encodeValue(data.detail.role),
          social_media: (data.detail.social_media as any[])?.map((item) => ({
            icon: User.encodeValue(item.icon),
            url: User.encodeValue(item.url),
          })),
        },
      };
      const dataModel = User.toModelData(encodeData);
      const response = User.toTupleData(dataModel);
      return response;
    } catch (err: unknown) {
      const error = err as PrismaClientKnownRequestError;
      throw {
        code: error?.code || 'SERVER_ERROR',
        message: error?.meta?.cause || 'Something went wrong!',
      };
    }
  }
}
