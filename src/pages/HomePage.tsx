// Custom components
import Container from "../components/Container.tsx";
import {Link} from "react-router-dom";

const preStyle = "p-1 font-mono text-sm rounded-md";

export default function HomePage() {
    return (
        <Container>
            <div className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-700 shadow rounded-lg overflow-auto">
                {/*p-4 rounded-lg dark:bg-gray-700 dark:text-white h-72 focus:border-gray-800*/}
                <div className="p-4 bg-gray-700 rounded-lg shadow">
                    <div>
                        <h2 className="text-white-800 text-4xl">The Simple "Compiler" 🤓</h2>
                        <p className="text-white-800 text-sm mt-4">
                            This project, aptly named The Simple "Compiler" 🤓, is an experimental demonstration of basic
                            compiler (more so a transpiler) concepts written in TypeScript.
                            It offers a rudimentary implementation of a compiler that translates a simple custom
                            language into JavaScript for execution in the browser environment. The project is open
                            source and can be found on
                            <a className="text-sky-500" href="https://github.com/codyafingerson/SimpleCompiler"
                               target="_blank" rel="noopener noreferrer"> GitHub</a>.
                        </p>
                    </div>

                    <hr className="my-4 border-t border-orange-200"/>

                    <div>
                        <h2 className="text-white-800 text-4xl">Features</h2>
                        <p className="text-white-800 text-sm mt-4">
                            This website serves as a simple visual tool for testing the individual components of the
                            compiler.
                        </p>
                        <div className="mt-2 ml-4">
                            <ul className="list-disc">
                                <li>
                                    <Link to="/lexer" className="text-sky-500">Lexer</Link>
                                    <p>The lexer tab allows for testing the Lexer of the compiler. It outputs the tokens
                                        from the Lexer if successful.</p>
                                </li>
                                <li>
                                    <Link to="/parser" className="text-sky-500">Parser</Link>
                                    <p>The parser tab allows for testing the Parser of the compiler. It outputs the
                                        Abstract Syntax Tree (AST) if successful.</p>
                                </li>
                                <li>
                                    <Link to="/compiler" className="text-sky-500">Compiler</Link>
                                    <p>The compiler tab allows for testing the Compiler of the compiler. It outputs the
                                        executable JavaScript code if successful.</p>
                                </li>
                                <li>
                                    <Link to="/runtime" className="text-sky-500">Runtime</Link>
                                    <p>
                                        The runtime tab combines the Lexer, Parser, and Compiler into a single tab for
                                        testing the entire compiler. It outputs the result of the code execution if
                                        successful.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <hr className="my-4 border-t border-orange-200"/>
                    <div>

                        <h2 className="text-white-800 text-4xl">Grammar</h2>
                        <code className="p-1 font-mono text-sm rounded-md">
                            <pre className={preStyle}>program : statement_list</pre>
                            <pre className={preStyle}>statement_list : statement | statement_list statement</pre>
                            <pre className={preStyle}>statement : variable_declaration | function_declaration</pre>
                            <pre className={preStyle}>variable_declaration : CREATE VARIABLE '=' value ';'</pre>
                            <pre
                                className={preStyle}>function_declaration : FUNC IDENTIFIER '(' parameters ')' '{' statement_list '}'</pre>
                            <pre
                                className={preStyle}>function_declaration : FUNC IDENTIFIER '(' parameters ')' '{' statement_list '}'</pre>
                            <pre className={preStyle}>parameters : parameter | parameters ',' parameter</pre>
                            <pre className={preStyle}>parameter : IDENTIFIER</pre>
                            <pre className={preStyle}>value : STRING | INTEGER | VARIABLE</pre>
                            <pre className={preStyle}>IDENTIFIER : [a-zA-Z][a-zA-Z0-9]*</pre>
                            <pre className={preStyle}>STRING : '"' [^"]* '"'</pre>
                            <pre className={preStyle}>INTEGER : [0-9]+</pre>
                            <pre className={preStyle}>VARIABLE : IDENTIFIER</pre>
                            <pre className={preStyle}>CREATE : 'create'</pre>
                            <pre className={preStyle}>FUNC : 'func'</pre>
                        </code>

                    </div>
                </div>
            </div>
        </Container>
    );
}