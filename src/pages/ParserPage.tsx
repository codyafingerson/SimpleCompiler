import Container from "../components/Container.tsx";
import { FormEvent, useState, useCallback } from "react";
import Button from "../components/Button.tsx";
import CodeInput from "../components/CodeInput.tsx";

export default function ParserPage() {
    const [sourceCode, setSourceCode] = useState("Not implemented yet... stay tuned!");

    const onChange = useCallback((val: string) => {
        setSourceCode(val);
    }, []);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <Container>
            <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
                <CodeInput value={sourceCode} onChangeFunction={onChange} />
                <Button type="submit" text="Parse"/>
            </form>
        </Container>
    );
}