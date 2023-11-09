import { useState } from "react";
import style from "./UserProfile.module.css";

const UserProfile = () => {
    const [nickname, setNickname] = useState('닉네임');
    const [userPrefer, setUserPrefer] = useState('등급(온도)');

    return <div className={style.userProfile}>
        <div className={style.profileImg}></div>
        <div className={style.profileNickname}>
            <p>{nickname}</p>
            <p>{userPrefer}</p>
        </div>
    </div>
}

export default UserProfile;