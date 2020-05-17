import React, {useState} from "react";
import direct from "img/direct.svg";
import "./css.css";
import Comment from "components/Post/Comment";
import verify from "img/verify.svg";

export default function Chat(props) {

  
  const [comments, setComments] = useState([]);

  const handleAddComment = comment => {
    setComments([...comments, comment]);
    props.send(props.direct.user.user, comment);
  }

  if (props.direct === null) {
    return (
      <div className="content-chat pc">
        <div className="content-chat-default">
          <div className="content-chat-logo-default">
            <img className="chat-logo-default" src={direct} alt="Direct" />
          </div>
          <p className="chat-title-default">Tus mensajes</p>
          <p className="chat-desc-default">
            Envía fotos y mensajes privados a un amigo o grupo.
          </p>
          <button className="button follow">Enviar mensaje</button>
        </div>
      </div>
    );
  }
  return (
    <div className="content-chat">
      <header className="content-header-chat">
        <div
          className="chat-back mobile"
          onClick={() => {
            props.back(null);
          }}
        ></div>
        <img
          className="chat-user-img"
          src={props.direct.user.picture}
          alt="user-img"
        />
        <p className="chat-user-name">{props.direct.user.user}</p>
        {props.direct.user.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
      </header>
      <div className="chat-content-messages">
        {props.direct.messages && props.direct.messages.map((m,i) => (
          <div key={i} className="content-chat-message">
          <img
            className="chat-user-img"
            src={props.direct.user.picture}
            alt="user-img"
          />
          <div className="chat-message">{m.message}</div>
        </div>
        ))}
        {comments && comments.map((m, i) => (
          <div key={i} className="content-chat-message own">
            <div className="chat-message own">{m}</div>
          </div>
        ))}
      </div>
      <div className="chat-content-comment">
        <Comment send={handleAddComment} message />
      </div>
    </div>
  );
}
