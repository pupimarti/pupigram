import React, {useState, useEffect} from "react";
import direct from "img/direct.svg";
import "./css.css";
import Comment from "components/Post/Comment";
import verify from "img/verify.svg";
import getChatUser from 'components/services/getChatUser';
import sendMessage from 'components/services/sendMessage';
import Loading from "components/Loading";
import {Link} from "react-router-dom";


export default function Chat(props) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if(props.direct !== null){
      const arr_msg = getChatUser("default", props.direct.user, props.directs);
      if(arr_msg === 'none'){
        props.addChat("default", props.direct.user);
        setMessages([]);
      }
      else
        setMessages(arr_msg);
    }
  }, [messages, props])

  const handleSendMessage = async message => {
    const chat = sendMessage("default", props.direct.user, message, props.directs, props.setDirects);
    if(chat)
      setMessages(null);
}


  if (props.direct === null) {
    return (
      <div className="content-chat pc">
        <div className="content-default">
          <div className="content-chat-default">
            <div className="content-chat-logo-default">
              <img className="chat-logo-default" src={direct} alt="Direct" />
            </div>
            <p className="chat-title-default">Tus mensajes</p>
            <p className="chat-desc-default">
              Envía fotos y mensajes privados a un amigo o grupo.
            </p>
            <button onClick={() => {props.setNewChat(true)}} className="button follow">Enviar mensaje</button>
          </div>
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
            setMessages(null);
            props.back(null);
          }}
        ></div>
        <Link className="content-header-chat" to={"/" + props.direct.user}>
          <img
            className="chat-user-img"
            src={props.direct.picture}
            alt="user-img"
          />
          <p className="chat-user-name">{props.direct.user}</p>
          {props.direct.verify && (
              <img className="verify" src={verify} alt="Verificado" />
            )}
        </Link>
      </header>
      <div className="chat-content-messages">
        {messages && messages.map((m,i) => (
          m.own 
          ?<div key={i} className="content-chat-message own">
            <div className="chat-message own">{m.message}</div>
          </div>
          :<div key={i} className="content-chat-message">
          <Link to={"/" + props.direct.user}>
            <img
              className="chat-user-img"
              src={props.direct.picture}
              alt="user-img"
            />
          </Link>
          <div className="chat-message">{m.message}</div>
        </div>
        ))}
      </div>
      {
        messages === null && 
        <Loading />
      }
      <div className="chat-content-comment">
        <Comment send={handleSendMessage} message />
      </div>
    </div>
  );
}
