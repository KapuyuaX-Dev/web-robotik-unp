import HomePage from "./Pages/HomePage";
import KRAI from "./Pages/KRAI";
import KRSBI from "./Pages/KRSBI";
import KRSTI from "./Pages/KRSTI";
import KRSRI from "./Pages/KRSRI";
import KRTMI from "./Pages/KRTMI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RP from "./Pages/RP";
import Sponsors from "./Pages/Sponsors";
import Galery from "./Pages/Galery";
import News from "./Pages/News";
import NewsArticle from "./Pages/NewsArticle";
import NotFound from "./Pages/NotFound";
import { useContext } from "react";
import Vtol from "./Pages/Vtol";
import Publication from "./Pages/Publication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Teams/KRAI" element={<KRAI />} />
        <Route path="/Teams/KRSBI-B" element={<KRSBI />} />
        <Route path="/Teams/KRSTI" element={<KRSTI />} />
        <Route path="/Teams/KRSRI" element={<KRSRI />} />
        <Route path="/Teams/KRTMI" element={<KRTMI />} />
        <Route path="/Teams/RP" element={<RP />} />
        <Route path="/Teams/VTOL" element={<Vtol />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Galery />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/news/all" element={<News />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
