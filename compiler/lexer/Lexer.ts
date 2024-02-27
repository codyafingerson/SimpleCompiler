// Path: compiler/lexer/Lexer.ts
import TokenType, { KEYWORDS, DATA_TYPES, SYNTAX } from './TokenType';
import Token from './Token';

/**
 * The Simple Compiler Lexer.
 * @class Lexer
 */
class Lexer {
    private source: string;
    private tokens: Token[] = [];
    private start: number = 0;
    private current: number = 0;
    private line: number = 1;

    /**
     * Create a new lexer.
     * @param source the source code to convert to tokens for the parser
     */
    constructor(source: string) {
        this.source = source;
    }

    /**
     * Scan the source code and tokenize it.
     */
    public scanTokens(): Token[] {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }
        this.tokens.push(new Token(TokenType.EndOfFile, '', this.line));
        return this.tokens;
    }

    /**
     * Get all the tokens as an array.
     * @returns an array of tokens
     */
    public getAllTokensArray(): Token[] {
        return this.tokens;
    }

    /**
     * Check if the lexer has reached the end of the source code.
     */
    private isAtEnd(): boolean {
        return this.current >= this.source.length;
    }

    /**
     * Scan the current token and add it to the token list.
     */
    private scanToken(): void {
        const c: string = this.advance();
        switch (c) {
            // Handle single-character tokens
            case '(':
            case ')':
            case '{':
            case '}':
            case '[':
            case ']':
            case ',':
            case '.':
            case ';':
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.match('/')) {
                    // Ignore everything until the end of the line
                    while (this.peek() !== '\n' && !this.isAtEnd()) {
                        this.advance();
                    }
                } else {
                    // It's not a comment, treat it as a regular token
                    this.addToken(SYNTAX.get(c)!);
                }
                break;
            // Handle multi-character tokens
            case '=':
                this.addToken(this.match('=') ? TokenType.DoubleEqual : TokenType.Equal);
                break;
            case '!':
                this.addToken(this.match('=') ? TokenType.NotEqual : TokenType.Error);
                break;
            case '<':
                this.addToken(this.match('=') ? TokenType.LessEqual : TokenType.Less);
                break;
            case '>':
                this.addToken(this.match('=') ? TokenType.GreaterEqual : TokenType.Greater);
                break;
            case '"':
                this.string();
                break;
            case ' ':
            case '\r':
            case '\t':
                // Ignore whitespace
                break;
            case '\n':
                this.line++;
                break;
            default:
                if (this.isDigit(c)) {
                    this.number();
                } else if (this.isAlpha(c)) {
                    this.identifier();
                } else {
                    // Handle unexpected characters
                    throw new Error(`Unexpected character '${c}' at line ${this.line}`);
                }
                break;
        }
    }

    /**
     * Advance the current character pointer and return the current character.
     */
    private advance(): string {
        return this.source[this.current++];
    }

    /**
     * Add a token to the token list.
     */
    private addToken(type: TokenType): void {
        const text: string = this.source.substring(this.start, this.current);
        this.tokens.push(new Token(type, text, this.line));
    }

    /**
     * Match the current character with an expected character.
     * If it matches, advance the pointer and return true, otherwise return false.
     */
    private match(expected: string): boolean {
        if (this.isAtEnd()) return false;
        if (this.source[this.current] !== expected) return false;
        this.current++;
        return true;
    }

    /**
     * Check if a character is a digit.
     */
    private isDigit(c: string): boolean {
        return /^[0-9]$/.test(c);
    }

    /**
     * Check if a character is an alphabet letter or an underscore.
     */
    private isAlpha(c: string): boolean {
        return /^[a-zA-Z_]$/.test(c);
    }

    /**
     * Scan a string literal.
     */
    private string(): void {
        while (this.peek() !== '"' && !this.isAtEnd()) {
            if (this.peek() === '\n') this.line++;
            this.advance();
        }

        if (this.isAtEnd()) {
            throw new Error(`Unterminated string at line ${this.line}`);
        }

        // Consume closing '"'
        this.advance();

        // Add the string token
        this.addToken(TokenType.StringLiteral);
    }

    /**
     * Scan a number literal.
     */
    private number(): void {
        while (this.isDigit(this.peek())) this.advance();

        // Look for fractional part
        if (this.peek() === '.' && this.isDigit(this.peekNext())) {
            // Consume the '.'
            this.advance();

            while (this.isDigit(this.peek())) this.advance();
        }

        this.addToken(TokenType.IntegerLiteral);
    }

    /**
     * Scan an identifier.
     */
    private identifier(): void {
        while (this.isAlphaNumeric(this.peek())) this.advance();

        const text: string = this.source.substring(this.start, this.current);
        let type: TokenType | undefined = KEYWORDS.get(text) || DATA_TYPES.get(text) || TokenType.Identifier;

        // Check if it's a boolean literal (true or false)
        if (this.isBoolean(text)) {
            type = TokenType.Boolean;
        }

        // Check if it's a null literal
        if (text === 'null') {
            type = TokenType.Null;
        }

        this.addToken(type!);
    }

    /**
     * Look ahead at the next character without advancing the pointer.
     */
    private peek(): string {
        if (this.isAtEnd()) return '\0';
        return this.source[this.current];
    }

    /**
     * Look two characters ahead.
     */
    private peekNext(): string {
        if (this.current + 1 >= this.source.length) return '\0';
        return this.source[this.current + 1];
    }

    /**
     * Check if a character is alphanumeric.
     */
    private isAlphaNumeric(c: string): boolean {
        return this.isAlpha(c) || this.isDigit(c);
    }

    /**
     * Check if a string is a boolean.
     */
    private isBoolean(s: string): boolean {
        return s === 'true' || s === 'false';
    }
}

export default Lexer;
