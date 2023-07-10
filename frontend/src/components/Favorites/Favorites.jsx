import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favoriteProducts);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <h2>Productos Favoritos</h2>
      {favoriteProducts.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Precio: {product.price}</p>
              <button onClick={() => handleRemoveFromFavorites(product.id)}>
                Eliminar de favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;