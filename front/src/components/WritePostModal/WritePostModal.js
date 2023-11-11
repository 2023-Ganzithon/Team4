import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WritePostModal.module.css";

const WritePostModal = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  useEffect(() => {
    if (localStorage.getItem("login-token") !== undefined) {
      setToken(localStorage.getItem("login-token"));
    }
  }, []);

  const ingredientsButtonClick = () => {
    if (token !== null) {
      alert("식재료 판매/함께 구매");
      navigate("/write", { state: { type: "grocery" } });
    } else {
      alert("로그인이 필요한 기능입니다.\n로그인 페이지로 이동합니다.");
      navigate("/login");
    }
  };

  const deliveryButtonClick = () => {
    if (token !== null) {
      alert("배달음식 함께 주문");
      navigate("/write", { state: { type: "delivery" } });
    } else {
      alert("로그인이 필요한 기능입니다.\n로그인 페이지로 이동합니다.");
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
