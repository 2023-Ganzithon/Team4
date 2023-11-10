import React, {useState, useRef, useEffect} from 'react'
import { Link } from "react-router-dom";
import styles from '../../styles/LowerNavBar.module.css'
// images
import MyPage from '../../assets/image/mypage_icon.png'
import ActivatedMyPage from '../../assets/image/activated_mypage_icon.png'
import Write from '../../assets/image/write_icon.png'
import ActivatedWrite from '../../assets/image/activated_write_icon.png'
import Home from '../../assets/image/home_icon.png'
import ActivatedHome from '../../assets/image/activated_home_icon.png'

export const LowerNavBar = () => {
  const [navType, setNavType] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const changeType = (type) => {
    setNavType(type);
    if (type === 'write') {
      clickWrite();
    }
  }
  const clickWrite = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  useEffect(() => {
    // modalRef가 현재 null이 아니라면 해당 요소가 이벤트의 타겟을 포함하지 않는지 확인
    const handleClickOutside = (e) => {
      //클릭이 요소 내부에서 발생하지 않았다면 모달을 끈다 
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    // 클릭 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 unmount 시, 이벤트 리스너 해제
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);
  return (
    <div className={styles.lowerNavBar}>
      {showModal ? <div className={styles.modal} ref={modalRef} onClick={closeModal}>
        {/* 상태값 전달하기 */}
        <Link to="/write">식재료 판매/함께 구매</Link>
        <Link to="/write">배달음식 함께 주문</Link>
      </div>
      :
      null
      }
      <Link to='/' className={styles.icon_container}>
        <div className={styles.icon_text} onClick={() => changeType('home')}>
          <img src={navType === 'home' ? ActivatedHome : Home} alt='home_icon' className={styles.icon} />
          <span style={navType === 'home' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>홈</span>
        </div>
      </Link>
      <Link className={styles.icon_container}>
        <div className={styles.icon_text} onClick={() => changeType('write')}>
          <img src={navType === 'write' ? ActivatedWrite : Write} alt='home_icon' className={styles.icon}/>
          <span style={navType === 'write' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>글쓰기</span>
        </div>
      </Link>
      <Link to="/mypage" className={styles.icon_container}>
        <div className={styles.icon_text} onClick={() => changeType('mypage')}>
          <img src={navType === 'mypage' ? ActivatedMyPage : MyPage} alt='home_icon' className={styles.icon}/>
          <span style={navType === 'mypage' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>마이페이지</span>
        </div>
      </Link>
    </div>
  )
}
