import React from "react";
import { Link } from "react-router-dom";

import verify from "img/verify.svg";
import account from "img/account.svg";
import ReactTimeAgo from "react-time-ago";

import "./css.css";

export default function Direct(props) {
  return (
    <div className={props.read ? "content-direct" : "content-direct unread"}>
      <Link to={"/" + props.user} className="content-img-username">
        {props.picture ? (
          <img
            className="img-account"
            src={props.picture}
            alt="profile_picture"
          />
        ) : (
          <img className="default-img" src={account} alt="profile_picture" />
        )}
      </Link>
      <div className="direct-message-time">
        <p className="direct-user">
          <Link to={"/" + props.user}>{props.user}</Link>
          {props.verify && " " && (
            <img className="verify" src={verify} alt="Verificado" />
          )}{" "}
        </p>
        <p className="direct-message">
          {props.message} • 
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
