import React, { useState, useEffect, useContext } from "react";
import Notification from "components/Notification";
import getNotif from "components/services/getNotif";
import Loading from "components/Loading";
import NotifContext from "components/Context/AppContext";
import getImgPost from "components/services/getImgPost";

export default function MobileNotif() {
  const [notif, setNotif] = useState("loading");

  const { notifs, profile } = useContext(NotifContext);

  useEffect(() => {
    const get_notifs = async () => {
      const _notifs = await getNotif(profile.user);
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

    if (notif === "loading") get_notifs();
  }, [notif, notifs, profile.user]);

  if (notif === "loading") return <Loading />;
  return (
    <div className="content-notifications-mobile">
      {notif &&
        notif.notifs.map((n, i) => {
          return (
            <Notification
              key={i}
              type={n.type}
              time={n.time.toDate()}
              post={n.post}
              comment={n.comment}
              img={n.img}
              user={n.user_send}
            />
          );
        })}
    </div>
  );
}
