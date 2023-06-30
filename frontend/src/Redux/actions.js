import axios from "axios";

export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const ALL_CATEGORIES = 'ALL_CATEGORIES'


export const allProducts = () => {
  return async function (dispatch) {
    const products = (await axios.get("http://localhost:3001/products/")).data;
    dispatch({ type: ALL_PRODUCTS, payload: products });
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {
    const product = (await axios.get(`http://localhost:3001/products/${id}`)).data
    dispatch({  type: GET_PRODUCT_BY_ID, payload: product})
  }
}

export const getProductByName = (name) => {
  return async function (dispatch) {
    const product = (await axios.get(`http://localhost:3001/products/?name=${name}`)).data
    dispatch({ type: GET_PRODUCT_BY_NAME, payload: product})
  }
}


export const allCategories = () => {
  return async function (dispatch) {
    const categories = (await axios.get('http://localhost:3001/category/'))
    dispatch ({ type: ALL_CATEGORIES, payload: categories})
  }
}
//http://localhost:3001/category

//* ecommerce --> db