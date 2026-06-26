interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/70">
            <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        className="hover:text-danger cursor-pointer text-2xl font-bold"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}   