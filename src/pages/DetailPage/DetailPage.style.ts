import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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

export const SectionDivider = styled.div<{ height?: string }>`
  height: ${({ height }) => height || "4px"};
  background: ${({ theme }) => theme.colors.gray300};
  margin: ${({ theme }) => theme.spacing.spacing3} 0;
  width: 100%;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px 0;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active, theme }) => (active ? "#000" : theme.colors.gray500)};
  border: none;
  border-bottom: ${({ active }) =>
    active ? "1px solid black" : "2px solid transparent"};
  background-color: transparent;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 24px 8px;
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
`;

export const BottomBar = styled.div`
  display: flex;
  gap: 0;
  position: fixed;
  bottom: 0;
  min-width: 720px;
  height: 54px;
  border: none;
  outline: none;
  z-index: 1000;
`;

export const LikeSection = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray00};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray600};
  gap: 6px;
  cursor: pointer;
`;

export const OrderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  flex: 1;
  height: 100%;
  padding: 12px 40px;
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
`;

export const HtmlContentWrapper = styled.div`
  max-width: 100%;
  overflow-x: hidden;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    word-break: break-word;
  }
`;
