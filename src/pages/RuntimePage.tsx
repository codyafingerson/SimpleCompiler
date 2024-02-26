import Container from "../components/Container.tsx";
import {ChangeEvent, useState} from "react";
import Button from "../components/Button.tsx";
import CodeInput from "../components/CodeInput.tsx";

export default function RuntimePage() {
    const [sourceCode, setSourceCode] = useState("");

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSourceCode(e.target.value);
    }

    return (
        <Container>
            <form className="flex flex-col space-y-4">
                <CodeInput value={sourceCode} onChangeFunction={onChange} />
                <Button type="submit" text="Execute"/>
            </form>
        </Container>
    );
}