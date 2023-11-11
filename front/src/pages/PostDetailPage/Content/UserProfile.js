import { useState } from "react";
import style from "./UserProfile.module.css";

const UserProfile = ({posts}) => {
    return <div className={style.userProfile}>
        <div className={style.profileImg}></div>
        <div className={style.profileNickname}>
            <p>d{posts.user}</p>
        </div>
    </div>
}

export default UserProfile;