import React from "react";
import PostContent from "./Content/PostContent";
import Comment from "./Comment/Comment";
import style from "./PostDetailPage.module.css";
import back from "../../assets/image/back_arrow.png";
import BuyBtn from "./Buy/BuyBtn";
import WriteComment from "./Comment/WriteComment";

const PostDetailPage = () => {
  const getContent = async() => {
    const url = '/groceries/1';
    fetch(url, {
      method: 'GET',
      headers: {}
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('[ERROR] 알수없는 이유로 오류가 발생했습니다.');
      } 
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("[ERROR] 에러발생")
    });
  };

  return <div className={style.wrapper}>
  <div className={style.header}>
    <div className={style.back}>
      <img src={back} alt="back"/>
    </div>
    <span onClick={getContent}>홈으로 가기</span>
  </div>
    <PostContent />
    <Comment />
    <BuyBtn />
    <WriteComment />
  </div>;
};

export default PostDetailPage;