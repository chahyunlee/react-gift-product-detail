import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductInfo } from "@/hooks/useGetProductInfo";
import { useGetProductDetailInfo } from "@/hooks/useGetProductDetailInfo";
import { useGetProductReviewInfo } from "@/hooks/useGetProductReviewInfo";
import { useGetProductWishInfo } from "@/hooks/useGetProductWishInfo";
import ProductInfoSection from "@/pages/DetailPage/components/ProductInfoSection/ProductInfoSection";
import LikeSection from "@/pages/DetailPage/components/LikeSection/LikeSection";
import ProductTabSection from "@/pages/DetailPage/components/ProductTabSection/ProductTabSection";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {
  Wrapper,
  Container,
  SectionDivider,
  OrderButton,
  BottomBar,
} from "@/pages/DetailPage/DetailPage.style";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const [activeTab, setActiveTab] = useState<"description" | "review" | "info">(
    "description"
  );

  const { data: item, isLoading, isError } = useGetProductInfo(productId);
  const { data: detailInfo } = useGetProductDetailInfo(productId);
  const {
    data: reviewData,
    isLoading: isReviewLoading,
    isError: isReviewError,
  } = useGetProductReviewInfo(productId);

  const { data: wishInfo } = useGetProductWishInfo(productId);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (wishInfo) {
      setLiked(wishInfo.isWished);
      setLikeCount(wishInfo.wishCount);
    }
  }, [wishInfo]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !item) return <div>상품 정보를 불러오지 못했습니다.</div>;

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Container>
          <ProductInfoSection item={item} detailInfo={detailInfo} />
        </Container>
        <SectionDivider />
        <Container>
          <ProductTabSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            detailInfo={detailInfo}
            reviewData={reviewData}
            isReviewLoading={isReviewLoading}
            isReviewError={isReviewError}
          />
        </Container>
      </Wrapper>
      <BottomBar>
        <LikeSection
          isLiked={liked}
          likeCount={likeCount}
          onToggle={handleLikeToggle}
        />
        <OrderButton>주문하기</OrderButton>
      </BottomBar>
    </>
  );
};

export default DetailPage;
