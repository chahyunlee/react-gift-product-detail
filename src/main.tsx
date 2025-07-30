import "pretendard/dist/web/static/pretendard.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import theme from "@/styles/theme/index";
import App from "@/App";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import SuspenseWrapper from "@/components/SuspenseWrapper/SuspenseWrapper";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <SuspenseWrapper>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </SuspenseWrapper>
    </ErrorBoundary>
  </StrictMode>
);
