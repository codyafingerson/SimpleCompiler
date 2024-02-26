import Token from "./Token.ts";
import List from "../data-structures/List.ts";
import TokenType from "./TokenType.ts";

/**
 * The lexer for the Simple Compiler
 * Splits the source code provided, into tokens that can be used by the parser
 * @class Lexer
 */
class Lexer {
    private readonly tokenList: List<Token>;
    private readonly source: string;
    private position: number = 0;

    /**
     * Creates a new instance of the Lexer
     * @param source The source code to be tokenized
     */
    constructor(source: string) {
        this.source = source;
        this.tokenList = new List<Token>();
    }

    // Consumes white space characters
    private consumeWhiteSpace() {
        while (this.position < this.source.length && /\s/.test(this.source[this.position])) {
            this.position++;
        }
    }

    // Matches a token from the source code
    private match() {
        const char = this.source[this.position];

        switch (char) {
            case '+':
                this.tokenList.add(new Token(this.position, this.position + 1, "+", TokenType.Plus));
                break;
            case '-':
                this.tokenList.add(new Token(this.position, this.position + 1, "-", TokenType.Minus));
                break;
            case '*':
                this.tokenList.add(new Token(this.position, this.position + 1, "*", TokenType.Star));
                break;
            case '/':
                this.tokenList.add(new Token(this.position, this.position + 1, "/", TokenType.Slash));
                break;
            case '=':
                this.tokenList.add(new Token(this.position, this.position + 1, "=", TokenType.Equal));
                break;
            case '(':
                this.tokenList.add(new Token(this.position, this.position + 1, "(", TokenType.LeftParen));
                break;
            case ')':
                this.tokenList.add(new Token(this.position, this.position + 1, ")", TokenType.RightParen));
                break;
            case '{':
                this.tokenList.add(new Token(this.position, this.position + 1, "{", TokenType.LeftBrace));
                break;
            case '}':
                this.tokenList.add(new Token(this.position, this.position + 1, "}", TokenType.RightBrace));
                break;
            default:
                if (/\d/.test(char)) {
                    let end = this.position + 1;
                    while (end < this.source.length && /\d/.test(this.source[end])) {
                        end++;
                    }
                    this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Number));
                    this.position = end - 1;
                } else if (this.source.startsWith("func", this.position)) {
                    this.tokenList.add(new Token(this.position, this.position + 4, "func", TokenType.Function));
                    this.position += 3;
                }
                break;
        }
        this.position++;
    }

    /**
     * Lexes the source code and creates tokens
     */
    public lex() {
        while (this.position < this.source.length) {
            this.consumeWhiteSpace();
            if (this.position < this.source.length) {
                this.match();
            }
        }
    }

    /**
     * Returns all the tokens that have been created
     * @returns {Token[]} The list of tokens
     */
    public getAllTokens(): List<Token> {
        return this.tokenList;
    }

    public getAllTokensArray(): Token[] {
        return this.tokenList.toArray();
    }
}

export default Lexer;