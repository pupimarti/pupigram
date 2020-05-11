import React from "react";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
import verify from "../../../img/verify.svg";
import account from "../../../img/account.svg";
import "./css.css";

export default function Comment(props) {
  return (
    <div className="content-comment-post-id center-post-id">
      <div className="content-user-post-id cpi">
        <Link to={"/" + props.user} className="content-img-username">
          {props.picture_user 
          ?<img
            className="img-account"
            src={props.picture_user}
            alt="profile_picture"
          />
          :<img
          className="default-img"
          src={account}
          alt="profile_picture"
        />
          }
        </Link>
        <p className="user-account">
          <Link to={"/" + props.user}>{props.user}</Link>{" "}
          {props.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
          &nbsp;
          <span>{props.comment}</span>
        </p>
      <p className="time-post">
        <ReactTimeAgo date={new Date(props.time)} locale="es" />
      </p>
      </div>
    </div>
  );
}
