import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteProducts);
  console.log(favorites)

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <h2>Productos Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <ul>
          {favorites.map((product) => {
            return (
              <div>
                <li key={product.id}>
                  <h3>{product.title}</h3>
                  <p>Precio: {product.price}</p>
                  <button onClick={() => handleRemoveFromFavorites(product.id)}>
                    Eliminar de favoritos
                  </button>
                </li>
              </div>
            )
          }
          )}
        </ul>
      )}
    </div>
  );
}

export default Favorites;