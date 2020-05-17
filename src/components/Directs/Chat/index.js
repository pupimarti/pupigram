import React from "react";
import direct from "img/direct.svg";
import "./css.css";
import Comment from "components/Post/Comment";

export default function Chat(props) {
  console.log(props);
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
      </header>
      <div className="chat-content-messages">
        <div className="content-chat-message">
          <img
            className="chat-user-img"
            src={props.direct.user.picture}
            alt="user-img"
          />
          <div className="chat-message">{props.direct.messages}</div>
        </div>
      </div>
      <div className="chat-content-comment">
        <Comment message />
      </div>
    </div>
  );
}
