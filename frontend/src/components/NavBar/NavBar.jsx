import React from "react";
import style from "./NavBar.module.css";
//import smartech1 from '../../assets/SmarTech1.png'
import smartech2 from "../../assets/SmarTech2.png";
import SearcBar from "../SearchBar/SearcBar";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";

function NavBar() {
  return (
    <div>
      <section className={style.container}>
        <div className={style.img}>
          <a href="/home">
            <img src={smartech2} alt="img not found" width="300rem" />
          </a>
        </div>
        <div>
          <a className={style.a} href="/about">
            <h3>Nosotros</h3>
          </a>
        </div>
        <div>
          <a className={style.a} href="/form">
            <h3>Crear Producto</h3>
          </a>
        </div>
        <div>
          <SearcBar />
        </div>
      </section>
      <section className={style.container}>
        <Filters/>
        <Order/>
      </section>
    </div>
  );
}

export default NavBar;