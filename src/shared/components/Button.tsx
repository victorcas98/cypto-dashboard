interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            className="bg-primary text-text px-4 py-2 rounded-lg shadow-md hover:bg-success transition-colors duration-300 cursor-pointer flex items-center justify-center min-w-[100px] min-h-[40px]"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
