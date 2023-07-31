import useQuery from "../../hooks/useQuery";
import { PortofolioService } from "./portofolio";

export const useGetAllPortofolio = () => {
  const { data, status, isFetching } = useQuery({
    key: ["getAllPortofolio"],
    fetchAction: async () => {
      const response = await PortofolioService.getAllPortofolio();
      return response;
    },
    select: (data: any) => {
      return data.data.data;
    },
  });

  return { data, status, isFetching };
};
