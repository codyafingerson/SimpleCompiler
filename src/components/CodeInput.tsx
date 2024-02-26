import {ChangeEvent, FC} from "react";

interface CodeInputProps {
    value: string;
    onChangeFunction: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

// Your CodeInput component would look something like this:
const CodeInput: FC<CodeInputProps> = ({ value, onChangeFunction }) => {
    return (
        <textarea value={value} onChange={onChangeFunction} className="p-4 rounded-lg bg-gray-700 text-white h-96 focus:border-gray-800 font-mono" />
    );
}

export default CodeInput;