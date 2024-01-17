import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./components/theme-provider";
import Auth from "./pages/auth/Auth";
import Rated from "./pages/rated/Rated";
import Movie from "./pages/movie/Movie";
import Tvshow from "./pages/tvshow/Tvshow";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rated" element={<Rated />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tvshow/:id" element={<Tvshow />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
