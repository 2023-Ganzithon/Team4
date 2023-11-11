import style from "./SocialCount.module.css";
import like from "../../../assets/image/like_icon.png";
import { useState } from "react";

const SocialCount = ({ posts }) => {
    const [islike, setIsLike] = useState(false);
    const likeHandler = () => {
        const comment = {
            "id": 9,
            "user": "hb@gmail.com",
            "post": 1
        }

        fetch(`/deliveries/<int:post_id>/like/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( comment )
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('서버 오류가 발생했습니다.');
          }
          return response.json();
        })
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    return <div className={style.socialContainer}>
        <div className={style.likeIcon}>
            <img src={like} alt="like"/>
        </div>
        <div className={style.countBox}>
            <span>관심</span>
            <span>{posts.like_cnt}</span>
        </div>
        <div className={style.countBox}>
            <span>댓글</span>
            <span>{posts.comments.length}</span>
        </div>
    </div>
};

export default SocialCount;