import React, { useState, useEffect, useRef } from "react";
import styles from "./KakaoMap.module.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

const KakaoMap = () => {
  const [location, setLocation] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const [position, setPosition] = useState();

  const [deleteDefaultMarker, setDeleteDefaultMarker] = useState(false);

  const onClick = (_t, mouseEvent) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
    setDeleteDefaultMarker(true);
  };

  return (
    <>
      <Map // 지도를 표시할 Container
        center={location.center}
        style={{
          width: "100%",
          height: "80%",
        }}
        level={3} // 지도의 확대 레벨
        onClick={onClick}
      >
        {!location.isLoading && (
          <MapMarker
            position={deleteDefaultMarker ? position : location.center}
          />
        )}
      </Map>
      {position && (
        <p>
          {"클릭한 위치의 위도는 " +
            position.lat +
            " 이고, 경도는 " +
            position.lng +
            " 입니다"}
        </p>
      )}
    </>
  );
};

export default KakaoMap;
