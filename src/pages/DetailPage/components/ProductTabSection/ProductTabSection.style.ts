import styled from "@emotion/styled";

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
