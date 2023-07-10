import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Detail from './components/Detail/Detail';
<<<<<<< HEAD
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

=======
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
//import LandingPage from './components/LandingPage/LandingPage';
>>>>>>> b20515fec411fa77be114fe7d0beb38cc783c50c

function App() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation()

  if (isAuthenticated) {
    // Redireccionar a "/home" 
     if (location.pathname === '/') {
      return <Navigate to="/home" />;
    }
  }



  return (
    <div className="App">
     <NavBar/>
      <Routes>
        {/* <Route exact path='/' element= {<LandingPage/> } /> */}
        <Route path='/*' element= {<Home/>} />
        <Route  path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/form' element= {<CreateProduct/>} />
        <Route path="/favorites" element= {<Favorites/>} />
        <Route path='/detail/:id' element= {<Detail/>} />
        <Route path='/shop' element= {<ShoppingCart/>} />
      </Routes>
    </div>
  );
}

export default App;



