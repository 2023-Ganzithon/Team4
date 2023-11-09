import { useState } from "react";
import style from "./BuyBtn.module.css";

const BuyBtn = () => {
    const [buy, setBuy] = useState(false);
    const buyHandler = () => {
        if(buy === false) {
            setBuy(true);
        } else {
            setBuy(false);
        }
    }
    const buyClear = buy ? style.btnContainerClear : style.btnContainer;
    return <div className={buyClear} onClick={buyHandler}>
        <span>구매하기</span>
    </div>
}

export default BuyBtn;