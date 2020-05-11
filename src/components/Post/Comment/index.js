import React, { useState } from 'react';
import './css.css';

export default function Comment(props) {
    const [comment, setComment] = useState('')
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    const handleSend = () => {
        props.send(comment);
    }
    return (
        <div className="comment-post">
                <div className="center-post content-comment">
                    <input className="comment" value={comment} onChange={handleChangeComment} placeholder="Añade un comentario..."></input>
                    <button onClick={handleSend} disabled={comment.length <= 0} className={comment.length > 0 ? "action-comment" : "action-comment disabled"}>Publicar</button>
                </div>
            </div>
    )
}
