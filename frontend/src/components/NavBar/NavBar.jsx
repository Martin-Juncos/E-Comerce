import React from "react";
import style from "./NavBar.module.css";
//import smartech1 from '../../assets/SmarTech1.png'
import smartech2 from "../../assets/SmarTech2.png";
import SearcBar from "../SearchBar/SearcBar";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import Cart from "../ShoppingCart/Cart";

import { Login } from '../Login/Login'
import { Logout } from '../Logout/Logout'
import { Profile } from '../Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from "react-router-dom";

function NavBar() {
  const { isAuthenticated } = useAuth0()



  return (
    <div>
      <section className={style.container}>
        <div className={style.img}>
          <a href="/home">
            <img src={smartech2} alt="img not found" width="300rem" />
          </a>
        </div>
        <div>
          <Link className={style.a} to="/about">
            <h3>Nosotros</h3>
          </Link>
        </div>
        <div>
          <Link className={style.a} to="/form">
            <h3>Crear Producto</h3>
          </Link>
        </div>
        <div>
          <Link className={style.a} to="/favorites" >
            <h3>Favorites</h3>
          </Link>

        </div>
        <div>
          <SearcBar />
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <Profile />
              <Logout />
            </>
          ) : (
            <Login />
          )}
        </div>
      </section>
      <section className={style.container}>
<<<<<<< HEAD
        <Filters/>
        <Order/>
        <Cart/>
=======
        <Filters />
        <Order />
>>>>>>> 7f6f7014c1c1fc4d135897b3cc5af1d07e15346e
      </section>
    </div>
  );
}

export default NavBar;

