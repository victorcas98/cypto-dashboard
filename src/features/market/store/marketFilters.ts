import { create } from "zustand";

interface MarketFilters {
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
}

export const useMarketFilters = create<MarketFilters>((set) => ({
  search: "",
  setSearch: (value) => {
    set({
      search: value,
    });
  },
  page: 0,
  setPage: (value: number) => {
    set({
      page: value,
    });
  }
}));