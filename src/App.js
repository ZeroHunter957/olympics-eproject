import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Page/Home";
import Login from "./Component/Quan/Login/Login";
import Paris from "./Component/Page/Paris";
import MilanoCortina from "./Component/Page/MilanoCortina";
import Dakar from "./Component/Page/Dakar";
import LA2028 from "./Component/Page/LA2028";
import Brisbane from "./Component/Page/Brisbane";
import Results from "./Component/Page/Results";
import Beijing2022 from "./Component/Page/Beijing2022";
import Torches from "./Component/Page/Torches";
import Replays from "./Component/Page/Replays";
import Aboutus from "./Component/Quan/Aboutus";
import Medal from "./Component/Page/Medal";
import Mascot from "./Component/Page/Mascot";
import Acientgames from "./Component/Page/Acientgames";
import Detail from "./Component/Page/Detail";
import News from "./Component/Quan/News/News";
import Athletes from "./Component/Bao/Athletes/Athletes";
import Athletedetail from "./Component/Bao/Athletes/Athletedetail";
import FAQ from "./Component/Bao/FAQs/FAQ";
import Sports from "./Component/Bao/Sports/Sports";
import ARC from "./Component/Bao/Sports/Details/ARC";
import BK3 from "./Component/Bao/Sports/Details/BK3";
import GAR from "./Component/Bao/Sports/Details/GAR";
import BDM from "./Component/Bao/Sports/Details/BDM";
import BOX from "./Component/Bao/Sports/Details/BOX";
import BMF from "./Component/Bao/Sports/Details/BMF";
import CSP from "./Component/Bao/Sports/Details/CSP";
import DIV from "./Component/Bao/Sports/Details/DIV";
import EQU from "./Component/Bao/Sports/Details/EQU";
import FEN from "./Component/Bao/Sports/Details/FEN";
import FBL from "./Component/Bao/Sports/Details/FBL";
import GLF from "./Component/Bao/Sports/Details/GLF";
import HBL from "./Component/Bao/Sports/Details/HBL";
import HOC from "./Component/Bao/Sports/Details/HOC";
import JUD from "./Component/Bao/Sports/Details/JUD";
import KTE from "./Component/Bao/Sports/Details/KTE";
import OWS from "./Component/Bao/Sports/Details/OWS";
import MPN from "./Component/Bao/Sports/Details/MPN";
import GRY from "./Component/Bao/Sports/Details/GRY";
import ROW from "./Component/Bao/Sports/Details/ROW";
import SAL from "./Component/Bao/Sports/Details/SAL";
import SHO from "./Component/Bao/Sports/Details/SHO";
import SKB from "./Component/Bao/Sports/Details/SKB";
import SWM from "./Component/Bao/Sports/Details/SWM";
import TTE from "./Component/Bao/Sports/Details/TTE";
import TEN from "./Component/Bao/Sports/Details/TEN";
import VVO from "./Component/Bao/Sports/Details/VVO";
import WPO from "./Component/Bao/Sports/Details/WPO";
import WLF from "./Component/Bao/Sports/Details/WLF";
import Gallery from "./Component/Bao/Gallery";
import Contact from "./Component/Quan/Contactus/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/paris2024" element={<Paris />} />
        <Route path="/milano2026" element={<MilanoCortina />} />
        <Route path="/dakar2026" element={<Dakar />} />
        <Route path="/LA2028" element={<LA2028 />} />
        <Route path="/brisbane2032" element={<Brisbane />} />
        <Route path="/category/:id" element={<Beijing2022 />} />
        <Route path="/results" element={<Results />} />
        <Route path="/replays" element={<Replays />} />
        <Route path="/torches" element={<Torches />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/mascot" element={<Mascot />} />
        <Route path="/medal" element={<Medal />} />
        <Route path="/ancientgames" element={<Acientgames />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/news" element={<News />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/athletesdetail/:id" element={<Athletedetail />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/sports" element={<Sports />} />
        <Route path="/3x3-basketball" element={<BK3 />} />
        <Route path="/archery" element={<ARC />} />
        <Route path="/artistic-gymnastics" element={<GAR />} />
        <Route path="/badminton" element={<BDM />} />
        <Route path="/boxing" element={<BOX />} />
        <Route path="/cycling-bmx-freestyle" element={<BMF />} />
        <Route path="/canoe-sprint" element={<CSP />} />
        <Route path="/diving" element={<DIV />} />
        <Route path="/equestrian" element={<EQU />} />
        <Route path="/fencing" element={<FEN />} />
        <Route path="/football" element={<FBL />} />
        <Route path="/golf" element={<GLF />} />
        <Route path="/handball" element={<HBL />} />
        <Route path="/hockey" element={<HOC />} />
        <Route path="/judo" element={<JUD />} />
        <Route path="/karate" element={<KTE />} />
        <Route path="/marathon-swimming" element={<OWS />} />
        <Route path="/modern-pentathlon" element={<MPN />} />
        <Route path="/rhythmic-gymnastics" element={<GRY />} />
        <Route path="/rowing" element={<ROW />} />
        <Route path="/sailing" element={<SAL />} />
        <Route path="/shooting" element={<SHO />} />
        <Route path="/skateboarding" element={<SKB />} />
        <Route path="/swimming" element={<SWM />} />
        <Route path="/table-tennis" element={<TTE />} />
        <Route path="/tennis" element={<TEN />} />
        <Route path="/volleyball" element={<VVO />} />
        <Route path="/water-polo" element={<WPO />} />
        <Route path="/weightlifting" element={<WLF />} />

        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
