import { Button } from "../../../shared/components/Button";
import { useMarketFilters } from "../store/marketFilters";

export function AssetPagination() {
  const setPage = useMarketFilters((state) => state.setPage);
  const page = useMarketFilters((state) => state.page);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>back</Button>
      <div className="flex items-center justify-center">Page {page}</div>
      <Button onClick={() => setPage(page + 1)}>next</Button>
    </div>
  );
}