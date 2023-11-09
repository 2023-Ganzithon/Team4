import React, {useState} from "react";
import styles from "../../styles/MainPage/MainPage.module.css";
import Delivery from "../../components/MainPage/Delivery"
const MainPage = () => {
  const [listType, setListTyle] = useState('groceries');

  return (
    <div className={styles.MainPage}>
      <div>
        <div>식재료</div>
        <div>배달음식</div>
      </div>
      <div className={styles.posts_lists}>
        <Delivery/>
      </div>
    </div>
  )
};

export default MainPage;
