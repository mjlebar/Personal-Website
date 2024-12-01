import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";

function App() {
  return (
    <HashRouter basename="/">
      <header>
        <ul>
          <Link to="/">
            <li className="home-btn">Home</li>
          </Link>
          <Link to="/projects">
            <li className="proj-btn">Projects</li>
          </Link>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
