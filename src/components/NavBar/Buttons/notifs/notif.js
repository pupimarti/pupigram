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
  const {notifs, setNotifs} = useContext(NotifContext);

  const [open, setOpen] = useState(false);
  const handleSetModal = () => {
    setNotifV(notif, true, notifs, setNotifs);
    setNotif('loading');
    setOpen(!open)
  };


  const [notif, setNotif] = useState(null);

  const user = props.user;

  useEffect(() => {
    const get_notifs = async () => {
      const _notifs = await getNotif(user);
      if(_notifs){
        await asyncForEach(_notifs.notifs, async (n) => {
          if (n.type === "like" || n.type === "comment") {
            n.img = await getImgPost(n.post);
          }
        });
      }
      setNotif(_notifs);
    };

    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    if (notif === 'loading') get_notifs();
  }, [notif, user]);

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
          notif.notifs.map((n, i) => {
            return (
              <React.Fragment key={i}>
                {i > 0 && <div className="divisor-notif"></div>}
                <Notification
                  type={n.type}
                  time={n.time.toDate()}
                  post={n.post}
                  comment={n.comment}
                  img={n.img}
                  user={n.user_send}
                />
              </React.Fragment>
            );
          }))}
      </div>}
    </div>
  );
}
