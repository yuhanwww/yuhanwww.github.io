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
import Phyllo from './components/Project/pages/phyllo';
import ArtRecognizer from './components/Project/pages/artRecognizer';
import Artwork from './components/Artwork/artwork';

function App() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Intro />} />

          <Route path="/project" element={<Project />} />
          <Route path="/project/phyllo" element={<Phyllo />} />
          <Route path="/project/artRecognizer" element={<ArtRecognizer />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/artwork" element={<Artwork />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
