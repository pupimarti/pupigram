import React, {useState} from 'react';
import heart from "img/heart.svg";
import heartSelect from 'img/heart-selected.svg';
import Notification from "components/Notification";
import getUserMin from 'components/services/getUserMin';
import './modal-notif.css';

export default function Notif(props) {
    const [open, setOpen] = useState(false);
    const handleSetModal = () => setOpen(!open);
    
    return (
      <div className="content-heart">
        <img className={open ? "icon notif-select pc" : "icon pc"} onClick={handleSetModal} src={open ? heartSelect : heart} alt="Notif" />
        <div className={open ? "content-notif" : "invisible"}>
            <Notification user={getUserMin("leomessi")} />
            <Notification user={getUserMin("thisisbillgates")} />
        </div>
      </div>
    );
  }
  