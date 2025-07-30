<<<<<<< HEAD
import type { ProductDetail, ProductReview, ProductReviewItem, AnnouncementItem } from "@/types/DTO/productDTO";
=======
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
import {
  TabWrapper,
  TabButton,
  Content,
  HtmlContentWrapper,
} from "@/pages/DetailPage/components/ProductTabSection/ProductTabSection.style";

interface ProductTabsProps {
  activeTab: "description" | "review" | "info";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"description" | "review" | "info">
  >;
<<<<<<< HEAD
  detailInfo?: ProductDetail;
  reviewData?: ProductReview;
=======
  detailInfo?: any;
  reviewData?: any;
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
  isReviewLoading?: boolean;
  isReviewError?: boolean;
}

const ProductTabs = ({
  activeTab,
  setActiveTab,
  detailInfo,
  reviewData,
  isReviewLoading,
  isReviewError,
}: ProductTabsProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <HtmlContentWrapper
            dangerouslySetInnerHTML={{ __html: detailInfo?.description ?? "" }}
          />
        );
      case "review":
        if (isReviewLoading) return <div>리뷰 로딩 중...</div>;
        if (isReviewError) return <div>리뷰를 불러오지 못했습니다.</div>;
        if (!reviewData || reviewData.reviews.length === 0)
          return <div>리뷰가 없습니다.</div>;

        return (
          <ul style={{ listStyle: "none", padding: 0 }}>
<<<<<<< HEAD
            {reviewData.reviews.map((review: ProductReviewItem, idx: number) => {
=======
            {reviewData.reviews.map((review: any, idx: number) => {
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
              const isLast = idx === reviewData.reviews.length - 1;
              return (
                <li
                  key={review.id}
                  style={{
                    padding: "12px",
                    marginBottom: isLast ? "24px" : "8px",
                  }}
                >
                  <strong
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {review.authorName}
                  </strong>
                  <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                    {review.content}
                  </p>
                </li>
              );
            })}
          </ul>
        );

      case "info":
        if (
          !detailInfo ||
          !detailInfo.announcements ||
          detailInfo.announcements.length === 0
        )
          return <div>상세정보가 없습니다.</div>;

        return (
          <div style={{ padding: "16px", lineHeight: "1.6" }}>
            {detailInfo.announcements
<<<<<<< HEAD
              .sort((a: AnnouncementItem, b: AnnouncementItem) => a.displayOrder - b.displayOrder)
              .map(({ name, value }: AnnouncementItem) => (
=======
              .sort((a: any, b: any) => a.displayOrder - b.displayOrder)
              .map(({ name, value }: any) => (
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
                <div key={name} style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      lineHeight: "1.5",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <TabWrapper>
        <TabButton
          onClick={() => setActiveTab("description")}
          active={activeTab === "description"}
        >
          상품설명
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("review")}
          active={activeTab === "review"}
        >
          선물후기
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("info")}
          active={activeTab === "info"}
        >
          상세정보
        </TabButton>
      </TabWrapper>
      <Content>{renderContent()}</Content>
    </>
  );
};

export default ProductTabs;
