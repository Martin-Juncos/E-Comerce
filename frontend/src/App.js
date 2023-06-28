import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import CreateProduct from './components/CreateProduct/CreateProduct';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/form' element= {<CreateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
