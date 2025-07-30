import { useQuery } from "@tanstack/react-query";
import { getproductDetailInfo } from "@/api/user/product";
import type { ProductDetail } from "@/types/DTO/productDTO";

export function useGetProductDetailInfo(productId: number) {
  return useQuery<ProductDetail>({
    queryKey: ["productDetailInfo", productId],
    queryFn: () => getproductDetailInfo(productId),
    enabled: !!productId,
  });
}
