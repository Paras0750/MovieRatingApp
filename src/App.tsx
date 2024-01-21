import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Rated = lazy(() => import("./pages/rated/Rated"));
const Movie = lazy(() => import("./pages/movie/Movie"));
const Tvshow = lazy(() => import("./pages/tvshow/Tvshow"));

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
