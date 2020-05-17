import React from "react";
import direct from "img/direct.svg";
import directSelect from '../direct-select.svg';
import { Link } from "react-router-dom";
import getDirectsUnread from "components/services/getDirectsUnread";

import './css.css'

export default function directs(props) {

    const messages = getDirectsUnread("default");

  return (
    <div className={props.pc ? "content-icon-direct pc" : "content-icon-direct mobile"}>
        {messages > 0 &&
        <div className="icon-direct-unreads">
            {messages}
        </div>
        }
      {props.path === props.pathDirect ? (
        <img className="icon" src={directSelect} alt="Direct" />
      ) : (
        <Link to={props.pathDirect}>
          <img className="icon" src={direct} alt="Direct" />
        </Link>
      )}
    </div>
  );
};
