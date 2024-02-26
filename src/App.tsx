import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar.tsx";

// Pages
import LexerPage from "./pages/LexerPage.tsx";
import ParserPage from "./pages/ParserPage.tsx";
import CompilerPage from "./pages/CompilerPage.tsx";
import RuntimePage from "./pages/RuntimePage.tsx";
import HomePage from "./pages/HomePage.tsx";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/lexer" element={<LexerPage />} />
                <Route path="/parser" element={<ParserPage />} />
                <Route path="/compiler" element={<CompilerPage />} />
                <Route path="/runtime" element={<RuntimePage />} />
            </Routes>
        </Router>
    )
}