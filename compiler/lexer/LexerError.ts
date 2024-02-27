// Path: compiler/lexer/LexerError.ts

/**
 * Error thrown by the lexer
 * @class LexerError
 */
class LexerError extends Error {
    constructor(message: string, position: number, line: number, lineOffset: number) {
        super("Lexing Error: " + message + " at " + position + " on line " + line + " at position " + lineOffset)
    }
}

export default LexerError