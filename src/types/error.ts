export interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
      data?: {
        message?: string;
      };
    };
  };
  message?: string;
}

export interface AxiosErrorResponse {
  response?: {
    status?: number;
    data?: {
      message?: string;
      data?: {
        message?: string;
      };
    };
  };
  message?: string;
} 