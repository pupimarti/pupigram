import React from "react";

import verify from "img/verify.svg";
import account from "img/account.svg";
import ReactTimeAgo from "react-time-ago";

import "./css.css";

export default function Direct(props) {
  return (
    <div
      onClick={() => {
        props.onClick({
            user: props.user,
            verify: props.verify,
            picture: props.picture
        });
      }}
      className={props.read ? "content-direct" : "content-direct unread"}
    >
      <div to={"/" + props.user} className="content-img-username">
        {props.picture ? (
          <img
            className="img-account"
            src={props.picture}
            alt="profile_picture"
          />
        ) : (
          <img className="default-img" src={account} alt="profile_picture" />
        )}
      </div>
      <div className="direct-message-time">
        <div className="direct-user">
          <p>{props.user}</p>
          {props.verify && " " && (
            <img className="verify-directs" src={verify} alt="Verificado" />
          )}{" "}
        </div>
        <p className="direct-message">
          {props.message.length > 30
          ? props.message.substring(0, 30) + "..."
          : props.message} •
          <span className="time-notif">
            {" "}
            {props.time && (
              <ReactTimeAgo
                date={new Date(props.time)}
                timeStyle="twitter"
                locale="es"
              />
            )}
          </span>
        </p>
      </div>
      <div className={props.read ? "invisible" : "direct-unread"}></div>
    </div>
  );
}
