import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LexerPage from "./pages/LexerPage.tsx";
import ParserPage from "./pages/ParserPage.tsx";
import CompilerPage from "./pages/CompilerPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ExecutorPage from "./pages/ExecutorPage.tsx";
import NavBar from "./components/Navbar.tsx";

export default function App() {
    return (
        <div className="p-6 dark:bg-gray-800 text-white min-h-screen">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<LexerPage />} />
                    <Route path="/parser" element={<ParserPage />} />
                    <Route path="/compiler" element={<CompilerPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/executor" element={<ExecutorPage />} />
                </Routes>
            </Router>
        </div>
    );
}