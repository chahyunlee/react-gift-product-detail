import apiUser from "@/api/common/apiUser";
import type {
  ProductWishInfo,
  ProductWishInfoResponse,
} from "@/types/DTO/productDTO";

export async function getWishInfo(productId: number): Promise<ProductWishInfo> {
  const response = await apiUser.get<ProductWishInfoResponse>(
    `products/${productId}/wish`
  );
  return response.data.data;
}
