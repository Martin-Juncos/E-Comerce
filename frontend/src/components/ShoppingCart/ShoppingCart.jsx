import React from "react";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const productShop = useSelector((state) => state.cart);
  console.log(productShop);
  return (
    <div>
      <div>Limpiar el carrito</div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
          </tr>
        </thead>
        {productShop.map((prod) => {
          return (
            <tbody>
              <tr>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <button>Eliminar uno</button>
        <button>Elimunas todos</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
