import React from "react";
import { Link } from "react-router-dom";
import account from "img/account.svg";
import verify from "img/verify.svg";
import ReactTimeAgo from "react-time-ago";
import ButtonFollow from 'components/ButtonFollow';
import "./css.css";

export default function Notification(props) {

  const getMessageNotification = () => {
    switch (props.type) {
      case "follow":
          return "ha comenzado a seguirte."
      case "like":
          return "le ha gustado tu foto."
      case "name":
        return ""
      default:
        return "no se ha detectado el tipo de notificación."
    }
  }

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
          {props.user.verify && " " && (
            <img className="verify" src={verify} alt="Verificado" />
          )}{" "}
          <span className="msj-notif">{getMessageNotification()}</span>
          <span className="time-notif">
            {" "}
            {props.time && 
            <ReactTimeAgo
              date={new Date(props.time)}
              timeStyle="twitter"
              locale="es"
            />}
          </span>
        </p>
      </div>
      {props.type === "like"
      ?<Link to={"/posts/" + props.post}><img src={props.img} className="img-notification" alt="imagen de la publicacion" /></Link>
      :<ButtonFollow user="default" user_follow={props.user.user} />
      }
    </div>
  );
}
