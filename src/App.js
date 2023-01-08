import "./App.css";
import { NavBar } from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/products" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
