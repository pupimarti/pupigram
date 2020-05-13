import React from "react";
import { Link } from "react-router-dom";
import account from "img/account.svg";
import verify from "img/verify.svg";
import ReactTimeAgo from "react-time-ago";
import "./css.css";

export default function Notification(props) {
  return (
    <div className="content-notification">
      <div className="notif">
        <Link to={"/" + props.user.user} className="content-img-username">
          {props.user.picture ? (
            <img
              className="img-account"
              src={props.user.picture}
              alt="profile_picture"
            />
          ) : (
            <img className="default-img" src={account} alt="profile_picture" />
          )}
        </Link>
        <p className="user-account">
          <Link to={"/" + props.user.user}>{props.user.user}</Link>
          {props.user.verify && 
            " " && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
          {" "}
          <span className="msj-notif">ha comenzado a seguirte.</span>
          <span className="time-notif">
            {" "}
            <ReactTimeAgo
              date={props.time ? new Date(props.time) : new Date("May 12 2020 23:02:41 GMT-0300")}
              timeStyle="twitter"
              locale="es"
            />
          </span>
        </p>
      </div>
      <button className="button follow">Seguir</button>
    </div>
  );
}
