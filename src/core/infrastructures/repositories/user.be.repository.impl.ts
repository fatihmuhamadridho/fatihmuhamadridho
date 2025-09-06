import { UserBERepository } from '@/core/domains/repositories/user.be.repository';
import { PrismaClient } from '../services/prisma';
import { FindOneProfileQueryParams, UserModelData } from '@/core/domains/types/user.type';
import { PrismaClientKnownRequestError } from '../services/prisma/runtime/library';
import { User } from '@/core/domains/models/user.model';
import { Security } from '@/core/domains/models/security.model';

export class UserBERepositoryImpl implements UserBERepository {
  constructor(private prisma: PrismaClient) {}
  async findOneProfile(params?: FindOneProfileQueryParams): Promise<any> {
    try {
      const data = await this.prisma.user.findUniqueOrThrow({
        where: { username: Security.decodeValue(params?.u || '') },
        include: { Experience: { orderBy: { start_date: 'desc' } }, Project: { orderBy: { date: 'desc' } } },
      });
      const encodeData: UserModelData = {
        ...data,
        id: data.user_id,
        detail: {
          ...data.detail,
          long_description: {
            id: (data.detail.long_description as any)?.id,
            en: (data.detail.long_description as any)?.en,
          },
          short_description: {
            id: (data.detail.short_description as any)?.id,
            en: (data.detail.short_description as any)?.en,
          },
          social_media: (data.detail.social_media as any[])?.map((item) => ({
            icon: item.icon,
            url: item.url,
          })),
        },
        experiences: data.Experience.map((item) => ({
          id: item.experience_id,
          ...item,
        })),
        projects: data.Project.map((item) => ({
          ...item,
          id: item.project_id,
          link: {
            title: item.link?.alias || '',
            url: item.link?.href || '',
          },
        })),
      };
      const dataModel = User.toModelData(encodeData);
      const response = User.userTupleMapper.toTuple(dataModel);
      return Security.toXXSIProtection([true, response]);
    } catch (err: unknown) {
      const error = err as PrismaClientKnownRequestError;
      if (error.code === 'P2025') {
        throw {
          statusCode: 404,
          code: 'FAILED_GET_PROFILE',
          message: error?.meta?.cause || 'Something went wrong!',
        };
      }
      throw {
        statusCode: 500,
        code: error?.code || 'SERVER_ERROR',
        message: error?.meta?.cause || error?.message || 'Something went wrong!',
      };
    }
  }
}
