import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
`;

export const Price = styled.h1`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
`;

export const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  jusify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const BrandImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Brand = styled.span`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
`;
