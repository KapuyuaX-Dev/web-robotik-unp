import HomePage from './components/HomePage';
import KRAI from './components/KRAI/KRAI';
import KRSBI from './components/KRSBI/KRSBI';
import KRSTI from './components/KRSTI/KRSTI';
import KRSRI from './components/KRSRI/KRSRI';
import KRTMI from './components/KRTMI/KRTMI';
import {HashRouter, Route, Routes} from "react-router-dom"
import KRTI from './components/KRTI/KRTI';


function App() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/KRAI' element={<KRAI/>}/>
          <Route exact path='/KRSBI' element={<KRSBI/>}/>
          <Route exact path='/KRSTI' element={<KRSTI/>}/>
          <Route exact path='/KRSRI' element={<KRSRI/>}/>
          <Route exact path='/KRTMI' element={<KRTMI/>}/>
          <Route exact path='/KRTI' element={<KRTI/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
