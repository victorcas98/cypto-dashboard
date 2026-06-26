interface InputProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
    return (
        <input
            className="bg-surface text-text px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}