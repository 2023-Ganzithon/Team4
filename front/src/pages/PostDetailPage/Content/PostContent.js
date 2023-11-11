import style from './PostContent.module.css';
import UserProfile from './UserProfile';
import PostBody from './PostBody';
import SocialCount from './SocialCount';

const PostContent = ({ posts }) => {
    return <div className={style.container}>
        <UserProfile posts={ posts }/>
        <PostBody posts={ posts }/>
        <SocialCount posts={ posts }/>
    </div>;
};

export default PostContent;