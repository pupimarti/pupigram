import React, { useState } from 'react'
import './css.css';

export default function Comment() {
    const [comment, setComment] = useState('')
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }
    return (
        <div className="comment-post">
                <div className="center-post content-comment">
                    <input className="comment" value={comment} onChange={handleChangeComment} placeholder="Añade un comentario..."></input>
                    <button disabled={comment.length > 0} className={comment.length > 0 ? "action-comment" : "action-comment disabled"}>Publicar</button>
                </div>
            </div>
    )
}
