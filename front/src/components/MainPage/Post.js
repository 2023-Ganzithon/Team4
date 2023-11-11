import React, {useState, useRef, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from '../../styles/MainPage/Post.module.css'

//images 
import Navigation from '../../assets/image/icon_navigation.png'
import PriceTag from '../../assets/image/price_tag_icon.png'
import Timer from '../../assets/image/timer_icon.png'
import Map from '../../assets/image/map_icon.png'
import Heart from '../../assets/image/heart_icon.png'
import FillHeart from '../../assets/image/fill_heart_icon.png'
import LinkIcon from '../../assets/image/link_icon.png'
const Post = ({type, data, key}) => {
  const [likes, setLikes] = useState(0);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const modalRef = useRef();

  const Axios = axios.create({
    baseURL: "https://33000086-b2a7-409c-bd45-5ea52501a43d.mock.pstmn.io",
    headers: {
      accept: "application/json",
    },
  });

  const onClickHeartBtn = async () => {
    try {
      let response;
      if (type === 'ingredients') {
        response = await Axios.post(`/groceries/${data.id}/like/`, { likes: likes + 1 });
      } else {
        response = await Axios.post(`/deliveries/${data.id}/like/`, { likes: likes + 1 });
      }
      if (response.status === 200) {
      }
    } catch (error) {
      console.error('Error increasing likes', error);
    }
  }
  const clickMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenuModal(true);
  }

  const moment = require('moment'); // Moment.js 불러오기
  require('moment/locale/ko'); // 한국어 로케일 불러오기

  moment.locale('ko'); // 한국어로 설정

  const calculateTime = (createdAt) => {
      // Moment 객체로 변환
      const createdDate = moment(createdAt);
      // 현재 시간과의 차이를 상대적인 시간으로 표시
      return createdDate.fromNow();
  }


  useEffect(() => {
    // modalRef가 현재 null이 아니라면 해당 요소가 이벤트의 타겟을 포함하지 않는지 확인
    const handleClickOutside = (e) => {
      //클릭이 요소 내부에서 발생하지 않았다면 모달을 끈다 
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowMenuModal(false);
      }
    };

    // 클릭 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 unmount 시, 이벤트 리스너 해제
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenuModal]);
  return (
    <Link to={`/post/${data.id}`} className={styles.post} key={key}>
      {data.is_completed ? 
      <div className={styles.cover}>
        <div className={styles.cover_status}>판매 완료</div>
      </div> :
      null
    }
      <div className={styles.title_container}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.upload_time}>{calculateTime(data.created_at)}</div>
        <div className={styles.menu} onClick={clickMenu}>
          <img src={Navigation} alt='icon_navigation'/>
          {showMenuModal ? 
          <div className={styles.modal} ref={modalRef}>
          <Link to='/글수정페이지'>수정/삭제</Link>
        </div> :
        null
          }
          
        </div>
      </div>
      {
        type === 'ingredients' ? (
          // 식재료 글
          <div className={styles.contents}>
            <div className={styles.status_container}>
              <span className={styles.status}>{data.post_type}</span>
            </div>
            <div className={styles.price}>
              <img src={PriceTag} alt='price_tag' className={styles.icon}/>
              <div>{data.price}/{data.unit}</div>
            </div>
            <div className={styles.location}>
              <img src={Map} alt='map' className={styles.icon}/>
              <div>{data.location}</div>
            </div>
            <div className={styles.purchase_date}>
              <img src={Timer} alt='timer' className={styles.icon}/>
              <div>{data.buy_time}</div>
            </div>
            <div className={styles.image_container}>
              {/* 4개까지만 보이기 */}
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
            </div>
            <div className={styles.post_contents}>
            {data.content}
            </div>
            <div className={styles.comments}>
              <button className={styles.like_btn} onClick={onClickHeartBtn}>
                {data.is_liked ? 
                <img src={FillHeart} alt='heart' className={styles.icon}/>
                :
                <img src={Heart} alt='heart' className={styles.icon}/>
              }
                <div className={styles.likes}>관심 <span>{data.like_cnt}</span></div>
              </button>
              <div>댓글 {data.comments.length}</div>
            </div>
          </div>
        ) : (
          // 배달 글
          <div className={styles.contents}>
            <div className={styles.location}>
              <img src={Map} alt='map' className={styles.icon}/>
              <div>{data.location}</div>
            </div>
            <div className={styles.price}>
              <img src={PriceTag} alt='price_tag' className={styles.icon}/>
              <div>최소주문금액 {data.minimumPrice}원</div>
            </div>
            <div className={styles.purchase_date}>
              <img src={LinkIcon} alt='timer' className={styles.icon}/>
              <Link to={data.link} target='_blank'>{data.link}</Link>
            </div>
            <div className={styles.image_container}>
              {/* 4개까지만 보이기 */}
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
              <div className={styles.upload_image}></div>
            </div>
            <div className={styles.post_contents}>
             {data.content}
            </div>
            <div className={styles.comments}>
              <button className={styles.like_btn} onClick={onClickHeartBtn}>
                {data.is_liked ? 
                <img src={FillHeart} alt='heart' className={styles.icon}/>
                :
                <img src={Heart} alt='heart' className={styles.icon}/>
              }
                <div className={styles.likes}>관심 <span>{data.like_cnt}</span></div>
              </button>
              <button>
                <Link to="/post">댓글 {data.comments.length}</Link>
              </button>
            </div>
          </div>
        )

      }
      
    </Link>
  )
}


export default Post;