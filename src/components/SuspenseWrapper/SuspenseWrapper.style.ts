import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #fee500;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;
