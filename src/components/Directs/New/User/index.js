import React from "react";
import verify from "img/verify.svg";
import account from "img/account.svg";

import "./css.css";

export default function User(props) {
  return (
    <div
      onClick={() => {
        props.onClick(props.user);
      }}
      className="content-new-direct-user"
    >
      <div className="content-img-username">
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
      <div className="direct-user">
          <p>{props.user}</p>
          {props.verify && " " && (
            <img className="verify-directs" src={verify} alt="Verificado" />
          )}{" "}
        </div>
      <div className={props.select ? "new-direct-select true" : "new-direct-select"}>
          {props.select &&
            <div id="tick-mark"></div>
          }
      </div>
    </div>
  );
}
