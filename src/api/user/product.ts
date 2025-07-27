import apiUser from "@/api/common/apiUser";
<<<<<<< HEAD
import {
  type RankingRequestParams,
  type CardItemData,
  type ProductDetailDataDto,
  type ProductSummaryResponse,
  type ProductDetail,
  type ProductDetailResponse,
  type ProductReview,
  type ProductReviewResponse,
=======
import type {
  RankingRequestParams,
  CardItemData,
  ProductDetailDataDto,
  ProductSummaryResponse,
>>>>>>> e4ed04b (feat: 상품 랭킹 섹션 useRanking 훅 구현 및 API 연동)
} from "@/types/DTO/productDTO";

export async function getRanking({
  targetType,
  rankType,
}: RankingRequestParams): Promise<CardItemData[]> {
  const response = await apiUser.get<ProductDetailDataDto>(
    "/products/ranking",
    {
      params: {
        targetType,
        rankType,
      },
    }
  );
  return response.data.data;
}

export async function getProductSummary(
  productId: number
): Promise<ProductSummaryResponse> {
  const response = await apiUser.get<ProductSummaryResponse>(
    `/products/${productId}/summary`
  );
  return response.data;
}

export async function getProductInfo(productId: number): Promise<CardItemData> {
  const response = await apiUser.get<{ data: CardItemData }>(
    `/products/${productId}`
  );
  return response.data.data;
}

export async function getproductDetailInfo(
  productId: number
): Promise<ProductDetail> {
  const response = await apiUser.get<ProductDetailResponse>(
    `/products/${productId}/detail`
  );
  return response.data.data;
}

export async function getProductReviewInfo(
  productId: number
): Promise<ProductReview> {
  const response = await apiUser.get<ProductReviewResponse>(
    `/products/${productId}/highlight-review`
  );
  return response.data.data;
}
