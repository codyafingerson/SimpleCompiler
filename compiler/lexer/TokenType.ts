/**
 * The type of a token
 */
enum TokenType {
    Plus = "Plus",
    Minus = "Minus",
    Star = "Star",
    Slash = "Slash",
    Equal = "Equal",
    LeftParen = "LeftParen",
    RightParen = "RightParen",
    RightBrace = "RightBrace",
    LeftBrace = "LeftBrace",
    SemiColon = "SemiColon",
    Comma = "Comma",
    Greater = "Greater",
    GreaterEqual = "GreaterEqual",
    Less = "Less",
    LessEqual = "LessEqual",

    // Literals
    String = "String",
    Int = "Int",
    Error = "Error",

    // Keywords
    Else = "Else",
    False = "False",
    Func = "Function Keyword",
    If = "If",
    Create = "Create",
    Return = "Return",
    True = "True",
    Output = "Output",
    Null = "Null",
    For = "For",
    While = "While",
    In = "In",

    // Identifiers
    Identifier = "Identifier",
    Parameter = "Parameter",
    Comment = "Comment",
    EndOfFile = "EndOfFile",
}

export default TokenType;