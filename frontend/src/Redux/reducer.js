import { ALL_CATEGORIES, ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_PRODUCT_BY_NAME } from "./actions.js";

const initialState = {
  allProducts: [],
  allProductsCopy: [],
  product: [],
  allCategories: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        allProductsCopy: action.payload,
        loading: true
      };
      case ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
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

    default:
      return {
        ...state,
      };
  }
}
