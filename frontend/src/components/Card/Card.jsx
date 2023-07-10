import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import Score from "../Score/Score";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/actions";

function Card(props) {

  const dispatch = useDispatch()
  const favoriteProducts = useSelector(
    (state) => state.favoriteProducts
  );
  console.log(favoriteProducts)

  
  const { id, title, images, price, rating } = props;
  const handlerAddProduct = (e) => {
    e.preventDefault()
    dispatch(addToCart(id))
  }
  
  const isFavorite = favoriteProducts.some((product) => product.id === id);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(props));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(id));
  };

  
  return (
    <div key={id} className={style.block}>
      <div>
      {isFavorite ? (
          <button onClick={handleRemoveFromFavorites}>❤️</button>
        ) : (
          <button onClick={handleAddToFavorites}>🤍</button>
        )}
      </div>
      <img src={images} alt="img not found" width="150" height="150" />
      <div className={style.neon}>
        <div className="info">
          <h2>{title}</h2>
          <Score rating={rating} />
          <h3>U$d {price}</h3>
          <Link to={`/detail/${id}`}>
            <button>mas info...</button>
          </Link>
          <button onClick={handlerAddProduct}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
