import type { Asset } from "../types/assets";

interface CoinGeckoResponse {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export async function getAssets(search: string, page: number): Promise<Asset[]> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${search ? `&ids=${search}` : ""}&per_page=3&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch assets");
  }

  const data = await response.json();

  return data.map((coin: CoinGeckoResponse) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    price: coin.current_price,
    change: coin.price_change_percentage_24h,
    volume: coin.total_volume,
  }));
}