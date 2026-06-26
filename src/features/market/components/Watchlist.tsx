const favorites = ["BTC", "ETH", "SOL"]

export function Watchlist() {
    return (
        <div className="bg-card rounded-xl p-5 mt-8">
            <h2 className="text-xl font-bold mb-4">
                Watchlist
            </h2>
            <ul>
                {
                    favorites.map(item => (
                        <li key={item} className="py-2">⭐ {item}</li>
                    ))
                }
            </ul>
        </div>
    )
}