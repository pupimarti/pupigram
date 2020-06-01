import React, { useState, useEffect, useContext } from "react";
import Notification from "components/Notification";
import getNotif from "components/services/getNotif";
import Loading from "components/Loading";
import NotifContext from 'components/Context/AppContext';
import setNotifV from "components/services/setNotif";
import getImgPost from "components/services/getImgPost";

export default function MobileNotif() {
    
  const [notif, setNotif] = useState('loading');

  
  const {notifs, setNotifs, posts} = useContext(NotifContext);
  useEffect(() => {
    if (notif === 'loading')
        setNotif(getNotif("default", notifs));
    else
      setNotifV(notif, true, notifs, setNotifs);
  }, [notif, notifs,setNotifs]);

  if (notif === 'loading') return <Loading />
    return (
        <div className="content-notifications-mobile">
        {notif &&
          notif.notif.map((n, i) => {
            var img = "";
            if(n.type === "like" || n.type === "comment"){
              img = getImgPost(n.post, posts);
            }
              return(
                <Notification
                    key={i}
                  type={n.type}
                  time={n.time}
                  post={n.post}
                  comment={n.comment}
                  img={img[0]}
                  user={n.user}
                />
            )}) }
        </div>
    )
}
