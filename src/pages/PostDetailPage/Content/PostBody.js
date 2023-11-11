import { useState } from "react";
import style from "./PostBody.module.css";
import moreBtn from "../../../assets/image/more_icon.png";
import price from "../../../assets/image/price_tag_icon.png";
import map from "../../../assets/image/map_icon.png"
import timer from "../../../assets/image/timer_icon.png"

const PostBody = ({posts}) => {
    const [clickMore, setClickMore] = useState(false);
    const [type, setType] = useState("팔아요");
    const [priceInfo, setPriceInfo] = useState("3000원");
    const [timeInfo, setTimeInfo] = useState("하루 전 구매");

    const moreHandler = () => {
        setClickMore(!clickMore);
    };

    return <div className={style.postContainer}>
        <div className={style.postHeader}>
        <div className={style.title}>
            <span>{posts.title}</span>
        </div>
            <div className={style.rightHeader}>
                <span className={style.uploadTime}>
                    {posts.created_at}
                </span>
                <div className={style.moreBtn} onClick={moreHandler}>
                    <img src={moreBtn} alt="more"/>
                </div>
            </div>
        </div>
        {clickMore && <div className={style.moreContainer}>
            <div className={style.edit}>
                <span>수정</span>
            </div>
            <div className={style.delete}>
                <span>삭제</span>
            </div>
        </div>}

        <div className={style.sell}>
            <span>{type}</span>
        </div>

        <div className={style.informationBox}>
            <div className={style.information}>
                <img src={price} alt="price"/>
                <span className={style.infoText}>{priceInfo}</span>
            </div>
            <div className={style.information}>
                <img src={map} alt="map"/>
                <span className={style.infoText}>{posts.location}</span>
            </div>
            <div className={style.information}>
                <img src={timer} alt="timer"/>
                <span className={style.infoText}>{timeInfo}</span>
            </div>
        </div>

        <div className={style.phothoBox}>
            <div className={style.img}></div>
            <div className={style.img}></div>
            <div className={style.img}></div>
        </div>

        <div className={style.textBox}>
            <span>{posts.content}</span>
        </div>
    </div>
};

export default PostBody;