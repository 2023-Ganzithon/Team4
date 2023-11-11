import React from "react";
import { useLocation } from 'react-router-dom';
import PostContent from "./Content/PostContent";
import Comment from "./Comment/Comment";
import style from "./PostDetailPage.module.css";
import back from "../../assets/image/back_arrow.png";
import BuyBtn from "./Buy/BuyBtn";
import WriteComment from "./Comment/WriteComment";

const PostDetailPage = () => {
  /*
  const location = useLocation();
  const {id} = location.state;

  const getContent = async () => {
    try {
      const response = await fetch(`/groceries/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('[ERROR] 알수없는 이유로 오류가 발생했습니다.');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("[ERROR] 에러발생", error);
    }
  };
  */
  const postDummy = {
      "id": 1,
      "user": "hb3026@gmail.com",
      "title": "제목1",
      "content": "내용1",
      "unit": null,
      "location": "강서구",
      "price": 0,
      "created_at": "2023-11-09",
      "image": "http://127.0.0.1:8000/media/post_img/IMG_%ED%95%98%EB%8A%98%EB%B9%84%ED%96%89.jpg",
      "buy_time": null,
      "recruitment_num": null,
      "post_type": false,
      "is_completed": false,
      "comments": [
          {
              "id": 2,
              "post_id": 1,
              "user": "hb@gmail.com",
              "created_at": "2023-11-09",
              "content": "댓글 수정되니..?"
          }
      ],
      "like_cnt": 1
  };
  

  return <div className={style.wrapper}>
  <div className={style.header}>
    <div className={style.back}>
      <img src={back} alt="back"/>
    </div>
    <span>홈으로 가기</span>
  </div>
    <PostContent posts={postDummy}/>
    <Comment posts={postDummy}/>
    <BuyBtn />
    <WriteComment />
  </div>;
};

export default PostDetailPage;