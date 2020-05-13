import React, {useState} from 'react';
import heart from "../../../img/heart.svg";
/* import { Link } from "react-router-dom"; */
import Notification from "components/Notification";
import './modal-notif.css';

export default function Notif(props) {
    const [open, setOpen] = useState(false);
    const handleSetModal = () => setOpen(!open);


    return (
      <div className="content-heart">
        <img className="icon" onClick={handleSetModal} src={heart} alt="Notif" />
        <div className={open ? "content-notif" : "invisible"}>
            <Notification />
            <Notification />
            <Notification />
        </div>
      </div>
    );
  }
  