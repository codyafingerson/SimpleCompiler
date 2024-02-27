// Path: compiler/lexer/Token.ts
import type TokenType from "./TokenType";

/**
 * Represents a token in the source code.
 * @class Token
 */
class Token {
    private type: TokenType;
    private lexeme: string;
    private line: number;

    /**
     * 
     * @param type the type of the token
     * @param lexeme the lexeme of the token
     * @param line the line number of the token
     */
    constructor(type: TokenType, lexeme: string, line: number) {
        this.type = type;
        this.lexeme = lexeme;
        this.line = line;
    }

    // Getters
    public getType(): TokenType {
        return this.type;
    }

    public getLexeme(): string {
        return this.lexeme;
    }

    public getLine(): number {
        return this.line;
    }

    // Setters
    public setType(type: TokenType): void {
        this.type = type;
    }

    public setLexeme(lexeme: string): void {
        this.lexeme = lexeme;
    }

    public setLine(line: number): void {
        this.line = line;
    }

    toString(): string {
        return `${this.type}: ${this.lexeme}`;
    }
}

export default Token;