import { ALL_PRODUCTS } from "./actions.js";

const initialState = {
  allProducts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
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
