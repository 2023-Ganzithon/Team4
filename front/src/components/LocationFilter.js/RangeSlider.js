import React, { useEffect, useState } from "react";
import styles from "./RangeSlider.module.css";

const RangeSlider = ({ min, max, value, step, onChange }) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  return (
    <div>
      <input
        type="range"
        value={maxValue}
        min={min}
        max={max}
        step={step}
        onChange={handleMaxChange}
        className={styles.slider}
      />
    </div>
  );
};

export default RangeSlider;
