# Simple "Compiler" 🤓
Hi there! This is just a simple compiler project that I created just for fun. 
It does not do much (as of yet), but it does demonstrate the basic concepts of a compiler. 
It is written in TypeScript. The project is open source and can be 
found on my [GitHub](https://github.com/codyafingerson/SimpleCompiler).

This project is hosted at [https://simple-compiler.vercel.app](https://simple-compiler.vercel.app)

# Information
Stay tuned... more information coming soon!

# Grammar
**Note:** This is a work in progress and is not yet complete.
```
program ::= (comment | function | variableDeclaration | assignment | listInitialization | operation | conditional | loop | outputStatement)*

comment ::= "//" [any characters]

function ::= "func" functionName "(" parameters ")" "{" statement "}"

variableDeclaration ::= "create" variableName "=" expression ";"

listInitialization ::= "create" listName "=" "List.new()" ";"

assignment ::= variableName "=" expression ";"

operation ::= functionName "(" arguments ")"

conditional ::= "if" "(" condition ")" "{" statement "}" ("else" "if" "(" condition ")" "{" statement "}")* ("else" "{" statement "}")?

loop ::= ("for" "(" initialization ";" condition ";" update ")" "{" statement "}") | ("while" "(" condition ")" "{" statement "}")

outputStatement ::= "output" "(" stringExpression ")"

functionName ::= [a-zA-Z]+

parameters ::= (parameter ("," parameter)*)?

parameter ::= variableName

arguments ::= (expression ("," expression)*)?

condition ::= expression

initialization ::= variableDeclaration | assignment | expression

update ::= assignment | expression

statement ::= (comment | variableDeclaration | assignment | listInitialization | operation | conditional | loop | outputStatement) ";"

expression ::= term (("+" | "-" | "*" | "/") term)*

term ::= number | variableName | functionName | "(" expression ")"

stringExpression ::= "\"" [any characters] "\""

number ::= [0-9]+

variableName ::= [a-zA-Z]+

```


###### Author: Cody Fingerson