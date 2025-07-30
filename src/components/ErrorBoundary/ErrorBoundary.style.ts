import styled from "@emotion/styled";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;
`;

export const ErrorTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const RetryButton = styled.button`
  background-color: #fee500;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fdd835;
  }
`;
