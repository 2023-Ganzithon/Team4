import React from "react";
import PostContent from "./Content/PostContent";
import Comment from "./Comment/Comment";
import style from "./PostDetailPage.module.css";

const PostDetailPage = () => {
  return <div className={style.wrapper}>
  <div className={style.header}></div>
    <PostContent />
    <Comment />
  </div>;
};

export default PostDetailPage;
