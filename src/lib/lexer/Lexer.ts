import Token from "./Token.ts";
import List from "../data-structures/List.ts";
import TokenType from "./TokenType.ts";

class Lexer {
    private readonly tokenList: List<Token>;
    private readonly source: string;
    private position: number = 0;

    constructor(source: string) {
        this.source = source;
        this.tokenList = new List<Token>();
    }

    private consumeWhiteSpace() {
        while (this.position < this.source.length && /\s/.test(this.source[this.position])) {
            this.position++;
        }
    }

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

    public tokenize() {
        while (this.position < this.source.length) {
            this.consumeWhiteSpace();
            if (this.position < this.source.length) {
                this.match();
            }
        }
    }

    public getAllTokens() {
        return this.tokenList.toArray()
    }
}

export default Lexer;