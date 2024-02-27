// Path: compiler/lexer/TokenType.ts

/**
 * Enum for the different types of tokens for the lexer
 * @enum TokenType
 */
enum TokenType {
    // Keywords
    Func = 'Function', // Declares a function
    Create = 'Create', // Creates a variable
    If = 'If',
    Else = 'Else',
    IfElse = 'IfElse',
    For = 'For',
    While = 'While',
    Return = 'Return',
    Null = 'Null',
    True = 'True',
    False = 'False',
    In = 'In',
    Output = 'Output',

    // Identifiers
    Identifier = 'Identifier',

    // Data Types
    String = 'String',
    Integer = 'Integer',
    Float = 'Float',
    Boolean = 'Boolean',

    // Syntax
    LeftParen = 'LeftParen',
    RightParen = 'RightParen',
    LeftBrace = 'LeftBrace',
    RightBrace = 'RightBrace',
    LeftBracket = 'LeftBracket',
    RightBracket = 'RightBracket',
    Comma = 'Comma',
    Dot = 'Dot',
    SemiColon = 'SemiColon',
    Equal = 'Equal',
    Plus = 'Plus',
    Minus = 'Minus',
    Star = 'Star',
    Slash = 'Slash',
    NotEqual = 'NotEqual',
    Greater = 'Greater',
    GreaterEqual = 'GreaterEqual',
    Less = 'Less',
    LessEqual = 'LessEqual',
    DoubleEqual = 'DoubleEqual',
    PlusEqual = 'PlusEqual',
    MinusEqual = 'MinusEqual',
    StarEqual = 'StarEqual',
    SlashEqual = 'SlashEqual',
    Increment = 'Increment',
    Decrement = 'Decrement',

    // Literals
    StringLiteral = 'StringLiteral',
    IntegerLiteral = 'IntegerLiteral',
    FloatLiteral = 'FloatLiteral',

    // Misc
    Comment = 'Comment',
    Whitespace = 'Whitespace',
    NewLine = 'NewLine',
    EndOfFile = 'EndOfFile',

    // Error
    Error = 'Error'
}

export const KEYWORDS = new Map<string, TokenType>([
    ['func', TokenType.Func],
    ['create', TokenType.Create],
    ['if', TokenType.If],
    ['else', TokenType.Else],
    ['ifelse', TokenType.IfElse],
    ['for', TokenType.For],
    ['while', TokenType.While],
    ['return', TokenType.Return],
    ['null', TokenType.Null],
    ['true', TokenType.True],
    ['false', TokenType.False],
    ['in', TokenType.In],
    ['output', TokenType.Output]
]);

export const DATA_TYPES = new Map<string, TokenType>([
    ['string', TokenType.String],
    ['int', TokenType.Integer],
    ['float', TokenType.Float],
    ['bool', TokenType.Boolean]
]);

export const SYNTAX = new Map<string, TokenType>([
    ['(', TokenType.LeftParen],
    [')', TokenType.RightParen],
    ['{', TokenType.LeftBrace],
    ['}', TokenType.RightBrace],
    ['[', TokenType.LeftBracket],
    [']', TokenType.RightBracket],
    [',', TokenType.Comma],
    ['.', TokenType.Dot],
    [';', TokenType.SemiColon],
    ['=', TokenType.Equal],
    ['+', TokenType.Plus],
    ['-', TokenType.Minus],
    ['*', TokenType.Star],
    ['/', TokenType.Slash],
    ['!=', TokenType.NotEqual],
    ['>', TokenType.Greater],
    ['>=', TokenType.GreaterEqual],
    ['<', TokenType.Less],
    ['<=', TokenType.LessEqual],
    ['==', TokenType.DoubleEqual],
    ['+=', TokenType.PlusEqual],
    ['-=', TokenType.MinusEqual],
    ['*=', TokenType.StarEqual],
    ['/=', TokenType.SlashEqual],
    ['++', TokenType.Increment],
    ['--', TokenType.Decrement]
]);

export default TokenType;