import React from "react";
import verify from "img/verify.svg";
import account from "img/account.svg";

import "./css.css";
import deleteImgUserStorage from "components/services/deleteImgUserStorage";

export default function User(props) {

  var select = false;
  if(props.select !== null){
    if(props.select.user === props.user)
      select = true;
  }

  return (
    <div
      onClick={() => {
        props.onClick({user: props.user, picture:props.picture, verify:props.verify});
      }}
      className="content-new-direct-user"
    >
      <div className="content-img-username">
        {props.picture ? (
          <img
            className="img-account"
            src={props.picture}
            alt="profile_picture"
            onError={() => deleteImgUserStorage(props.user)}
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
      <div className={select ? "new-direct-select true" : "new-direct-select"}>
          {select &&
            <div id="tick-mark"></div>
          }
      </div>
    </div>
  );
}
