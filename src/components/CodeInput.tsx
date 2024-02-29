import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {dracula} from "@uiw/codemirror-theme-dracula";

interface CodeInputProps {
    value: string;
    onChangeFunction: (value: string, viewUpdate?: any) => void;
}

export default function CodeInput({value, onChangeFunction }: CodeInputProps) {
    return (
        <CodeMirror
            value={value}
            extensions={[javascript({ jsx: true })]}
            theme={dracula}
            onChange={onChangeFunction}
            height="500px" />
    )
}