import { useQuery } from "@tanstack/react-query";
import { getThemeInfo } from "@/api/user/theme";
import type { ThemeInfoResponseDTO } from "@/types/DTO/themeDTO";

export const useGetThemeInfo = (themeId: number) => {
  return useQuery<ThemeInfoResponseDTO>({
    queryKey: ["themeInfo", themeId],
    queryFn: () => getThemeInfo(themeId),
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled: !!themeId,
  });
};
