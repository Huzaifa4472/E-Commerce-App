import styled from "styled-components";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import Map from "@mui/icons-material/Map";
import Mail from "@mui/icons-material/Mail";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 15px 0px;
  line-height: 1.5;
`;
const TitleLeft = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #${(props) => props.color};
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  paddding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const ContactDesc = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FUROR</Logo>
        <Desc>
          A Casual Men's Western Wear brand. It was initially established as a
          separate line of clothing under Eden Apparel's product range as a part
          of the brand, edenrobe. Whereas, edenrobe was established in 1988 and
          offers clothing for Men, Women and Kids.
        </Desc>
        <TitleLeft>FOLLOW US</TitleLeft>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookRounded />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>YOU MIGHT INTERESTED IN</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Track Order</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactDesc />
        <ContactItem>
          <Map style={{ marginRight: "10px" }} />
          Karachi,Pakistan
        </ContactItem>
        <ContactItem>
          <PhoneAndroid style={{ marginRight: "10px" }} />
          02137175353
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          cs@furorjeans.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
