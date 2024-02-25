import {Link, useLocation} from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();

    const getLinkClasses = (path: string) => {
        let classes = "text-violet-400 px-4 py-2 border border-violet-400 rounded hover:bg-violet-400 hover:text-white transition-colors";
        if (location.pathname === path) {
            classes += " bg-violet-400 text-white";
        }
        return classes;
    };

    return (
        <nav className="p-6 bg-gray-800 text-white navbar flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Simple "Compiler" 🤓</h1>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className={getLinkClasses("/")}>Lexer</Link>
                </li>
                <li>
                    <Link to="/parser" className={getLinkClasses("/parser")}>Parser</Link>
                </li>
                <li>
                    <Link to="/compiler" className={getLinkClasses("/compiler")}>Compiler</Link>
                </li>
                <li>
                    <Link to="/executor" className={getLinkClasses("/executor")}>Executor</Link>
                </li>
                <li>
                    <Link to="/about" className={getLinkClasses("/about")}>About</Link>
                </li>
            </ul>
        </nav>
    );
}