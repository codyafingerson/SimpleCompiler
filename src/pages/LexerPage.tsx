import {ChangeEvent, useEffect, useState} from 'react';
import Lexer from "../lib/lexer/Lexer.ts";
import Token from "../lib/lexer/Token.ts";
import Button from "../components/Button.tsx";

export default function LexerPage() {
    const [userInput, setUserInput] = useState<string>('func myFunc(param) {\n' +
        '    var p1 = param;\n' +
        '}');
    const [lexerOutput, setLexerOutput] = useState<Token[] | undefined>();

    useEffect(() => {
        console.log(userInput)
    }, [userInput, lexerOutput]);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const lexer = new Lexer(userInput);
        console.log(lexer);

        lexer.lex();
        setLexerOutput(lexer.getAllTokensArray());
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    }

    return (
        <div className="p-6 bg-gray-800 text-white">
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                <textarea value={userInput} onChange={onChange} className="p-4 rounded-lg bg-gray-700 text-white h-72 focus:border-gray-800 font-mono"/>
                <Button type="submit" text="Test Lexer"/>
            </form>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Lexer Output</h2>
                <ul className="space-y-2">
                    {lexerOutput?.map((token, index) => (
                        <li key={index} className="p-2 bg-gray-700 rounded">
                            <span className="inline-flex bg-purple-400 text-white rounded p-1">{token.getType()}</span>
                            <span className="ml-2">{token.getValue()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}