import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/navbar';
import Intro from "./components/Intro/intro";
import Project from './components/Project/project';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';
import Phyllo from './components/Project/Project_pages/phyllo';
import ArtRecognizer from './components/Project/Project_pages/artRecognizer';

import Artwork from './components/Artwork/artwork';
import YuhansMap from './components/Artwork/Artwork_pages/yuhans_map';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Intro />} />

        <Route path="/project" element={<Project />} />
        <Route path="/project/phyllo" element={<Phyllo />} />
        <Route path="/project/art_recognizer" element={<ArtRecognizer />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/artwork" element={<Artwork />} />
        <Route path="/artwork/yuhans_map" element={<YuhansMap />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
