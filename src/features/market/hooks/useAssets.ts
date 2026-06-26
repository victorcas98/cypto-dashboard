import { useQuery } from "@tanstack/react-query";
import type { Asset } from "../types/assets";
import { getAssets } from "../services/marketApi";
import { useMarketFilters } from "../store/marketFilters";

export function useAssets() {
  const search = useMarketFilters(
    (state) => state.search
  );

  return useQuery<Asset[]>({
    queryKey: [
      "assets",
      search,
    ],
    queryFn: () => getAssets(search),
  });
}