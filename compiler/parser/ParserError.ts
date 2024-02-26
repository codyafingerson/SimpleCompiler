class ParserError extends Error {
    constructor(message: string) {
        super(`Parsing error: ${message}`);
    }

    public toString(): string {
        return this.message;
    }

    public getMessage(): string {
        return this.message;
    }

    public static fromToken(expected: string, actual: string): ParserError {
        return new ParserError(`Expected token of type ${expected}, but got ${actual}`);
    }

    public static fromMessage(message: string): ParserError {
        return new ParserError(message);
    }
}

export default ParserError;