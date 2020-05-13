import React, { useState, useEffect } from "react";
import Notification from "components/Notification";
import getUserMin from "components/services/getUserMin";
import getNotif from "components/services/getNotif";


export default function MobileNotif() {
    
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    if (notif === null) setNotif(getNotif("default"));
  }, [notif]);

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
