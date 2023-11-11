import React, { useState, useEffect, useRef } from "react";
import styles from "./KakaoMap.module.css";
import { Map, MapMarker, Circle } from "react-kakao-maps-sdk";

const KakaoMap = ({ radius, setLoc }) => {
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

          setLoc({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
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

    setDrawingCircleData({
      center: {
        lat: location.center.lat,
        lng: location.center.lng,
      },
      radius: radius,
    });
  }, []);

  useEffect(() => {
    setDrawingCircleData({
      center: {
        lat: position ? position.lat : location.center.lat,
        lng: position ? position.lng : location.center.lng,
      },
      radius: radius,
    });
  }, [radius]);

  const [position, setPosition] = useState();
  const [deleteDefaultMarker, setDeleteDefaultMarker] = useState(false);

  const [drawingCircleData, setDrawingCircleData] = useState(); // 그려지고 있는 상태를 가지고 있을 변수

  const onClick = (_t, mouseEvent) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });

    setLoc({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });

    setDrawingCircleData({
      center: {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      },
      radius: radius,
    });

    setDeleteDefaultMarker(true);
  };

  return (
    <>
      <Map // 지도를 표시할 Container
        center={location.center}
        className={styles.map}
        level={5} // 지도의 확대 레벨
        onClick={onClick}
      >
        {!location.isLoading && (
          <>
            <MapMarker
              position={deleteDefaultMarker ? position : location.center}
            />
            <Circle
              center={drawingCircleData.center}
              radius={drawingCircleData.radius}
              strokeWeight={1} // 선의 두께입니다
              strokeColor={"#00a0e9"} // 선의 색깔입니다
              strokeOpacity={0.1} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
              strokeStyle={"solid"} // 선의 스타일입니다
              fillColor={"#00a0e9"} // 채우기 색깔입니다
              fillOpacity={0.2} // 채우기 불투명도입니다
            />
          </>
        )}
      </Map>
    </>
  );
};

export default KakaoMap;
