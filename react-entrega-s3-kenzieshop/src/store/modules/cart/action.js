import { ADD_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";
export const add = (produto) => ({
  type: ADD_CART,
  produto,
});

export const remove = (produto) => ({
  type: REMOVE_CART,
  produto,
});
