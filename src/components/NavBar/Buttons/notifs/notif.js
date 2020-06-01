import React, { useState, useEffect, useContext } from "react";
import heart from "img/heart.svg";
import heartSelect from "img/heart-selected.svg";
import Notification from "components/Notification";
import getNotif from "components/services/getNotif";
import { Link } from "react-router-dom";
import NotifContext from 'components/Context/AppContext';
import Loading from "components/Loading";
import "./modal-notif.css";
import setNotifV from "components/services/setNotif";
import getImgPost from "components/services/getImgPost";

export default function Notif(props) {
  const {notifs, setNotifs, posts} = useContext(NotifContext);

  const [open, setOpen] = useState(false);
  const handleSetModal = () => {
    setNotifV(notif, true, notifs, setNotifs);
    setNotif('loading');
    setOpen(!open)
  };


  const [notif, setNotif] = useState(null);

  const user = props.user;

  useEffect(() => {
    if (notif === 'loading') setNotif(getNotif(user, notifs));
  }, [notif, user, notifs]);

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
          {notif && !notif.visualized &&
            <div className="notif-alert"></div>
          }
        </Link>
      )}
      <img
        className={open ? "notif-select icon pc" : "icon pc"}
        onClick={handleSetModal}
        src={open ? heartSelect : heart}
        alt="Notif"
      />
      {notif && !notif.visualized &&
            <div className="notif-alert pc"></div>
          }
      {open &&
      <div className="notif-triangulo"></div>}

      {open && <div className="content-notif pc">
        {notif === 'loading' ? <Loading />
        : (notif &&
          notif.notif.map((n, i) => {
            var img = "";
            if(n.type === "like" || n.type === "comment"){
              img = getImgPost(n.post, posts);
            }
            
            return (
              <React.Fragment key={i}>
                {i > 0 && <div className="divisor-notif"></div>}
                <Notification
                  type={n.type}
                  time={n.time}
                  post={n.post}
                  comment={n.comment}
                  img={img[0]}
                  user={n.user}
                />
              </React.Fragment>
            );
          }))}
      </div>}
    </div>
  );
}
