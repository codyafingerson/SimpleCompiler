import Lexer  from '../../compiler/lexer/Lexer';
import TokenType from '../../compiler/lexer/TokenType';

describe('Lexer', () => {
    it('should tokenize plus operator', () => {
        const lexer = new Lexer('+');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.Plus);
    });

    it('should tokenize minus operator', () => {
        const lexer = new Lexer('-');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.Minus);
    });

    it('should tokenize star operator', () => {
        const lexer = new Lexer('*');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.Star);
    });

    it('should tokenize slash operator', () => {
        const lexer = new Lexer('/');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.Slash);
    });

    it('should tokenize left parenthesis', () => {
        const lexer = new Lexer('(');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.LeftParen);
    });

    it('should tokenize right parenthesis', () => {
        const lexer = new Lexer(')');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.RightParen);
    });

    it('should tokenize number', () => {
        const lexer = new Lexer('562');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(1);
        expect(tokens[0].getType()).toBe(TokenType.Int);
        expect(tokens[0].getValue()).toBe('562');
    });

    it('should tokenize braces', () => {
        const lexer = new Lexer('{}');
        lexer.lex();
        const tokens = lexer.getAllTokensArray();

        expect(tokens.length).toBe(2);
        expect(tokens[0].getType()).toBe(TokenType.LeftBrace);
        expect(tokens[1].getType()).toBe(TokenType.RightBrace);
    });
});