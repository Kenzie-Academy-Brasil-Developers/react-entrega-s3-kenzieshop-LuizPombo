import { add } from "./action";
import { remove } from "./action";

export const cartThunk = (produto) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, produto];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(add(produto));
};

export const removeThunk = (produto) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = list;

  const local = newList.indexOf(
    newList.find((element) => element.name === produto.name)
  );

  newList.splice(local, 1);

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(remove(produto));
};
