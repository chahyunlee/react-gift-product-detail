import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/api/user/order";
import type { CreateOrderDto, OrderResponseDto } from "@/types/DTO/orderDTO";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation<OrderResponseDto, Error, CreateOrderDto>({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["userOrders"] });
    },
    onError: (error) => {
      console.error("주문 생성 실패:", error);
    },
  });
};
