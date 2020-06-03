import React, {useState, useEffect} from "react";

import account from "img/account.svg";
import ReactTimeAgo from "react-time-ago";

import "./css.css";
import Loading from "components/Loading";
import getImgUser from "components/services/getImgUser";

export default function Direct(props) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user){
      const get_user = async () => {
        const u = await getImgUser(props.user);
        setUser(u);
      }
      get_user();
    }
  }, [props.user, user, setUser]);

  if(!user) return <Loading />

  return (
    <div
      onClick={() => {
        props.onClick({
            user: props.user,
            verify: user.verify,
            picture: user.picture
        });
      }}
      className={props.read ? "content-direct" : "content-direct unread"}
    >
      <div to={"/" + props.user} className="content-img-username">
        {user ? (
          <img
            className="img-account"
            src={user}
            alt="profile_picture"
          />
        ) : (
          <img className="default-img" src={account} alt="profile_picture" />
        )}
      </div>
      <div className="direct-message-time">
        <div className="direct-user">
          <p>{props.user}</p>
          {" "}
        </div>
        <p className="direct-message">
          {props.message.length > 30
          ? props.message.substring(0, 30) + "..."
          : props.message} •
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
      <div className={props.read ? "invisible" : "direct-unread"}></div>
    </div>
  );
}
