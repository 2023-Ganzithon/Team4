import React, {useState} from "react";
import axios from "axios";
import styles from "./MainPage.module.css";
import Post from "../../components/MainPage/Post"
import Loading from "../../assets/image/loading.gif"
import MapIcon from "../../assets/image/map_icon.png"
const MainPage = () => {
  const [listType, setListType] = useState('ingredients');
  const [showLocationModal, setShowLocationModal] = useState(true);
  const [inputLocationValue, setInputLocationValue] = useState('');
  const changeType = (type) => {
    if (type === listType) {
      return
    }
    setListType(type);
  }

  const handleInputChange = (e) => {
    setInputLocationValue(e.target.value);
  };

  const handleSubmit = async (e) => { // 폼 제출을 처리하는 함수
    e.preventDefault(); // 폼 제출에 의한 페이지 새로고침 방지

    // 서버에 데이터 전송
    try {
      const response = await axios.post('서버 URL', { location: inputLocationValue });
      console.log(response.data);
      // 성공적으로 데이터를 전송한 후의 처리를 여기에 작성
    } catch (error) {
      console.error(error);
      // 데이터 전송에 실패한 경우의 처리를 여기에 작성
    }
  };
  const closeModal = () => {
    setShowLocationModal(false);
  }
  const handleClickModalContent = (e) => {
    e.stopPropagation();
  };
  return (
    <>
    {showLocationModal ?
      <div className={styles.location_modal} onClick={closeModal}>
        <form className={styles.modal_content} onSubmit={handleSubmit} onClick={handleClickModalContent}>
          <div className={styles.modal_ment}>
            <img src={MapIcon} alt="map_icon" className={styles.icon}/>
            주로 거래하실 지역을 입력해주세요.
          </div>
          <input type="text" placeholder="구까지만 입력 (ex. 노원구)" className={styles.modal_input}
          value={inputLocationValue} onChange={handleInputChange}/>
        </form>
      </div>
      : null
  }
      <div className={styles.MainPage}>
        {/* <div className={styles.loading_screen}>
          <img src={Loading} alt='로딩중'/>
        </div> */}

        <div className={styles.type_container}>
          <div className={styles.ingredients} onClick={()=>changeType('ingredients')}
          style={listType === 'ingredients' ?{ 
          backgroundColor: '#4CAF50',
          color: 'white'} : {
            backgroundColor: 'white',
          color: 'black'
          }}
          >식재료</div>
          <div className={styles.delivery} onClick={()=>changeType('delivery')}
          style={listType === 'delivery' ?{ 
            backgroundColor: '#4CAF50',
            color: 'white'} : {
              backgroundColor: 'white',
            color: 'black'
            }}>배달음식</div>
        </div>

        <div className={styles.posts_lists}>
          <Post type={listType}/>
          <Post/>
        </div>
      </div>
    </>
  )
};

export default MainPage;
