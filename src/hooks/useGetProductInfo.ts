import { useQuery } from "@tanstack/react-query";
import { getProductInfo } from "@/api/user/product";
import type { CardItemData } from "@/types/DTO/productDTO";

export function useGetProductInfo(productId: number) {
  return useQuery<CardItemData>({
    queryKey: ["productInfo", productId],
    queryFn: () => getProductInfo(productId),
    enabled: !!productId,
  });
}
