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
    if(comment.length > 0){
      props.send(comment);
      setComment("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      handleSend();
  }

  return (
    <div className="comment-post">
      <div className="center-post content-comment">
        <input
          ref={(i) => {setInput(i)}}
          className="comment"
          value={comment}
          onChange={handleChangeComment}
          onKeyDown={handleKeyDown}
          placeholder={props.message ? "Envía un mensaje..." : "Añade un comentario..."}
        ></input>
        <button
          onClick={handleSend}
          disabled={comment.length <= 0}
          className={
            comment.length > 0 ? "action-comment" : "action-comment disabled"
          }
        >
          {props.message ? "Enviar" : "Publicar"}
        </button>
      </div>
    </div>
  );
}
