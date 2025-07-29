import { useQuery } from "@tanstack/react-query";
import { getRanking } from "@/api/user/product";
import type {
  RankingRequestParams,
  CardItemData,
} from "@/types/DTO/productDTO";

export const useRanking = (params: RankingRequestParams) => {
  return useQuery<CardItemData[]>({
    queryKey: ["ranking", params.targetType, params.rankType],
    queryFn: () => getRanking(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
