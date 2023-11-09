import React, {useState} from 'react'
import axios from 'axios';
import styles from '../../styles/MainPage/Delivery.module.css'

//images 
import Navigation from '../../assets/image/icon_navigation.png'
import PriceTag from '../../assets/image/price_tag_icon.png'
import Timer from '../../assets/image/timer_icon.png'
import Map from '../../assets/image/map_icon.png'
import Heart from '../../assets/image/heart_icon.png'
import FillHeart from '../../assets/image/fill_heart_icon.png'
const Delivery = () => {
  let text = '포도 두 송이 남는데 가져가실분ㅇㅇ'
  const [likes, setLikes] = useState(0);
  const onClickHeartBtn = async () => {
    try {
      const response = await axios.put('/api/likes', { likes: likes + 1 });
      if (response.status === 200) {
        setLikes(likes + 1);
      }
    } catch (error) {
      console.error('Error increasing likes', error);
    }
  }
  return (
    <div className={styles.delivery}>
      <div className={styles.title_container}>
        <div className={styles.title}>{text}</div>
        <div className={styles.upload_time}>5분전</div>
        <div className={styles.menu}>
          <img src={Navigation} alt='icon_navigation'/>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.status_container}>
          <div className={styles.status}>팔아요</div>
        </div>
        <div className={styles.price}>
          <img src={PriceTag} alt='price_tag' className={styles.icon}/>
          <div>3,000원/송이</div>
        </div>
        <div className={styles.location}>
          <img src={Map} alt='map' className={styles.icon}/>
          <div>공릉2동</div>
        </div>
        <div className={styles.purchase_date}>
          <img src={Timer} alt='timer' className={styles.icon}/>
          <div>하루 전 구매</div>
        </div>
        <div className={styles.image_container}>
          {/* 4개까지만 보이기 */}
          <div className={styles.upload_image}></div>
          <div className={styles.upload_image}></div>
          <div className={styles.upload_image}></div>
          <div className={styles.upload_image}></div>
        </div>
        <div className={styles.post_contents}>
        타코야끼 먹고 싶은데 최소주문금액이 높아서 올려봅니다
        여러번 먹어봤어요 맛은 제가 보장합니다!!!사랑사랑사랑
        </div>
        <div className={styles.comments}>
          <button className={styles.like_btn} onClick={onClickHeartBtn}>
            {/* 관심 게시글인지 아닌지에 따라 하트 색깔 다르게 */}
            <img src={Heart} alt='heart' className={styles.icon}/>
            <div className={styles.likes}>관심 <span>{likes}</span></div>
          </button>
          <button>
            댓글 <span>10</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Delivery;