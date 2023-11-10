import React from "react";
import PostContent from "./Content/PostContent";
import Comment from "./Comment/Comment";
import style from "./PostDetailPage.module.css";
import back from "../../assets/image/back_arrow.png";
import BuyBtn from "./Buy/BuyBtn";
import WriteComment from "./Comment/WriteComment";

const PostDetailPage = () => {
  const getContent = async() => {};

  return <div className={style.wrapper}>
  <div className={style.header}>
    <div className={style.back}>
      <img src={back} alt="back"/>
    </div>
    <span>홈으로 가기</span>
  </div>
    <PostContent />
    <Comment />
    <BuyBtn />
    <WriteComment />
  </div>;
};

export default PostDetailPage;