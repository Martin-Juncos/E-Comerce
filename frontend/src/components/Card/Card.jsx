import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import Score from "../Score/Score";

function Card(props) {
  const { id, title, images, price, rating } = props;
  return (
    <div key={id} className={style.block}>
      <img src={images} alt="img not found" width="150" height="150" />
      <div className={style.neon}>
        <div className="info">
          <h2>{title}</h2>
          <Score rating={rating} />
          <h3>U$d {price}</h3>
          <Link to={`/detail/${id}`}>
            <button>mas info...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
