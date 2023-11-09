import style from "./SocialCount.module.css";
import like from "../../../assets/image/like_icon.png";
import { useState } from "react";

const SocialCount = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    return <div className={style.socialContainer}>
        <div className={style.likeIcon}>
            <img src={like} alt="like"/>
        </div>
        <div className={style.countBox}>
            <span>관심</span>
            <span>{likeCount}</span>
        </div>
        <div className={style.countBox}>
            <span>댓글</span>
            <span>{commentCount}</span>
        </div>
    </div>
};

export default SocialCount;