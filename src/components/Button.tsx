interface ButtonProps {
    type: "submit" | "reset" | "button";
    text: string;
    onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
    return (
        <button type={type} className="p-2 bg-purple-400 text-white rounded" onClick={onClick}>{text}</button>
    );
}