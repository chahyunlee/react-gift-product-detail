import { useInfiniteQuery } from "@tanstack/react-query";
import { getThemeProducts } from "@/api/user/theme";
import type { CardItemData } from "@/types/DTO/productDTO";

interface ThemeProductsResponse {
  list: CardItemData[];
  cursor: number;
  hasMoreList: boolean;
}

export const useGetThemeProducts = (themeId: number, limit: number = 15) => {
  return useInfiniteQuery<
    ThemeProductsResponse,
    Error,
    ThemeProductsResponse,
    (string | number)[],
    number
  >({
    queryKey: ["themeProducts", themeId],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getThemeProducts(themeId, pageParam, limit),
    getNextPageParam: (lastPage) => {
      return lastPage.hasMoreList ? lastPage.cursor : undefined;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    enabled: !!themeId,
  });
};
