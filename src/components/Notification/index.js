import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import account from "img/account.svg";
import ReactTimeAgo from "react-time-ago";
import ButtonFollow from "components/ButtonFollow";
import "./css.css";
import getImgUser from "components/services/getImgUser";
import Context from "components/Context/AppContext";
import deleteImgUserStorage from "components/services/deleteImgUserStorage";

export default function Notification(props) {
  const getMessageNotification = () => {
    switch (props.type) {
      case "follow":
        return "ha comenzado a seguirte.";
      case "like":
        return "le ha gustado tu foto.";
      case "comment":
        return "ha comentado: " + props.comment;
      case "name":
        return "";
      default:
        return "no se ha detectado el tipo de notificación.";
    }
  };

  const { profile } = useContext(Context);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const get_user = async () => {
        const u = await getImgUser(props.user);
        setUser(u);
      };
      get_user();
    }
  }, [props.user, user, setUser]);

  return (
    <div className="content-notification">
      <div className="notif">
        <Link to={"/" + props.user} className="content-img-username">
          {user ? (
            <img
              className="img-account"
              src={user}
              alt="profile_picture"
              onError={() => deleteImgUserStorage(props.user)}
            />
          ) : (
            <img className="default-img" src={account} alt="profile_picture" />
          )}
        </Link>
        <p className="user-account">
          {props.type === "like" && <span className="msj-notif">A </span>}
          <Link to={"/" + props.user}>{props.user}</Link>{" "}
          <span className="msj-notif">{getMessageNotification()}</span>
          <span className="time-notif">
            {" "}
            {props.time && (
              <ReactTimeAgo
                date={new Date(props.time)}
                timeStyle="twitter"
                locale="es"
              />
            )}
          </span>
        </p>
      </div>
      {props.type === "like" || props.type === "comment" ? (
        <Link to={"/posts/" + props.post}>
          <img
            src={props.img}
            className="img-notification"
            alt="imagen de la publicacion"
          />
        </Link>
      ) : (
        <ButtonFollow user={profile.user} user_follow={props.user} />
      )}
    </div>
  );
}
