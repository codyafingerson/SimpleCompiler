import Token from "./Token.ts";
import List from "../data-structures/List.ts";
import TokenType from "./TokenType.ts";
import SymbolTable from "../data-structures/SymbolTable.ts";
import LexingError from "./LexingError.ts";

/**
 * The lexer for the Simple Compiler
 * Splits the source code provided, into tokens that can be used by the parser
 * @class Lexer
 */
class Lexer {
    private readonly tokenList: List<Token>;
    private readonly source: string;
    private position: number = 0;
    // private readonly keywords: string[];
    // private readonly operators: string[];
    // private readonly whitespace: string[];
    private readonly keywords: SymbolTable<string, TokenType> = new SymbolTable<string, TokenType>();
    private readonly operators: SymbolTable<string, TokenType> = new SymbolTable<string, TokenType>();

    /**
     * Creates a new instance of the Lexer
     * @param source The source code to be tokenized
     */
    constructor(source: string) {
        this.source = source;
        this.tokenList = new List<Token>();
        this.constructKeywords();
        this.constructOperators();
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

    // Consumes white space characters
    private consumeWhiteSpace() {
        while (this.position < this.source.length && /\s/.test(this.source[this.position])) {
            this.position++;
        }
    }

    // Matches a token from the source code
    private match() {}

    private constructKeywords() {
        this.keywords.put("func", TokenType.Func);
        this.keywords.put("if", TokenType.If);
        this.keywords.put("else", TokenType.Else);
        this.keywords.put("return", TokenType.Return);
        this.keywords.put("true", TokenType.True);
        this.keywords.put("false", TokenType.False);
        this.keywords.put("output", TokenType.Output);
        this.keywords.put("null", TokenType.Null);
        this.keywords.put("for", TokenType.For);
        this.keywords.put("while", TokenType.While);
        this.keywords.put("in", TokenType.In);
        this.keywords.put("create", TokenType.Create);
        this.keywords.put("string", TokenType.String);
        this.keywords.put("int", TokenType.Int);
    }

    private constructOperators() {
        this.operators.put("+", TokenType.Plus);
        this.operators.put("-", TokenType.Minus);
        this.operators.put("*", TokenType.Star);
        this.operators.put("/", TokenType.Slash);
        this.operators.put("=", TokenType.Equal);
        this.operators.put(">", TokenType.Greater);
        this.operators.put(">=", TokenType.GreaterEqual);
        this.operators.put("<", TokenType.Less);
        this.operators.put("<=", TokenType.LessEqual);
        this.operators.put("!=", TokenType.NotEqual);
        this.operators.put("(", TokenType.LeftParen);
        this.operators.put(")", TokenType.RightParen);
        this.operators.put("{", TokenType.LeftBrace);
        this.operators.put("}", TokenType.RightBrace);
        this.operators.put(";", TokenType.SemiColon);
        this.operators.put(",", TokenType.Comma);
    }

    private isKeyword(word: string): boolean {
        return this.keywords.contains(word);
    }

    private isOperator(word: string): boolean {
        return this.operators.contains(word);
    }

    private isIdentifier(word: string): boolean {
        return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(word);
    }

    private isString(word: string): boolean {
        return /^".*"$/.test(word);
    }

    private isInt(word: string): boolean {
        return /^[0-9]+$/.test(word);
    }

    private isComment(word: string): boolean {
        return /^\/\/.*$/.test(word);
    }

    private handleSingleCharacterToken(word: string, position: number) {
        if (this.isOperator(word)) {
            // start: number, end: number, value: string, type: TokenType
            this.tokenList.add(new Token(position, position + 1, word, this.operators.get(word)));
        } else {
            throw new LexingError(`Invalid token: ${word}`);
        }
    }
}

export default Lexer;