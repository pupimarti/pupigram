import React, {useContext} from "react";
import direct from "img/direct.svg";
import directSelect from '../direct-select.svg';
import { Link } from "react-router-dom";
import getDirectsUnread from "components/services/getDirectsUnread";

import context from 'components/Context/AppContext';

import './css.css';

export default function DirectsIcon(props) {

  const {directs} = useContext(context);

  const messages = getDirectsUnread("default", directs);


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
