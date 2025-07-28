import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth/auth";
import type { LoginRequestDto, LoginResponseDto } from "@/types/DTO/authDTO";

export const useLogin = () => {
  return useMutation<LoginResponseDto, Error, LoginRequestDto>({
    mutationFn: login,
    onError: (error: any) => {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.data?.message || "";

        if (status >= 400 && status < 500) {
          if (message.includes("email") || message.includes("kakao")) {
            throw new Error("@kakao.com 이메일 주소만 가능합니다.");
          } else {
            throw new Error(error.response.data.message || "잘못된 요청입니다.");
          }
        } else if (status >= 500) {
          throw new Error("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } else {
          throw new Error("알 수 없는 오류가 발생했습니다.");
        }
      } else {
        throw new Error("네트워크 오류가 발생했습니다.");
      }
    },
  });
}; 