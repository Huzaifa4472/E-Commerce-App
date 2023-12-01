import styled from "styled-components";
const Container = styled.div`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: teal;
  color: white;
`;
const Announcement = () => {
  return <Container>Super Deal!! Free Delivery on Orders over 50$ </Container>;
};

export default Announcement;
