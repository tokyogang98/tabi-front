import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import styled from "styled-components";
import GoogleMap from "../components/GoogleMap";
import { useNavigate } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  const [center, setCenter] = useState({ lat: 35.652832, lng: 133.839478 });
  const [selected, setSelected] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <MainContainer>
      <Nav>
        <Logo>TABI MAP</Logo>
      </Nav>
      <TopRow style={{ left: "30px" }}>
        <TopRowBtn
          bg={selected === "스즈메의 문단속" ? "#de5962" : "#fff"}
          color={selected === "스즈메의 문단속" ? "#fff" : "#000"}
          onClick={() => {
            setSelected("스즈메의 문단속");
          }}
        >
          스즈메의 문단속
        </TopRowBtn>
      </TopRow>
      <TopRow style={{ right: "30px" }}>
        <TopRowBtn
          bg="#fff"
          color="#000"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </TopRowBtn>
      </TopRow>
      <MapArea>
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
          <GoogleMap
            center={center}
            setSelectedMarker={setSelectedMarker}
            selected={selected}
          />
        </Wrapper>
      </MapArea>
      <Sheet bottom={selectedMarker ? "0" : "-300px"}>
        {selectedMarker ? (
          <>
            <SheetTop>
              <Img src={selectedMarker.image} />
              <SheetRight>
                <Name>{selectedMarker.name}</Name>
                <Address>{selectedMarker.address}</Address>
                <Tel
                  onClick={() => {
                    window.open("tel:" + selectedMarker.tel);
                  }}
                >
                  {selectedMarker.tel}
                </Tel>
                {selectedMarker.website.length > 0 ? (
                  <Website
                    onClick={() => {
                      window.open(selectedMarker.website);
                    }}
                  >
                    관련정보 가기
                  </Website>
                ) : null}
              </SheetRight>
            </SheetTop>
            <SheetBottom
              onClick={() => {
                window.open(
                  `http://maps.google.com/maps?z=12&t=m&q=loc:${selectedMarker.lat}+${selectedMarker.lng}`
                );
              }}
            >
              Google Map
            </SheetBottom>
          </>
        ) : null}
      </Sheet>
    </MainContainer>
  );
}

export default Map;
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #a0a0a0;
`;
const Logo = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-left: 30px;
`;
const MapArea = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
`;
const Sheet = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 460px;
  height: 260px;
  background: #fff;
  border-radius: 30px 30px 0 0;
  z-index: 100;
  box-shadow: 0px -30px 50px #00000020;
  bottom: ${(props) => props.bottom};
  transition: 0.3s ease-in-out;
`;
const SheetTop = styled.div`
  width: calc(100%-40px);
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;
const SheetBottom = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background-color: #f0f0f0;
`;
const SheetRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const Address = styled.p`
  font-size: 16px;
`;
const Tel = styled.p`
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;
const Website = styled.p`
  cursor: pointer;
  font-size: 16px;
  margin-top: 3px;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;
const TopRow = styled.div`
  position: fixed;
  top: 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 100;
`;
const TopRowBtn = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 100px;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  box-shadow: 0px 0px 50px #00000020;
`;
