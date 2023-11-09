import { useState } from "react";
import style from "./PostBody.module.css";
import moreBtn from "../../../assets/image/more_icon.png";
import price from "../../../assets/image/price_tag_icon.png";
import map from "../../../assets/image/map_icon.png"
import timer from "../../../assets/image/timer_icon.png"

const PostBody = () => {
    const [title, setTitle] = useState("제목입니다 제목입니다 제목입니다 제목입니다!");
    const [uploadTime, setUploadTime] = useState("5분전");
    const [clickMore, setClickMore] = useState(false);
    const [priceInfo, setPriceInfo] = useState("3000원");
    const [mapInfo, setMapInfo] = useState("공릉2동");
    const [timeInfo, setTimeInfo] = useState("하루 전 구매");
    const [infoText, setInfoText] = useState("맛있는 포도 포도포도 포도포도 \n포도포도 포도포도 포도포도");

    return <div className={style.postContainer}>
        <div className={style.postHeader}>
        <div className={style.title}>
            <span>{title}</span>
        </div>
            <div className={style.rightHeader}>
                <span className={style.uploadTime}>
                    {uploadTime}
                </span>
                <div className={style.moreBtn}>
                    <img src={moreBtn} alt="more"/>
                </div>
            </div>
        </div>

        <div className={style.sell}></div>

        <div className={style.informationBox}>
            <div className={style.information}>
                <img src={price} alt="price"/>
                <span className={style.infoText}>{priceInfo}</span>
            </div>
            <div className={style.information}>
                <img src={map} alt="map"/>
                <span className={style.infoText}>{mapInfo}</span>
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
            <span>{infoText}</span>
        </div>
    </div>
};

export default PostBody;