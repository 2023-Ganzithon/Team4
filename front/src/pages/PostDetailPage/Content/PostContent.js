import style from './PostContent.module.css';
import UserProfile from './UserProfile';
import PostBody from './PostBody';
import SocialCount from './SocialCount';

const PostContent = () => {
    return <div className={style.container}>
        <UserProfile />
        <PostBody />
        <SocialCount />
    </div>;
};

export default PostContent;