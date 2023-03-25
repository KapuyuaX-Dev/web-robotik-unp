import HomePage from './Pages/HomePage';
import KRAI from './Pages/KRAI';
import KRSBI from './Pages/KRSBI';
import KRSTI from './Pages/KRSTI';
import KRSRI from './Pages/KRSRI';
import KRTMI from './Pages/KRTMI';
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import KRTI from './Pages/KRTI';


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
        </Routes>
      </Router>
  );
}

export default App;
