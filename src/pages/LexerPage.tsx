import Container from "../components/Container.tsx";
import {FormEvent, useEffect, useState, useCallback} from "react";
import Button from "../components/Button.tsx";
import CodeInput from "../components/CodeInput.tsx";
import Lexer from "../../compiler/lexer/Lexer.ts";
import Token from "../../compiler/lexer/Token.ts";

const sampleSourceCodeFile = "./sample-source-code.txt";

export default function LexerPage() {
    const [sourceCode, setSourceCode] = useState("");
    const [lexerOutput, setLexerOutput] = useState<Token[] | undefined>();

    useEffect(() => {
        fetchSampleSourceCode().then(r => setSourceCode(r));
    }, []);

    const fetchSampleSourceCode = async () => {
        const response = await fetch(sampleSourceCodeFile);
        return await response.text();
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const lexer = new Lexer(sourceCode);

        lexer.scanTokens();
        setLexerOutput(lexer.getAllTokensArray());
    }

    const onChange = useCallback((val: string) => {
        setSourceCode(val);
    }, []);

    return (
        <Container
            header="Lexer Testing Interface"
            info="Evaluate the compiler's lexer functionality here. If successful, it will display the generated tokens.">
            <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
                <CodeInput value={sourceCode} onChangeFunction={onChange}/>
                <Button type="submit" text="Test Lexer"/>
            </form>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Lexer Output</h2>
                <ul className="space-y-2">
                    {lexerOutput?.map((token, index) => (
                        <li key={index} className="p-2 bg-gray-700 rounded">
                            <span className="inline-flex bg-purple-400 text-white rounded p-1">{token.getType()}</span>
                            <span className="ml-2">{token.getLexeme()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}