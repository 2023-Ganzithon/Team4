import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WritePostModal.module.css";

const WritePostModal = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("abcd");

  const ingredientsButtonClick = () => {
    if (token) {
      alert("식재료 판매/함께 구매");
      navigate("/write", { state: { type: "grocery" } });
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  const deliveryButtonClick = () => {
    if (token) {
      alert("배달음식 함께 주문");
      navigate("/write", { state: { type: "delivery" } });
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  };

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal}>
        <div className={styles.container} onClick={ingredientsButtonClick}>
          <p className={styles.text}>식재료 판매/함께 구매</p>
        </div>
        <hr className={styles.line} />
        <div className={styles.container} onClick={deliveryButtonClick}>
          <p className={styles.text}>배달음식 함께 주문</p>
        </div>
      </div>
    </div>
  );
};

export default WritePostModal;
