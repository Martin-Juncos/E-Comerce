import {
  ALL_CATEGORIES,
  CATEGORY_FILTER,
  ORDER_PRODUCT_BY_PRICE,
  ORDER_PRODUCT_BY_RATING,
  ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  ORDER_PRODUCT_BY_BRAND,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "./actions.js";

const initialState = {
  allProducts: [],
  allProductsCopy: [],
  product: [],
  allCategories: [],
  allCategoriesCopy: [],
  loading: false,
  cart: [],
  favoriteProducts : []
};
console.log(initialState.cart)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        allProductsCopy: action.payload,
        loading: true,
      };
    case ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
        allCategoriesCopy: action.payload,
      };
    case CATEGORY_FILTER:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCT_BY_PRICE:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCT_BY_RATING:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCT_BY_BRAND:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_ONE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
      case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload ]
      };
      case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter( (product) => {
          return product.id !== action.payload;
        })
      };
    default:
      return {
        ...state,
      };
  }
}
