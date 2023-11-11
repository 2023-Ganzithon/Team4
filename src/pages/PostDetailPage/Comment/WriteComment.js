import { useState } from "react";
import style from "./WriteComment.module.css";

const WriteComment = (props) => {
    const [commentInput, setCommentInput] = useState('');
    const inputHandler = (e) => {
        setCommentInput(e.target.value);
    }
    const handleCommentSubmit = () => {
        const comment = {
            content : commentInput
        }

        fetch(`/home/deliveries/${props.id}/comments/`, {
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
    
        setCommentInput('');
      };

    return <div className={style.commentInputBox}>
        <input type="text" 
        placeholder="댓글을 입력하세요."
        className={style.inputComment}
        value={commentInput}
        onChange={inputHandler}/>
        <button className={style.commentBtn}
        onClick={handleCommentSubmit}>등록</button>
    </div>
};

export default WriteComment;