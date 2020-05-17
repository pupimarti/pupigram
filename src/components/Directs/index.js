import React, {useState, useEffect, useContext} from 'react';
import getDirects from 'components/services/getDirects';
import Loading from 'components/Loading';
import NoPage from 'components/NoPage';
import Direct from './Direct';
import newMessage from './newmessage.svg';
import Chat from './Chat';

import './css.css';

import getUserMin from 'components/services/getUserMin';

import Context from 'components/Context/AppContext';
import setDirectsRead from 'components/services/setDirectsUnread';

export default function Directs() {

  const [data, setData] = useState("loading");

  const [viewDirect, setViewDirect] = useState(null);

  const {directs, setDirects} = useContext(Context);

  const handleSetViewDirect = (user, messages) => {
      if(user === null)
          setViewDirect(null);
      else{
        setViewDirect({user, messages});
        setDirectsRead("default", user.user, directs, setDirects);
    }
  }

  useEffect(() => {
      if(data === 'loading'){
        const directs_ = getDirects("default", directs);
        setData(directs_.directs);
      }
  }, [data,directs]);

  if (data === "loading") return <Loading />;

  if (data === null) return <NoPage />;

    return (
        <div className="content-directs">
            <div className={viewDirect === null ? "content-list-directs" : "content-list-directs viewdirect"}>
                <header className="content-directs-header">
                    <div className="directs-header">
                        <h5>Direct</h5>
                        <img className="icon" src={newMessage} alt="nuevo mensaje" />
                    </div>
                </header>
               <div className="content-directs-messages">
                    {data && data.map((d,i) => {
                        const user = getUserMin(d.user);
                        if(user !== null)
                            return(
                            <Direct
                            key={i}
                            user={user.user}
                            picture={user.picture}
                            verify={user.verify}
                            message={d.messages[0].message}
                            time={d.messages[0].time}
                            read={d.read}
                            onClick={handleSetViewDirect}
                            />
                            )
                    return null;
                    })}
               </div>
            </div>
            <Chat 
            direct={viewDirect}
            back={handleSetViewDirect}
            />
        </div>
    )
}
