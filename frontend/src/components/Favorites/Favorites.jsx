import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteProducts);
  

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
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
              <div  key={product.id}>
                <li>
                  <h4>{product.title}</h4>
                  <img src={product.images} alt={product.title} />
                  <p>Precio: ${product.price}</p>
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