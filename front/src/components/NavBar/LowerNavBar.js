import React, {useState} from 'react'
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
  const changeType = (type) => {
    setNavType(type);
  }
  return (
    <div className={styles.lowerNavBar}>
      <div>
        <img src={navType === 'home' ? ActivatedHome : Home} alt='home_icon' className={styles.icon} onClick={() => changeType('home')}/>
          <span style={navType === 'home' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>홈</span>
      </div>
      <div>
        <img src={navType === 'write' ? ActivatedWrite : Write} alt='home_icon' className={styles.icon} onClick={() => changeType('write')}/>
        <span style={navType === 'write' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>글쓰기</span>
      </div>
      <div>
        <img src={navType === 'mypage' ? ActivatedMyPage : MyPage} alt='home_icon' className={styles.icon} onClick={() => changeType('mypage')}/>
        <span style={navType === 'mypage' ? {color: '#4CAF50'} : {color: '#B8B8B8'}}>마이페이지</span>
      </div>
    </div>
  )
}
