import axios from "axios";

export const ALL_PRODUCTS = "ALL_PRODUCTS";

export const allProducts = () => {
  return async function (dispatch) {
    const products = await axios.get("http://localhost:3001/products/");
    dispatch({ type: ALL_PRODUCTS, payload: products });
  };
};


//* ecommerce --> db