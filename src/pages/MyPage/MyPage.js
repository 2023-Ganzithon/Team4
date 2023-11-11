import React from "react";
import styles from './MyPage.module.css';
import Profile from '../../assets/image/혁수는못말려.jpg'
const MyPage = () => {
  return (
    <div className={styles.myPage}>
      <div className={styles.profile}>
        <img src={Profile} alt='프로필 사진' className={styles.profile_image}/>
        <div className={styles.profile_information}>
          <div>닉네임</div>
          <div>등급(온도)</div>
        </div>
        <div className={styles.modify_btn}>
          <button>수정</button>
        </div>
      </div>
      <div className={styles.menu_list}>
        <div className={styles.menu}>알림</div>
        <div className={styles.menu}>스크랩</div>
        <div className={styles.menu}>작성글</div>
        <div className={styles.menu}>거래 내역</div>
        <div className={styles.menu}>받은 거래 후기</div>
        <div className={styles.menu}>로그아웃</div>
      </div>
    </div>
  )
};

export default MyPage;
