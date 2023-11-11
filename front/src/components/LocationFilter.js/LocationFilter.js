import React from "react";
import KakaoMap from "../KakaoMap/KakaoMap";
import styles from "./LocationFilter.module.css";

const LocationFilter = () => {
  return (
    <div className={styles.modal_container}>
      <KakaoMap />
    </div>
  );
};

export default LocationFilter;
