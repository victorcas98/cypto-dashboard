import type { Asset } from "../types/assets";

export const assets: Asset[] = [

    {
        id: "bitcoin",
        symbol: "BTC",
        name: "Bitcoin",
        price: 65320,
        change: 2.4,
        volume: 23000000
    },

    {
        id: "ethereum",
        symbol: "ETH",
        name: "Ethereum",
        price: 3450,
        change: -0.8,
        volume: 12000000
    },

    {
        id: "solana",
        symbol: "SOL",
        name: "Solana",
        price: 120,
        change: 4.2,
        volume: 5000000
    }

]