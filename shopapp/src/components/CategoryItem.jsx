import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in;
  }
`;
const Title = styled.h1`
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const Button = styled.button`
  background-color: orange;
  padding: 8px;
  border-radius: 7px;
  color: white;
  border: 1px solid orange;
  font-weight: 600;
  &:hover {
    background: transparent;
    transition: all 0.3s ease-in;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
