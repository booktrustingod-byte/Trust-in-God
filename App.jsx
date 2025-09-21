import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Quran from "./pages/Quran";
import Tafsir from "./pages/Tafsir";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-green-600 text-white p-4 text-center font-bold text-lg">
          📖 Trust in God
        </header>

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/tafsir/:ayahId" element={<Tafsir />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <nav className="bg-gray-100 dark:bg-gray-800 p-2 flex justify-around">
          <Link to="/">🏠</Link>
          <Link to="/quran">📖</Link>
          <Link to="/favorites">❤️</Link>
        </nav>
      </div>
    </Router>
  );
}