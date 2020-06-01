import React, {useState, useEffect} from "react";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
import verify from "img/verify.svg";
import account from "img/account.svg";
import "./css.css";
import getUserMin from "components/services/getUserMin";

export default function Comment(props) {

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
    <div className="content-comment-post-id center-post-id">
      <div className="content-user-post-id cpi">
        <Link to={"/" + props.user} className="content-img-username">
          {user && user.picture 
          ?<img
            className="img-account"
            src={user.picture}
            alt="profile_picture"
          />
          :<img
          className="default-img"
          src={account}
          alt="profile_picture"
        />
          }
        </Link>
        <p className="user-account">
          <Link to={"/" + props.user}>{props.user}</Link>{" "}
          {user && user.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
          &nbsp;
          <span>{props.comment}</span>
        </p>
      <p className="time-post">
        <ReactTimeAgo date={new Date(props.time)} locale="es" />
      </p>
      </div>
    </div>
  );
}
