import React, {useState, useEffect, useContext} from 'react';

import './css.css';
import getUser from 'components/services/getUser';
import userContext from 'components/Context/AppContext';
import User from './User';
import getImgUser from 'components/services/getImgUser';

export default function New(props) {

    const {users} = useContext(userContext);

    const [follows, setFollows] = useState(null);

    const [select, setSelect] = useState(null);

    useEffect(() => {
        if(follows === null){
            const user = getUser(props.user, users);
            if(user !== null){
                setFollows(user.follows);
            }
        }
    }, [follows, props,users])

    const handleSelect = () => {
        if(select !== null){
            props.setViewDirect(select);
            props.setNewChat(false);
        }
    }
    
    return (
        <div className="content-new-chat">
        <header className="content-directs-header">
          <div onClick={() => props.setNewChat(false)} className="chat-back"></div>
          <h5>Nuevo mensaje</h5>
          <button onClick={handleSelect} className="action-comment">Siguiente</button>
        </header>
        {follows && follows.map((u,i) => {
            const user = getImgUser(u);
            return(
            <User 
                key={i}
                user={u}
                picture={user}
                verify={false}
                onClick={setSelect}
                select={select}
            />)
        })}
        </div>
    )
}
