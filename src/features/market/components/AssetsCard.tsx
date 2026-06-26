import { Card } from "../../../shared/components/Card";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import type { Asset } from "../types/assets";

interface Props {
    asset: Asset;
}

export function AssetCard({ asset }: Props) {
    const positive = asset.change >= 0;
    return (
        <Card title={asset.name}>
            <p className="text-muted">
                {asset.symbol}
            </p>
            <h2 className="text-3xl font-bold">
                {formatCurrency(asset.price)}
            </h2>
            <p className={positive ? "text-success" : "text-danger"}>
                {positive ? "+" : ""}{asset.change}%
            </p>
        </Card>
    )
}