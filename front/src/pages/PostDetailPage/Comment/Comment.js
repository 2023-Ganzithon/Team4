import { useState } from "react";
import style from "./Comment.module.css";
import moreBtn from "../../../assets/image/more_icon.png";

const Comment = () => {
    const [nickname, setNickname] = useState('닉네임');
    const [uploadTime, setUploadTime] = useState("5분전");
    const [comment, setComment] = useState('맛있겠당');

    return <div className={style.commentWrapper}>
        <div className={style.commentBox}>
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <div className={style.userImg}></div>
                    <p>{nickname}</p>
                </div>

                <div className={style.rightHeader}>
                    <div className={style.time}>{uploadTime}</div>
                    <img src={moreBtn} alt="more"/>
                </div>
            </div>

            <div className={style.commentText}>
                <p>{comment}</p>
            </div>
        </div>
    </div>
};

export default Comment;