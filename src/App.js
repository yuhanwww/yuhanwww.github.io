import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/navbar';
import Intro from "./components/Intro/intro";
import Project from './components/Project/project';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
