interface CardProps {
    title?: string;
    children?: React.ReactNode;
}
export function Card({
    title,
    children
}: CardProps) {
    return (
        <div className="bg-card p-4 rounded-lg shadow-md min-h-[150px]">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {children}
        </div>
    )

}