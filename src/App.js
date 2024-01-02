import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "../src/pages/home"
import About from '../src/pages/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
