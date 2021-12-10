import { ADD_CART, REMOVE_CART } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const reducerShop = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { produto } = action;
      return [...state, produto];
    case REMOVE_CART:
      const { remover } = action;
      return [remover];
    default:
      return state;
  }
};

export default reducerShop;
