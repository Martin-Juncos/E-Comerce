import React from "react";
import style from './Card.module.css'

function Card(props) {
  const { id, title, images, description, price } = props;
  return (
    <div key={id}  className={style.block}>
        <img src={images} alt="img not found" width="150" height="150" />
        <div className= {style.neon}>
          <div className="info">
            <h5 className={style.nombre}>{title}</h5>
            <p className="titulo">{description}</p>
            <h5>U$d {price}</h5>
          </div>
        </div>
      </div>
  );
}

export default Card;
