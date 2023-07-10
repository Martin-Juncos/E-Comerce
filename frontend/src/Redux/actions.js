import axios from "axios";

export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const ALL_CATEGORIES = "ALL_CATEGORIES";
export const CATEGORY_FILTER = "CATEGORY_FILTER";
export const ORDER_PRODUCT_BY_PRICE = "ORDER_PRODUCT_BY_PRICE";
export const ORDER_PRODUCT_BY_RATING = "ORDER_PRODUCT_BY_RATING";
export const ORDER_PRODUCT_BY_BRAND = "ORDER_PRODUCT_BY_BRAND";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";

export const addToCart = (id) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProductsCopy];
    let newItem = allProducts.find((product) => product.id === id);
    dispatch({ type: ADD_TO_CART, payload: {...newItem, quantity: 1} });

    // const allItemCart = [...getState().cart];
    // let itemInCart = allItemCart.find((item) => item.id === newItem.id);
    // if (!itemInCart) {
    //   dispatch({ type: ADD_TO_CART, payload: {...newItem, quantity: 1} });
    // } else {
    //   //allItemCart.map((item) => (item.id === itemInCart.id) &&{...item, quantity: item.quantity + 1} )
    //   allItemCart.map((item) => (item.id === itemInCart.id) && dispatch({ type: ADD_TO_CART, payload: {...item, quantity: item.quantity + 1} }))
    // }
  };
};

export const allProducts = () => {
  return async function (dispatch) {
    const products = (await axios.get("http://localhost:3001/products")).data;
    dispatch({ type: ALL_PRODUCTS, payload: products });
  };
};

export const getProductById = (id) => {
  return async function (dispatch) {
    const product = (await axios.get(`http://localhost:3001/products/${id}`))
      .data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};

export const getProductByName = (title) => {
  return async function (dispatch) {
    const product = (
      await axios.get(`http://localhost:3001/products/?title=${title}`)
    ).data;
    dispatch({ type: GET_PRODUCT_BY_NAME, payload: product });
  };
};

export const allCategories = () => {
  return async function (dispatch) {
    const categories = (await axios.get("http://localhost:3001/category")).data;
    dispatch({ type: ALL_CATEGORIES, payload: categories });
  };
};

export const filterCategory = (catName) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProductsCopy];
    let productsFilterByCategory;
    if (catName === "all") {
      productsFilterByCategory = allProducts;
    } else {
      productsFilterByCategory = allProducts.filter(
        (prod) => prod.category === catName
      );
    }
    dispatch({ type: CATEGORY_FILTER, payload: productsFilterByCategory });
  };
};

export const orderProductByPrice = (orderPrice) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProducts];
    let productsPrice;
    if (orderPrice === "menor") {
      productsPrice = allProducts.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (orderPrice === "mayor") {
      productsPrice = allProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
    dispatch({ type: ORDER_PRODUCT_BY_PRICE, payload: productsPrice });
  };
};

export const orderProductByRating = (orderRating) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProducts];
    let productsRating;
    if (orderRating === "menor") {
      productsRating = allProducts.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (orderRating === "mayor") {
      productsRating = allProducts.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
    dispatch({ type: ORDER_PRODUCT_BY_RATING, payload: productsRating });
  };
};

export const orderProductByBrand = (selectedBrand) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProductsCopy];
    let productBrand;
    if (selectedBrand === "All") {
      productBrand = allProducts;
    } else {
      productBrand = allProducts.filter((p) => p.brand.includes(selectedBrand));
    }
    dispatch({ type: ORDER_PRODUCT_BY_BRAND, payload: productBrand });
  };
};
