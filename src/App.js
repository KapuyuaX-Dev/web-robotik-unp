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
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/' Component={HomePage}/>
          <Route exact path='KRAI' Component={KRAI}/>
          <Route exact path='KRSBI' Component={KRSBI}/>
          <Route exact path='KRSTI' Component={KRSTI}/>
          <Route exact path='KRSRI' Component={KRSRI}/>
          <Route exact path='KRTMI' Component={KRTMI}/>
          <Route exact path='KRTI' Component={KRTI}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
