
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/AboutUS/About';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import FriendDetails from './components/FriendDetail/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Welcome To React Router APP</h1>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friends/:info' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='/Posts' element={<Posts></Posts>}>
          <Route path=':PostId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='/Countries' element={<Countries></Countries>}></Route>
        <Route path='/Country/:countryName' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
