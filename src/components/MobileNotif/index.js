import React, { useState, useEffect, useContext } from "react";
import Notification from "components/Notification";
import getUserMin from "components/services/getUserMin";
import getNotif from "components/services/getNotif";
import Loading from "components/Loading";
import NotifContext from 'components/Context/AppContext';
import setNotifV from "components/services/setNotif";

export default function MobileNotif() {
    
  const [notif, setNotif] = useState('loading');

  
  const {notifs, setNotifs} = useContext(NotifContext);
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
          notif.notif.map((n, i) => 
                <Notification
                    key={i}
                  type={n.type}
                  time={n.time}
                  user={getUserMin(n.user)}
                />
            ) }
        </div>
    )
}
