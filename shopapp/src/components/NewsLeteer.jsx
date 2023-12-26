import Send from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #f5fbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
  color: TEAL;
`;
const Description = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 20px;
`;
const Button = styled.button`
  flex: 1;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: teal;
    background-color: white;
    transition: all ease 0.5s;
  }
`;

const NewsLeteer = () => {
  return (
    <Container>
      <Title>JOIN FUROR CLUB</Title>
      <Description>Get timely update from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLeteer;
