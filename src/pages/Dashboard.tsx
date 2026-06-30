import { AssetPagination } from "../features/market/components/AssetPagination";
import { AssetSearch } from "../features/market/components/AssetSearch";
import { MarketList } from "../features/market/components/MarketList";

export function Dashboard() {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Crypto Dashboard</h1>
      <div className="mb-4">
        <AssetSearch />
      </div>
      <MarketList />
      <AssetPagination />
    </div>
  );
}