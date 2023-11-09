import React, {useState} from "react";
import styles from "../../styles/MainPage/MainPage.module.css";
import Delivery from "../../components/MainPage/Delivery"
const MainPage = () => {
  const [listType, setListType] = useState('ingredients');
  const clickType = (type) => {
    if (type === listType) {
      return
    }
    setListType(type);

  }
  return (
    <div className={styles.MainPage}>
      <div className={styles.type_container}>
        <div className={styles.ingredients} onClick={()=>clickType('ingredients')}
        style={listType === 'ingredients' ?{ 
        backgroundColor: '#4CAF50',
        color: 'white'} : {
          backgroundColor: 'white',
        color: 'black'
        }}
        >식재료</div>
        <div className={styles.delivery} onClick={()=>clickType('delivery')}
        style={listType === 'delivery' ?{ 
          backgroundColor: '#4CAF50',
          color: 'white'} : {
            backgroundColor: 'white',
          color: 'black'
          }}>배달음식</div>
      </div>
      {/* type에 따라 컨텐츠 분기 */}
      <div className={styles.posts_lists}>
        <Delivery/>
      </div>
    </div>
  )
};

export default MainPage;
