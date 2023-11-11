import { useState } from "react";
import style from "./Comment.module.css";
import moreBtn from "../../../assets/image/more_icon.png";

const Comment = ({posts}) => {
    const commentDummy = [
        {'id': 1, 
        "post_id": 1, 
        "user": "user3", 
        "created_at": "2023-11-09", 
        "content": "우와 댓글이다" },
        {'id': 2, 
        "post_id": 1, 
        "user": "user6", 
        "created_at": "2023-11-10", 
        "content": "댓글 두개지롱" },
        {'id': 3, 
        "post_id": 1, 
        "user": "user8", 
        "created_at": "2023-11-11", 
        "content": "댓글 세개지롱" },
    ];

    return <div className={style.commentWrapper}>
        {posts.comments.map((comment, index) => (
            <div key={comment.id} className={style.commentBox}>
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <div className={style.userImg}></div>
                    <p>{comment.user}</p>
                </div>

                <div className={style.rightHeader}>
                    <div className={style.time}>{comment.created_at}</div>
                    <img src={moreBtn} alt="more"/>
                </div>
            </div>

            <div className={style.commentText}>
                <p>{comment.content}</p>
            </div>
        </div>
        ))}
    </div>
};

export default Comment;