import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LexerPage from "./pages/LexerPage.tsx";
import ParserPage from "./pages/ParserPage.tsx";
import CompilerPage from "./pages/CompilerPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ExecutorPage from "./pages/ExecutorPage.tsx";
import NavBar from "./components/Navbar.tsx";

export default function App() {
    return (
        <div className="min-h-screen min-w-60 p-6 bg-gray-800 text-white">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<LexerPage/>}/>
                    <Route path="/parser" element={<ParserPage/>}/>
                    <Route path="/compiler" element={<CompilerPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/executor" element={<ExecutorPage/>}/>
                </Routes>
                <div className="fixed bottom-0 left-0 w-full text-center py-4 text-xs text-zinc-400">
                    <p>&copy; Cody Fingerson, 2024</p>
                </div>
            </Router>
        </div>
    );
}