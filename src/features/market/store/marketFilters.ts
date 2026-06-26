import { create } from "zustand";

interface MarketFilters {
  search: string;
  setSearch: (value: string) => void;
}

export const useMarketFilters = create<MarketFilters>((set) => ({
  search: "",
  setSearch: (value) => {
    set({
      search: value,
    });
  },
}));