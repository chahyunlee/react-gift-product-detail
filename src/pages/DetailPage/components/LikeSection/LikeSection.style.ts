import styled from "@emotion/styled";

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
