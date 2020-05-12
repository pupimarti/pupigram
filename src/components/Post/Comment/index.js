import React, { useState, useEffect } from "react";
import "./css.css";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const [input, setInput] = useState(null);

  useEffect(() => {
      if(props.focus)
        input && input.focus();
  })

  const handleSend = () => {
    props.send(comment);
    setComment("");
  };

  return (
    <div className="comment-post">
      <div className="center-post content-comment">
        <input
          ref={(i) => {setInput(i)}}
          className="comment"
          value={comment}
          onChange={handleChangeComment}
          placeholder="Añade un comentario..."
        ></input>
        <button
          onClick={handleSend}
          disabled={comment.length <= 0}
          className={
            comment.length > 0 ? "action-comment" : "action-comment disabled"
          }
        >
          Publicar
        </button>
      </div>
    </div>
  );
}
