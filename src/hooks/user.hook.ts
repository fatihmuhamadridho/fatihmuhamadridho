import { UserController } from '@/core/domains/controllers/user.controller';
import { UserQueryParams } from '@/core/domains/types/user.type';
import { UserRepositoryFrontendImpl } from '@/core/infrastructures/repositories/user.repository.impl';
import { HttpService } from '@/core/infrastructures/services/http.service';
import { useQuery } from '@tanstack/react-query';
import useSWR from 'swr';

const httpService = new HttpService();
const userRepositoryFrontendImpl = new UserRepositoryFrontendImpl(httpService);
const userController = new UserController(userRepositoryFrontendImpl);

export const useUserProfile = (params?: UserQueryParams) => {
  return useQuery({
    queryKey: ['user_profile', params],
    queryFn: () => userController.getProfileWeb(params),
  });
};

export const useUserProfileSWR = (params?: UserQueryParams) => {
  return useSWR('/api/profile', () => userController.getProfileWeb(params));
};
