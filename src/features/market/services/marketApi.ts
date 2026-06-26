import { assets } from "../data/assets";
import type { Asset } from "../types/assets";

export function getAssets(search: string): Promise<Asset[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredAssets = assets.filter((asset) =>
        asset.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );

      resolve(filteredAssets);
    }, 1000);
  });
}