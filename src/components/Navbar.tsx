import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check if the screen size is large enough to hide the mobile menu
            if (window.innerWidth >= 768) { // Adjust breakpoint as needed
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const getLinkClasses = (path: string) => {
        let classes = "transition duration-300 focus:outline-none focus:text-violet-300 focus:underline hover:underline hover:text-violet-300";
        if (location.pathname === path) {
            classes += " underline text-violet-400";
        }
        return classes;
    };

    const getMobileMenuClasses = (path: string) => {
        let classes = "block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-violet-300 focus:underline hover:underline hover:text-violet-400";
        if (location.pathname === path) {
            classes += " underline text-violet-400";
        }
        return classes;
    };

    return (
        <nav className="p-4 bg-gray-900 text-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex items-center pl-8">
                    <i className="text-xl fas fa-terminal"/>
                    <h1 className="tracking-wide font-bold pl-4">The Simple "Compiler" 🤓</h1>
                </div>
                {/* MOBILE NAV ICON */}
                <div className="md:hidden block absolute top-4 right-8">
                    <button
                        type="button"
                        className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
                        onClick={toggleMenu}
                    >
                        <i className={`fas text-3xl ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}/>
                    </button>
                </div>
                {/* NAVIGATION - LARGE SCREENS */}
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <li className="text-lg pr-8">
                            <Link
                                to="/"
                                className={getLinkClasses("/")}
                                style={{textUnderlineOffset: 8}}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-lg pr-8 ">
                            <Link
                                to="/lexer"
                                className={getLinkClasses("/lexer")}
                                style={{textUnderlineOffset: 8}}
                            >
                                Lexer
                            </Link>
                        </li>
                        <li className="text-lg pr-8">
                            <Link
                                to="/parser"
                                className={getLinkClasses("/parser")}
                                style={{textUnderlineOffset: 8}}
                            >
                                Parser
                            </Link>
                        </li>
                        <li className="text-lg pr-8">
                            <Link
                                to="/compiler"
                                className={getLinkClasses("/compiler")}
                                style={{textUnderlineOffset: 8}}
                            >
                                Compiler
                            </Link>
                        </li>
                        <li className="text-lg pr-8">
                            <Link
                                to="/runtime"
                                className={getLinkClasses("/runtime")}
                                style={{textUnderlineOffset: 8}}
                            >
                                Runtime
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} flex w-full mx-auto py-8 text-center`}>
                <div className="flex flex-col justify-center items-center w-full">
                    <Link
                        to="/"
                        className={getMobileMenuClasses("/")}
                        style={{textUnderlineOffset: 8}}
                    >
                        Home
                    </Link>
                    <Link
                        to="/lexer"
                        className={getMobileMenuClasses("/lexer")}
                        style={{textUnderlineOffset: 8}}
                    >
                        Lexer
                    </Link>
                    <Link
                        to="/parser"
                        className={getMobileMenuClasses("/parser")}
                        style={{textUnderlineOffset: 8}}
                    >
                        Parser
                    </Link>
                    <Link
                        to="/compiler"
                        className={getMobileMenuClasses("/compiler")}
                        style={{textUnderlineOffset: 8}}
                    >
                        Compiler
                    </Link>
                    <Link
                        to="/runtime"
                        className={getMobileMenuClasses("/runtime")}
                        style={{textUnderlineOffset: 8}}
                    >
                        Runtime
                    </Link>
                </div>
            </div>
        </nav>

    );
}