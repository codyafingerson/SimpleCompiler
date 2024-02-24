import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="p-6 dark:bg-gray-800 text-white">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-purple-400">Lexer</Link></li>
                <li><Link to="/parser" className="text-purple-400">Parser</Link></li>
                <li><Link to="/compiler" className="text-purple-400">Compiler</Link></li>
                <li><Link to="/executor" className="text-purple-400">Executor</Link></li>
                <li><Link to="/about" className="text-purple-400">About</Link></li>
            </ul>
        </nav>
    );
}