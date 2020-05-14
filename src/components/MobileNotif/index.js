import React, { useState, useEffect } from "react";
import Notification from "components/Notification";
import getUserMin from "components/services/getUserMin";
import getNotif from "components/services/getNotif";
import Loading from "components/Loading";


export default function MobileNotif() {
    
  const [notif, setNotif] = useState('loading');

  useEffect(() => {
    if (notif === 'loading')
        setNotif(getNotif("default"));
  }, [notif]);

  if (notif === 'loading') return <Loading />
    return (
        <div className="content-notifications-mobile">
        {notif &&
          notif.map((n, i) => 
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
