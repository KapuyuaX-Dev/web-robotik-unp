import HomePage from './Pages/HomePage';
import KRAI from './Pages/KRAI';
import KRSBI from './Pages/KRSBI';
import KRSTI from './Pages/KRSTI';
import KRSRI from './Pages/KRSRI';
import KRTMI from './Pages/KRTMI';
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import KRTI from './Pages/KRTI';
import Sponsors from './Pages/Sponsors';
import Galery from './Pages/Galery';
import News from './Pages/News';
import NewsArticle from './Pages/NewsArticle';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/KRAI' element={<KRAI/>}/>
          <Route path='/KRSBI' element={<KRSBI/>}/>
          <Route path='/KRSTI' element={<KRSTI/>}/>
          <Route path='/KRSRI' element={<KRSRI/>}/>
          <Route path='/KRTMI' element={<KRTMI/>}/>
          <Route path='/KRTI' element={<KRTI/>}/>
          <Route path='/sponsors' element={<Sponsors/>}/>
          <Route path='/gallery' element={<Galery/>}/>
          <Route path='/news/:id' element={<NewsArticle/>}/>
          <Route path='/news/all' element={<News/>}/>
          
        </Routes>
      </Router>
  );
}

export default App;
