import { useQuery } from "@tanstack/react-query";
import { getProductWishInfo } from "@/api/user/wish";
import type { ProductWishInfo } from "@/types/DTO/productDTO";

export function useGetProductWishInfo(productId: number | undefined) {
  return useQuery<ProductWishInfo>({
    queryKey: ["productWish", productId],
    queryFn: () => getProductWishInfo(productId!),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });
}
