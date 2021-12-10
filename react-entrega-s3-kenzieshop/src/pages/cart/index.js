import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container } from "../home/styles";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeThunk } from "../../store/modules/cart/thunk";

const Cart = () => {
  const [carrinho, setCarrinho] = useState([]);
  const dispatch = useDispatch();
  const storageCart = useSelector((state) => state.reducerShop);
  useEffect(() => {
    setCarrinho(JSON.parse(localStorage.getItem("cart")));
  }, [storageCart]);

  function remover(produto) {
    dispatch(removeThunk(produto));
  }

  return (
    <Container>
      <h1>cart</h1>
      <Link to="/">home</Link>
      <ul>
        {carrinho.map((product, index) => {
          return (
            <Card key={index}>
              {product.name}

              <img
                src={product.image}
                alt={product.name}
                width="100px"
                height="100px"
              />
              {product.price}
              <Button variant="contained" onClick={() => remover(product)}>
                remover
              </Button>
            </Card>
          );
        })}
      </ul>
      <p>
        total R$
        {carrinho
          .reduce((valorAnterior, ValorAtual) => {
            return ValorAtual.price + valorAnterior;
          }, 0)
          .toFixed(2)}
      </p>
      <Button variant="contained">Finalizar Compra</Button>
    </Container>
  );
};

export default Cart;
