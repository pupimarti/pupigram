import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import account from "img/account.svg";
import verify from "img/verify.svg";
import ReactTimeAgo from "react-time-ago";
import ButtonFollow from 'components/ButtonFollow';
import "./css.css";
import getUserMin from "components/services/getUserMin";

export default function Notification(props) {

  const getMessageNotification = () => {
    switch (props.type) {
      case "follow":
          return "ha comenzado a seguirte."
      case "like":
          return "le ha gustado tu foto."
      case "comment":
          return "ha comentado: " + props.comment
      case "name":
        return ""
      default:
        return "no se ha detectado el tipo de notificación."
    }
  }


  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user){
      const get_user = async () => {
        const u = await getUserMin(props.user);
        setUser(u);
      }
      get_user();
    }
  }, [props.user, user, setUser]);

  return (
    <div className="content-notification">
      <div className="notif">
        <Link to={"/" + props.user.user} className="content-img-username">
          {user && user.picture ? (
            <img
              className="img-account"
              src={user.picture}
              alt="profile_picture"
            />
          ) : (
            <img className="default-img" src={account} alt="profile_picture" />
          )}
        </Link>
        <p className="user-account">
          {props.type === "like" && 
        <span className="msj-notif">A </span>}
          <Link to={"/" + props.user.user}>{props.user.user}</Link>
          {props.user.verify && " " && (
            <img className="verify" src={verify} alt="Verificado" />
          )}{" "}
          <span className="msj-notif">{getMessageNotification()}</span>
          <span className="time-notif">
            {" "}
            {props.time && 
            <ReactTimeAgo
              date={new Date(props.time)}
              timeStyle="twitter"
              locale="es"
            />}
          </span>
        </p>
      </div>
      {props.type === "like" || props.type === "comment"
      ?<Link to={"/posts/" + props.post}><img src={props.img} className="img-notification" alt="imagen de la publicacion" /></Link>
      :<ButtonFollow user="default" user_follow={props.user.user} />
      }
    </div>
  );
}
