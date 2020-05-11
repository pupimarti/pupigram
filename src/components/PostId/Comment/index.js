import React from 'react';
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
import "./css.css";

export default function Comment(props) {
    return (
        <div className="content-comment-post-id center-post-id">
            <div className="content-user-post-id cpi">
              <Link to={"/" + props.user} className="content-img-username">
                <img
                  className="img-account"
                  src={props.picture_user}
                  alt="profile_picture"
                />
              </Link>
              <p className="user-account">
                <Link to={"/" + props.user}>{props.user}</Link>&nbsp;
                <span>{props.desc}</span>
              </p>
            </div>
              <p className="time-post">
                <ReactTimeAgo date={new Date(props.time)} locale="es" />
              </p>
          </div>
    )
}
