import React, { useState } from "react";
import KakaoMap from "../KakaoMap/KakaoMap";
import styles from "./LocationFilter.module.css";
import RangeSlider from "./RangeSlider";
import API from "../../services/API";

const LocationFilter = () => {
  const [value, setValue] = useState({ min: 0, max: 100 });
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const onClick = () => {
    console.log("onclick");
    /* 
    { lat, lng, radius } 
    */
  };

  return (
    <div className={styles.modal_container}>
      <KakaoMap radius={value.max} setLoc={setLocation} />
      <div className={styles.guide_text_container}>
        <div className={styles.guide_text}>
          <div className={styles.marker_icon} />
          <p className={styles.text}>클릭하여 현재 위치를 설정하세요.</p>
        </div>
        <div className={styles.guide_text}>
          <div className={styles.marker_icon} />
          <p className={styles.text}>거래 범위 선택(반경)</p>
          <p className={styles.radius}>{value.max}m 이내</p>
        </div>
        <RangeSlider
          min={0}
          max={2000}
          step={5}
          value={value}
          onChange={setValue}
        />
      </div>
      <button className={styles.submit_button} onClick={onClick}>
        설정 완료
      </button>
    </div>
  );
};

export default LocationFilter;
