import { ALL_CATEGORIES, ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCT_BY_NAME } from "./actions.js";

const initialState = {
  allProducts: [],
  getProductById: [],
  allCategories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
      case ALL_CATEGORIES:
      return {
        ...state,
        allProducts: action.payload,
      };
      case GET_PRODUCT_BY_ID:
      return {
        ...state,
        getProductById: action.payload,
      };
      case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
