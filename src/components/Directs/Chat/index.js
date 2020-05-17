import React from "react";
import direct from "img/direct.svg";
import "./css.css";

export default function Chat(props) {
  if (props.user === null) {
    return (
      <div className="content-chat">
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
        <img className="chat-user-img" src={props.img} alt="user-img" />
        <p className="chat-user-name">{props.user}</p>
      </header>
    </div>
  );
}
