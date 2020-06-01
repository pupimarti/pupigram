import React, {useState} from 'react';
import users_json from 'DB/users.json';
import notif_json from 'DB/notif.json';
import posts_json from 'DB/posts.json';
import directs_json from 'DB/directs.json';

const Context = React.createContext ({});

export function AppContextProvider({children}){
    const [profile, setProfile] = useState(null);
    const [users, setUsers] = useState(users_json);
    const [notifs, setNotifs] = useState(notif_json);
    const [posts, setPosts] = useState(posts_json);
    const [directs, setDirects] = useState(directs_json);
    return (
    <Context.Provider value={{profile, setProfile, users, setUsers, notifs, setNotifs, posts, setPosts, directs, setDirects}}>
        {children}
    </Context.Provider>
    );
}

export default Context;