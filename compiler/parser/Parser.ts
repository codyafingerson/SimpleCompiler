import Token from "../lexer/Token.ts";
import TokenType from "../lexer/TokenType.ts";
import Lexer from "../lexer/Lexer.ts";
import List from "../data-structures/List.ts";

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
    }

    // Parses expressions
    private expression(): void {
        if(this.tokens.get(this.currentTokenIndex).getValue() === TokenType.Number) {
            this.currentTokenIndex++;
            this.term();
        } else if(this.tokens.get(this.currentTokenIndex).getValue() === TokenType.LeftParen) {
            this.currentTokenIndex++;
            this.expression();
            if(this.tokens.get(this.currentTokenIndex).getValue() === TokenType.RightParen) {
                this.currentTokenIndex++;
                this.term();
            } else {
                throw new Error("Expected ')'");
            }
        } else if(this.tokens.get(this.currentTokenIndex).getValue() == TokenType.Plus) {
            this.currentTokenIndex++;
            this.expression();
            this.term();
        } else if(this.tokens.get(this.currentTokenIndex).getValue() == TokenType.Minus) {
            this.currentTokenIndex++;
            this.expression();
            this.term();
        } else {
            throw new Error("Invalid expression");
        }
    }

    // Parse terms
    private term(): void {
        // @TODO Implement term parsing
    }
}

export default Parser;