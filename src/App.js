import "./App.css";
import { NavBar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Favorite } from "./pages/Favorite/Favorite";
import { Anime } from "./pages/DetailAnime/[id]";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/anime/:id" element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
