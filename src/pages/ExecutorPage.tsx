import Button from "../components/Button.tsx";
import {ChangeEvent, useState} from "react";

export default function ExecutorPage() {
    const [code, setCode] = useState<string>('func myFunc(param) {\n' +
        '    var p1 = param;\n' +
        '}');

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    return (
        <div className="p-6 bg-gray-800 text-white">
            <div className="flex flex-col space-y-4">
            <textarea
                className="p-4 rounded-lg bg-gray-700 text-white h-72 focus:border-gray-800 font-mono"
                value={code}
                onChange={handleInputChange}
            />
                <div className="flex space-x-4 mt-4">
                    <Button type="button" text="Compile"/>
                    <Button type="button" text="Execute"/>
                </div>
                <div className="mt-10 bg-gray-800 text-white p-4 rounded border border-gray-600 font-mono">
                    Your output will appear here
                </div>
            </div>
        </div>
    );
}