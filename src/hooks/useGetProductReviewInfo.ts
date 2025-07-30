import { useQuery } from "@tanstack/react-query";
import { getProductReviewInfo } from "@/api/user/product";
import type { ProductReview } from "@/types/DTO/productDTO";

export function useGetProductReviewInfo(productId: number) {
  return useQuery<ProductReview>({
    queryKey: ["productReviewInfo", productId],
    queryFn: () => getProductReviewInfo(productId),
    enabled: !!productId,
  });
}
