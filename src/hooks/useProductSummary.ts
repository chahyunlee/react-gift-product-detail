import { useQuery } from "@tanstack/react-query";
import { getProductSummary } from "@/api/user/product";
import type { ProductSummaryResponse } from "@/types/DTO/productDTO";

export const useProductSummary = (productId: number) => {
  return useQuery<ProductSummaryResponse>({
    queryKey: ["productSummary", productId],
    queryFn: () => getProductSummary(productId),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled: !!productId,
  });
};
