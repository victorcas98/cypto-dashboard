import { useDebounce } from "use-debounce";
import { useState } from "react";
import { Input } from "../../../shared/components/Input";
import { useMarketFilters } from "../store/marketFilters";

export function AssetSearch() {
    const search = useMarketFilters((state) => state.search);
    const setSearch = useMarketFilters((state) => state.setSearch);
    const [value, setValue] = useState(search);
    const [debouncedValue] = useDebounce(value, 300);

    setSearch(debouncedValue);

    return (
        <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search asset..."
        />
    );
}