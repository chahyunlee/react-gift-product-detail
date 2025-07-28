import { useQuery } from "@tanstack/react-query";
import { getThemes } from "@/api/user/theme";
import type { Themetype } from "@/types/DTO/themeDTO";

export const useThemes = () => {
  return useQuery<Themetype[]>({
    queryKey: ["themes"],
    queryFn: getThemes,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
