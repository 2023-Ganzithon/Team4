import React, { useState } from "react";
import KakaoMap from "../KakaoMap/KakaoMap";
import styles from "./LocationFilter.module.css";
import RangeSlider from "./RangeSlider";

const LocationFilter = () => {
  const [value, setValue] = useState({ min: 0, max: 100 });

  return (
    <div className={styles.modal_container}>
      <KakaoMap />
      <div className={styles.guide_text_container}>
        <div className={styles.guide_text}>
          <div className={styles.marker_icon} />
          <p className={styles.text}>클릭하여 현재 위치를 설정하세요.</p>
        </div>
        <div className={styles.guide_text}>
          <div className={styles.marker_icon} />
          <p className={styles.text}>거래 범위 선택(반경)</p>
          <p className={styles.radius}>{value.max / 100}km 이내</p>
        </div>
        <RangeSlider
          min={0}
          max={200}
          step={5}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
