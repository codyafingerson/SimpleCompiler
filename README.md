# Simple "Compiler" 🤓
Hi there! This is just a simple compiler project that I created just for fun. 
It does not do much (as of yet), but it does demonstrate the basic concepts of a compiler. 
It is written in TypeScript. The project is open source and can be 
found on my [GitHub](https://github.com/codyafingerson/SimpleCompiler).

This project is hosted at [https://simple-compiler.vercel.app](https://simple-compiler.vercel.app)

# Information
Stay tuned... more information coming soon!

# Grammar
More grammar information coming soon!
```
program : statement_list

statement_list : statement | statement_list statement

statement : variable_declaration | function_declaration

variable_declaration : CREATE VARIABLE '=' value ';'

function_declaration : FUNC IDENTIFIER '(' parameters ')' '{' statement_list '}'

parameters : parameter | parameters ',' parameter

parameter : IDENTIFIER

value : STRING | INTEGER | VARIABLE

IDENTIFIER : [a-zA-Z][a-zA-Z0-9]*

STRING : '"' [^"]* '"'
INTEGER : [0-9]+
VARIABLE : IDENTIFIER

CREATE : 'create'
FUNC : 'func'
```


###### Author: Cody Fingerson