<<<<<<< HEAD
import type { CardItemData, ProductDetail } from "@/types/DTO/productDTO";
=======
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
import {
  ImageWrapper,
  Img,
  Title,
  Price,
  BrandWrapper,
  BrandImg,
  Brand,
} from "@/pages/DetailPage/components/ProductInfoSection/ProductInfoSection.style";
import { SectionDivider } from "@/pages/DetailPage/DetailPage.style";
<<<<<<< HEAD

interface ProductInfoProps {
  item: CardItemData;
  detailInfo?: ProductDetail;
=======
interface ProductInfoProps {
  item: any;
  detailInfo?: any;
>>>>>>> 6d2bb8b (refactor: 상품 상세 페이지 section 분리)
}

const ProductInfo = ({ item }: ProductInfoProps) => {
  return (
    <>
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
    </>
  );
};

export default ProductInfo;
