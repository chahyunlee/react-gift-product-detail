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

export const SectionDivider = styled.div<{ height?: string }>`
  height: ${({ height }) => height || "4px"};
  background: ${({ theme }) => theme.colors.gray300};
  margin: ${({ theme }) => theme.spacing.spacing3} 0;
  width: 100%;
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
