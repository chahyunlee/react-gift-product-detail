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

interface ProductInfoProps {
  item: any;
  detailInfo?: any;
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
