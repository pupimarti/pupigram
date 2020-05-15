import React, {useState} from 'react';
import users_json from 'components/users.json';
import notif_json from 'components/notif.json';
import posts_json from 'components/posts.json';

const Context = React.createContext ({});

export function AppContextProvider({children}){
    const [users, setUsers] = useState(users_json);
    const [notifs, setNotifs] = useState(notif_json);
    const [posts, setPosts] = useState(posts_json);
    return (
    <Context.Provider value={{users, setUsers, notifs, setNotifs, posts, setPosts}}>
        {children}
    </Context.Provider>
    );
}

export default Context;