import { UserFEController } from '@/core/domains/controllers/user.fe.controller';
import { GetProfileUserQueryParams } from '@/core/domains/types/user.type';
import { useQuery } from '@tanstack/react-query';

const userFEController = new UserFEController();

export const useProfileUser = (params?: GetProfileUserQueryParams) => {
  return useQuery({
    queryKey: ['profile', params],
    queryFn: () => userFEController.getProfileUser(params),
  });
};
