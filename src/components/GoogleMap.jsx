import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { markerData } from "../data/markerData";

function GoogleMap({ center, setSelectedMarker, selected }) {
  const ref = useRef();
  const [map, setMap] = useState(null);
  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center: center,
        zoom: 6,
        disableDefaultUI: true,
      })
    );
  }, [ref, center]);
  useEffect(() => {
    if (selected === "스즈메의 문단속") {
      markerData.forEach((el) => {
        const marker = new window.google.maps.Marker({
          position: { lat: parseFloat(el.lat), lng: parseFloat(el.lng) },
          map,
        });
        map.addListener("click", () => {
          setSelectedMarker(null);
        });
        marker.addListener("click", () => {
          setSelectedMarker(el);
        });
      });
    }
  }, [map, selected]);
  return <Main id="map" ref={ref} />;
}
export default GoogleMap;
const Main = styled.div`
  width: 100vw;
  height: 100%;
`;
