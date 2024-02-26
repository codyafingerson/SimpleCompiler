interface ButtonProps {
    type: "submit" | "reset" | "button";
    text: string;
    onClick?: () => void;
    isDisabled?: boolean;
}

export default function Button({ type, text, onClick, isDisabled }: ButtonProps) {
    return (
        <button type={type} className="w-32 p-2 bg-violet-400 text-white rounded hover:bg-violet-300 hover:text-gray-800" onClick={onClick} disabled={isDisabled}>{text}</button>
    );
}