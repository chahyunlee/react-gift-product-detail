import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { cardData } from "@/mockdata/cardData";
import {
  Wrapper,
  Container,
  ImageWrapper,
  Img,
  Title,
  Price,
  BrandWrapper,
  BrandImg,
  Brand,
  SectionDivider,
  TabWrapper,
  TabButton,
  Content,
  LikeSection,
  OrderButton,
  BottomBar,
} from "@/pages/DetailPage/DetailPage.style";

const DetailPage = () => {
  const item = cardData[0];
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(11341);
  const [activeTab, setActiveTab] = useState<"description" | "review" | "info">(
    "description"
  );

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return "1";
      case "review":
        return "2";
      case "info":
        return "3";
      default:
        return "";
    }
  };

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Container>
          <ImageWrapper>
            <Img src={item.imageURL} alt={item.name} />
          </ImageWrapper>
          <Title>{item.name}</Title>
          <Price>{item.price.sellingPrice.toLocaleString()}원</Price>
          <SectionDivider height="1px" />
          <BrandWrapper>
            <BrandImg src={item.brandInfo.imageURL} alt={item.brandInfo.name} />
            <Brand>{item.brandInfo.name}</Brand>
          </BrandWrapper>
        </Container>
        <SectionDivider />
        <Container>
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
        </Container>
      </Wrapper>
      <BottomBar>
        <LikeSection onClick={handleLikeToggle}>
          {liked ? (
            <FaHeart size={14} color="#f44336" />
          ) : (
            <FaRegHeart size={14} color="#999" />
          )}
          <div>{likeCount}</div>
        </LikeSection>
        <OrderButton>주문하기</OrderButton>
      </BottomBar>
    </>
  );
};

export default DetailPage;
