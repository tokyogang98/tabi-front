import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactFlagsSelect from "react-flags-select";

function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("KR");
  return (
    <MainContainer>
      <Nav>
        <Logo>TABI</Logo>
        <NavRight>
          <NavRightBtn
            onClick={() => {
              navigate("/log-in");
            }}
          >
            Log In
          </NavRightBtn>
          <NavRightBtn
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </NavRightBtn>
          <CustomReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            countries={["US", "KR", "JP"]}
            showSelectedLabel={false}
            showOptionLabel={false}
          />
        </NavRight>
      </Nav>
      <NavBottom>
        <NavBottomBtn
          selected={selected === 0 ? "true" : "false"}
          onClick={() => {
            setSelected(0);
          }}
        >
          Home
        </NavBottomBtn>
        <NavBottomBtn
          selected={selected === 1 ? "true" : "false"}
          onClick={() => {
            setSelected(1);
          }}
        >
          Suzume
        </NavBottomBtn>
        <NavBottomBtn
          selected={selected === 2 ? "true" : "false"}
          onClick={() => {
            setSelected(2);
          }}
        >
          FAQ
        </NavBottomBtn>
      </NavBottom>
      <TabiMap
        onClick={() => {
          navigate("/map");
        }}
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      >
        TABI MAP
      </TabiMap>
      <Container>
        <Title>여행 코스추천</Title>
        <Row>
          <Column>
            <Img
              onClick={() => {
                window.open("https://google.com");
              }}
              src="https://a.cdn-hotels.com/gdcs/production172/d1381/8efd3f69-63bb-4398-a595-095cea25fc37.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            />
            <ColumnTitle>도쿄 코스</ColumnTitle>
            <ColumnBottom>🔔 지금까지 10명이 이 투어를 예약했어요</ColumnBottom>
          </Column>
          <Column>
            <Img
              onClick={() => {
                window.open("https://google.com");
              }}
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <ColumnTitle>스즈메 코스</ColumnTitle>
            <ColumnBottom>🔔 지금까지 10명이 이 투어를 예약했어요</ColumnBottom>
          </Column>
        </Row>
      </Container>
      <Container>
        <Title>플레이리스트 추천</Title>
        <Row>
          <Column>
            <Img
              onClick={() => {
                window.open("https://google.com");
              }}
              src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <ColumnTitle>공부할 때</ColumnTitle>
          </Column>
          <Column>
            <Img
              onClick={() => {
                window.open("https://google.com");
              }}
              src="https://img.freepik.com/premium-photo/onsen-room-interior-with-wooden-bath-and-decoration-wooden-japanese-style_43151-2075.jpg?w=2000"
            />
            <ColumnTitle>여행할 때</ColumnTitle>
          </Column>
        </Row>
      </Container>
      <Footer>
        <FooterTitle>TABI</FooterTitle>
        <FooterDesc>
          11 byeol-yanglo gyeong-gido korea
          <br />
          CEO YUN SungJun | Business | Tel (+82)1-1234-1234
        </FooterDesc>
        <FooterBottom>
          <FooterBottomText>Terms and conditions</FooterBottomText>
          <FooterBottomText>Privacy policy</FooterBottomText>
          <FooterBottomText>Travel terms and conditions</FooterBottomText>
        </FooterBottom>
      </Footer>
    </MainContainer>
  );
}

export default Home;
const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 30px;
`;
const Logo = styled.p`
  font-size: 45px;
  font-weight: 700;
  margin-left: 30px;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 30px;
`;
const NavRightBtn = styled.p`
  cursor: pointer;
  cursor: pointer;
  font-size: 18px;
`;
const NavBottom = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 30px;
`;
const NavBottomBtn = styled.p`
  cursor: pointer;
  font-size: 28px;
  border-bottom: ${(props) =>
    props.selected === "true" ? "2px solid #000" : "2px solid transparent"};
  opacity: ${(props) => (props.selected === "true" ? 1 : 0.5)};
`;
const TabiMap = styled.div`
  cursor: pointer;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  width: calc(100vw - 60px);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background: #d0d0d0;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-position: 30% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  color: #fff;
  font-size: 35px;
  font-weight: 700;
`;
const Container = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  width: calc(100vw - 60px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 80px;
`;
const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;
const ColumnTitle = styled.p`
  font-size: 23px;
  font-weight: 600;
  margin-top: 10px;
`;
const ColumnBottom = styled.div`
  width: 100%;
  height: 30px;
  background: #0a0a0a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #fff;
  margin-top: 20px;
`;
const Footer = styled.div`
  margin-top: 50px;
  padding: 30px;
  width: calc(100vw - 60px);
  background: #0a0a0a;
  color: #ffffffa0;
`;
const FooterTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;
const FooterDesc = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const FooterBottom = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const FooterBottomText = styled.p`
  font-size: 16px;
`;
const CustomReactFlagsSelect = styled(ReactFlagsSelect)`
  margin-bottom: -3px;
  padding-bottom: 0;
`;
