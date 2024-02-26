import Container from "../components/Container.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import Button from "../components/Button.tsx";
import CodeInput from "../components/CodeInput.tsx";

export default function CompilerPage() {
    const [sourceCode, setSourceCode] = useState("Not implemented yet... stay tuned!");

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSourceCode(e.target.value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <Container>
            <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
                <CodeInput value={sourceCode} onChangeFunction={onChange} isDisabled={true}/>
                <Button type="submit" text="Compile" />
            </form>
        </Container>
    );
}