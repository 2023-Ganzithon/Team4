import style from "./WriteComment.module.css";

const WriteComment = () => {
    return <div className={style.commentInputBox}>
        <input type="text" 
        placeholder="댓글을 입력하세요."
        className={style.inputComment}/>
        <button className={style.commentBtn}>등록</button>
    </div>
};

export default WriteComment;