import Token from "../lexer/Token.ts";
import TokenType from "../lexer/TokenType.ts";
import Lexer from "../lexer/Lexer.ts";
import List from "../data-structures/List.ts";
import ParserError from "./ParserError";

class Parser {
    private readonly lexer: Lexer;
    private readonly tokens: List<Token>;
    private currentTokenIndex: number;

    constructor(lexer: Lexer) {
        this.lexer = lexer;
        this.tokens = this.lexer.getAllTokens();
        this.currentTokenIndex = 0;
    }

    // Parse entry point
    public parse(): void {
        // Start parsing from the first token
        this.expression();

        // Make sure we consumed all the tokens
        if (this.currentTokenIndex !== this.tokens.length) {
            throw new ParserError(`Expected end of input, but got ${this.tokens.get(this.currentTokenIndex).getType()}`);
        }
    }

    // Consume a token of a certain type
    private consume(tokenType: TokenType): void {
        if (this.tokens.get(this.currentTokenIndex).getType() === tokenType) {
            this.currentTokenIndex++;
        } else {
            throw new ParserError(`Expected token of type ${tokenType}, but got ${this.tokens.get(this.currentTokenIndex).getType()}`);
        }
    }

    // @TODO: Implement the rest of the parser
    private expression(): void {
        this.consume(TokenType.Plus);
    }
}

export default Parser;