import {ChangeEvent, FC} from "react";

interface CodeInputProps {
    value: string;
    onChangeFunction: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    isDisabled?: boolean;
}

// Your CodeInput component would look something like this:
const CodeInput: FC<CodeInputProps> = ({ value, onChangeFunction, isDisabled }) => {
    return (
        <textarea value={value} onChange={onChangeFunction} className="p-4 rounded-lg bg-gray-700 text-white h-96 focus:border-gray-800 font-mono" disabled={isDisabled}/>
    );
}

export default CodeInput;