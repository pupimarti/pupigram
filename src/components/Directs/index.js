import React, {useState, useEffect} from 'react';
import getDirects from 'components/services/getDirects';
import Loading from 'components/Loading';
import NoPage from 'components/NoPage';
import Direct from './Direct';
import newMessage from './newmessage.svg';

import './css.css';
import getUserMin from 'components/services/getUserMin';

export default function Directs() {

  const [data, setData] = useState("loading");

  useEffect(() => {
      if(data === 'loading'){
        const directs = getDirects("default");
        setData(directs.directs);
      }
  }, [data]);

  if (data === "loading") return <Loading />;

  if (data === null) return <NoPage />;

    return (
        <div className="content-directs">
            <header className="content-directs-header">
                <div className="directs-header">
                    <h5>Direct</h5>
                    <img className="icon" src={newMessage} alt="nuevo mensaje" />
                </div>
            </header>
            {data && data.map((d,i) => {
                const user = getUserMin(d.user);
                return(
                <Direct
                key={i}
                user={user.user}
                picture={user.picture}
                verify={user.verify}
                message={d.messages[0].message}
                time={d.messages[0].time}
                read={d.read}
                />
                )
            })}
        </div>
    )
}
