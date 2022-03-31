
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/AboutUS/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <h1>Welcome To React Router APP</h1>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
