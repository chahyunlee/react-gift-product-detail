import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
} from "@/components/ErrorBoundary/ErrorBoundary.style";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("다음과 같은 에러가 발생했습니다 :", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorTitle>오류가 발생했습니다</ErrorTitle>
          <ErrorMessage>
            페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>다시 시도</RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
