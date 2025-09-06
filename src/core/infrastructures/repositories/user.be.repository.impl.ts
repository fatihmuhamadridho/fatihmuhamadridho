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
        id: Security.encodeValue(data.user_id),
        username: Security.encodeValue(data.username),
        email: Security.encodeValue(data.email),
        password: Security.encodeValue(data.password),
        fullname: Security.encodeValue(data.fullname),
        phone: Security.encodeValue(data.phone),
        detail: {
          long_description: {
            id: Security.encodeValue((data.detail.long_description as any)?.id),
            en: Security.encodeValue((data.detail.long_description as any)?.en),
          },
          short_description: {
            id: Security.encodeValue((data.detail.short_description as any)?.id),
            en: Security.encodeValue((data.detail.short_description as any)?.en),
          },
          role: Security.encodeValue(data.detail.role),
          social_media: (data.detail.social_media as any[])?.map((item) => ({
            icon: Security.encodeValue(item.icon),
            url: Security.encodeValue(item.url),
          })),
        },
        experiences: data.Experience.map((item) => ({
          id: Security.encodeValue(item.experience_id),
          company: Security.encodeValue(item.company),
          role: Security.encodeValue(item.role),
          type: Security.encodeValue(item.type),
          description: Security.encodeValue(item.description),
          tools: item.tools.map((tool) => Security.encodeValue(tool)),
          start_date: Security.encodeValue(item.start_date),
          end_date: Security.encodeValue(item.end_date),
          is_present: item.is_present,
          is_show: item.is_show,
        })),
        projects: data.Project.map((item) => ({
          id: Security.encodeValue(item.project_id),
          title: Security.encodeValue(item.title),
          description: Security.encodeValue(item.description),
          role: Security.encodeValue(item.role),
          thumbnail: Security.encodeValue(item.thumbnail),
          tools: item.tools.map((tool) => Security.encodeValue(tool)),
          made_at: Security.encodeValue(item.made_at),
          date: Security.encodeValue(item.date),
          link: {
            title: Security.encodeValue(item.link?.alias || ''),
            url: Security.encodeValue(item.link?.href || ''),
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
