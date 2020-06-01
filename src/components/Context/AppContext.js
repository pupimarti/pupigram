import React, {useState} from 'react';
import notif_json from 'DB/notif.json';
import posts_json from 'DB/posts.json';
import directs_json from 'DB/directs.json';

const Context = React.createContext ({});

export function AppContextProvider({children}){
    const [profile, setProfile] = useState(null);
    const [notifs, setNotifs] = useState(notif_json);
    const [posts, setPosts] = useState(posts_json);
    const [directs, setDirects] = useState(directs_json);
    return (
    <Context.Provider value={{profile, setProfile, notifs, setNotifs, posts, setPosts, directs, setDirects}}>
        {children}
    </Context.Provider>
    );
}

export default Context;