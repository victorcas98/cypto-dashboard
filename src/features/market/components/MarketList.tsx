import { Card } from "../../../shared/components/Card";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { useAssets } from "../hooks/useAssets";
import { AssetCard } from "./AssetsCard";

export function MarketList() {
  const { data = [], isLoading, error } = useAssets();

  if (isLoading) {
    return (
      <div role="status" className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-pulse">
        <Card />
        <Card />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Could not load assets" />;
  }

  if (!data.length) {
    return <p>No assets found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}