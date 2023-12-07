import Product from "./Product";
import { popularProducts } from "../data.js";
import styled from "styled-components";
const Container = styled.div``;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
