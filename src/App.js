import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';

import Thesis from './components/Project/Project_pages/thesis';
import Phyllo from './components/Project/Project_pages/phyllo';
import ArtRecognizer from './components/Project/Project_pages/art_recognizer';
import BTTAI from './components/Project/Project_pages/btt_ai_mit';
import HCI from './components/Project/Project_pages/hci';

import YuhansMap from './components/Artwork/Artwork_pages/yuhans_map';
import SelfWriting from './components/Artwork/Artwork_pages/self_writing';
import CampusMap from './components/Artwork/Artwork_pages/campus_map';
import BoyMother from './components/Artwork/Artwork_pages/boy_mother';
import NursesHaveHair from './components/Artwork/Artwork_pages/nurse_have_hair';
import YouAreProgrammed from './components/Artwork/Artwork_pages/you_are_programmed';
import FlipBrazil from './components/Artwork/Artwork_pages/flip_brazil';
import StupidML from './components/Artwork/Artwork_pages/stupid_ml';
import InfoShredder from './components/Artwork/Artwork_pages/info_shredder';

import Homepage from './components/Homepage';
import ScrollToTop from './components/scroll_to_top';
import Gallery from './components/Gallery/gallery';

function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        {/* ===Project Pages=== */}
        <Route path="/project/thesis" element={<Thesis />} />
        <Route path="/project/phyllo" element={<Phyllo />} />
        <Route path="/project/art_recognizer" element={<ArtRecognizer />} />
        <Route path="/project/btt_ai_mit" element={<BTTAI />} />
        <Route path="/project/hci" element={<HCI />} />

        {/* ===Artwork Pages=== */}
        <Route path="/artwork/yuhans_map" element={<YuhansMap />} />
        <Route path="/artwork/self_writing" element={<SelfWriting />} />
        <Route path="/artwork/campus_map" element={<CampusMap />} />
        <Route path="/artwork/boy_mother" element={<BoyMother />} />
        <Route path="/artwork/nurses_have_hair" element={<NursesHaveHair />} />
        <Route path="/artwork/you_are_programmed" element={<YouAreProgrammed />} />
        <Route path="/artwork/flip_brazil" element={<FlipBrazil />} />
        <Route path="/artwork/stupid_ml" element={<StupidML />} />
        <Route path="/artwork/info_shredder" element={<InfoShredder />} />

        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
