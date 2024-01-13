import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLeteer from "../components/NewsLeteer";
import Footer from "../components/Footer";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 800;
  font-size: 25px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://furorjeans.com/cdn/shop/files/23_M_MenJackets_FMTJW22-017_3.jpg?v=1697007793" />
        </ImageContainer>
        <InfoContainer>
          <Title>WOVEN GILLET - FMTJW22-017</Title>
          <Desc>
            Article No: FMTJW22-017 Woven Gillet Regular Fit Cotton Fabric Patch
            Pocket
          </Desc>
          <Price>$20</Price>
          <Filter>
            <FilterTitle></FilterTitle>
            <FilterColor color="white" /> <FilterColor color="black" />
            <FilterColor color="darkblue" />
          </Filter>
        </InfoContainer>
      </Wrapper>
      <NewsLeteer />
      <Footer />
    </Container>
  );
};

export default Product;
