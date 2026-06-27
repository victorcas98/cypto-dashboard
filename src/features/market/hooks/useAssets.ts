import { useQuery } from "@tanstack/react-query";
import type { Asset } from "../types/assets";
import { getAssets } from "../services/marketApi";
import { useMarketFilters } from "../store/marketFilters";

export function useAssets() {
  const search = useMarketFilters((state) => state.search);
  const page = useMarketFilters((state) => state.page);

  return useQuery<Asset[]>({
    queryKey: [
      "assets",
      search,
      page
    ],
    queryFn: () => getAssets(search, page),
    refetchInterval: 5000,
    retry: 2,
    staleTime: 30_000,
  });
}