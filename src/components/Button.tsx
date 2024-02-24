interface ButtonProps {
    type: "submit" | "reset" | "button";
    text: string;
    onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
    return (
        <button type={type} className="p-2 bg-violet-400 text-white rounded hover:bg-violet-300 hover:text-gray-800" onClick={onClick}>{text}</button>
    );
}