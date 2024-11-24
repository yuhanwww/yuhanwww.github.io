import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Thesis from './components/Project/Project_pages/thesis';
import Phyllo from './components/Project/Project_pages/phyllo';
import ArtRecognizer from './components/Project/Project_pages/artRecognizer';
import YuhansMap from './components/Artwork/Artwork_pages/yuhans_map';
import BTTAI from './components/Project/Project_pages/btt_ai_mit';

import Homepage from './components/Homepage';
import ScrollToTop from './components/scroll_to_top';

function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        {/* ===Project Pages=== */}
        <Route path="/project/thesis" element={<Thesis />} />
        <Route path="/project/phyllo" element={<Phyllo />} />
        <Route path="/project/art_recognizer" element={<ArtRecognizer />} />
        <Route path="/project/btt_ai_mit" element={<BTTAI />} />

        {/* ===Artwork Pages=== */}
        <Route path="/artwork/yuhans_map" element={<YuhansMap />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
