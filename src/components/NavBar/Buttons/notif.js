import React, { useState, useEffect } from "react";
import heart from "img/heart.svg";
import heartSelect from "img/heart-selected.svg";
import Notification from "components/Notification";
import getUserMin from "components/services/getUserMin";
import getNotif from "components/services/getNotif";
import { Link } from "react-router-dom";

import "./modal-notif.css";
import Loading from "components/Loading";

export default function Notif(props) {
  const [open, setOpen] = useState(false);
  const handleSetModal = () => setOpen(!open);

  const [notif, setNotif] = useState('loading');

  const user = props.user;

  useEffect(() => {
    if (notif === 'loading') setNotif(getNotif(user));
  }, [notif, user]);

  if(notif === 'loading') return <Loading />
  return (
    <div className="content-heart">
      {props.path === "/notifications" ? (
        <img
          className="icon mobile notif-select"
          src={heartSelect}
          alt="Notifications"
        />
      ) : (
        <Link to="/notifications" className="mobile">
          <img className="icon mobile" src={heart} alt="Notifications" />
        </Link>
      )}
      <img
        className={open ? "notif-select icon pc" : "icon pc"}
        onClick={handleSetModal}
        src={open ? heartSelect : heart}
        alt="Notif"
      />
      <div className={open ? "content-notif" : "invisible"}>
        {notif &&
          notif.map((n, i) => {
            return (
              <React.Fragment key={i}>
                {i > 0 && <div className="divisor-notif"></div>}
                <Notification
                  type={n.type}
                  time={n.time}
                  user={getUserMin(n.user)}
                />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
