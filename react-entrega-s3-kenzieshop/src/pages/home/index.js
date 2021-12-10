import { Link } from "react-router-dom";
import products from "../../store/modules/products";
import { cartThunk } from "../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import { Card } from "./styles";
import Button from "@mui/material/Button";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(cartThunk(product));
  };

  return (
    <Container>
      <h1>Home</h1>
      <Link to="/cart">cart</Link>
      <ul>
        {products.map((product, index) => {
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
              <Button variant="contained" onClick={() => handleClick(product)}>
                cart
              </Button>
            </Card>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
