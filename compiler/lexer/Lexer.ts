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
        if (this.source.startsWith("//", this.position)) {
            let end = this.position + 2;
            while (end < this.source.length && this.source[end] !== '\n') {
                end++;
            }
            this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Comment));
            this.position = end - 1;
        } else {
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
                    // Check if this is a division operation
                    if (this.source[this.position + 1] !== '/') {
                        this.tokenList.add(new Token(this.position, this.position + 1, "/", TokenType.Slash));
                    }
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
                case ';':
                    this.tokenList.add(new Token(this.position, this.position + 1, ";", TokenType.SemiColon));
                    break;
                case `"`:
                    let end = this.position + 1;
                    while (end < this.source.length && this.source[end] !== `"`) {
                        end++;
                    }
                    if (end === this.source.length) {
                        this.tokenList.add(new Token(this.position, this.position + 1, `"`, TokenType.Error));
                    } else {
                        this.tokenList.add(new Token(this.position, end + 1, this.source.slice(this.position, end + 1), TokenType.String));
                        this.position = end;
                    }
                    break;
                case ',':
                    this.tokenList.add(new Token(this.position, this.position + 1, ",", TokenType.Comma));
                    break;
                default:
                    if (/\d/.test(char)) {
                        let end = this.position + 1;
                        while (end < this.source.length && /\d/.test(this.source[end])) {
                            end++;
                        }
                        this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Int));
                        this.position = end - 1;
                    } else if (this.source.startsWith("func", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 4, "func", TokenType.Func));
                        this.position += 4;

                        this.consumeWhiteSpace();

                        // Match function name
                        if (/[a-zA-Z_]/.test(this.source[this.position])) {
                            let end = this.position + 1;
                            while (end < this.source.length && /[a-zA-Z0-9_]/.test(this.source[end])) {
                                end++;
                            }
                            this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Identifier));
                            this.position = end;
                        }

                        this.consumeWhiteSpace();

                        // Match opening parenthesis
                        if (this.source[this.position] === '(') {
                            this.tokenList.add(new Token(this.position, this.position + 1, "(", TokenType.LeftParen));
                            this.position++;

                            // Match parameters
                            while (this.position < this.source.length && this.source[this.position] !== ')') {
                                this.consumeWhiteSpace();

                                // Match parameter
                                if (/[a-zA-Z_]/.test(this.source[this.position])) {
                                    let end = this.position + 1;
                                    while (end < this.source.length && /[a-zA-Z0-9_]/.test(this.source[end])) {
                                        end++;
                                    }
                                    this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Parameter));
                                    this.position = end;
                                }

                                this.consumeWhiteSpace();

                                // Match comma
                                if (this.source[this.position] === ',') {
                                    this.tokenList.add(new Token(this.position, this.position + 1, ",", TokenType.Comma));
                                    this.position++;
                                }
                            }

                            // Match closing parenthesis
                            if (this.source[this.position] === ')') {
                                this.tokenList.add(new Token(this.position, this.position + 1, ")", TokenType.RightParen));
                                this.position++;
                            }
                        }
                    } else if (this.source.startsWith("if", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 2, "if", TokenType.If));
                        this.position += 1;
                    } else if (this.source.startsWith("else", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 4, "else", TokenType.Else));
                        this.position += 3;
                    } else if (this.source.startsWith("return", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 6, "return", TokenType.Return));
                        this.position += 5;
                    } else if (this.source.startsWith("true", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 4, "true", TokenType.True));
                        this.position += 3;
                    } else if (this.source.startsWith("false", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 5, "false", TokenType.False));
                        this.position += 4;
                    } else if (this.source.startsWith("output", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 6, "output", TokenType.Output));
                        this.position += 5;
                    } else if (this.source.startsWith("null", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 4, "null", TokenType.Null));
                        this.position += 3;
                    } else if (this.source.startsWith("for", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 3, "for", TokenType.For));
                        this.position += 2;
                    } else if (this.source.startsWith("while", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 5, "while", TokenType.While));
                        this.position += 4;
                    } else if (this.source.startsWith("in", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 2, "in", TokenType.In));
                        this.position += 1;
                    } else if (this.source.startsWith("create", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 6, "create", TokenType.Create));
                        this.position += 5;
                    } else if (this.source.startsWith("string", this.position)) {
                        this.tokenList.add(new Token(this.position, this.position + 6, "string", TokenType.String));
                        this.position += 5;
                    } else if (/[a-zA-Z_]/.test(char)) {
                        let end = this.position + 1;
                        while (end < this.source.length && /[a-zA-Z_]/.test(this.source[end])) {
                            end++;
                        }
                        this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Identifier));
                        this.position = end - 1;
                    } else if (this.source.startsWith("//", this.position)) {
                        let end = this.position + 2;
                        while (end < this.source.length && this.source[end] !== '\n') {
                            end++;
                        }
                        this.tokenList.add(new Token(this.position, end, this.source.slice(this.position, end), TokenType.Comment));
                        this.position = end - 1;
                    } else {
                        this.tokenList.add(new Token(this.position, this.position + 1, this.source[this.position], TokenType.Error));
                    }
                    break;
            }
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