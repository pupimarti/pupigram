import React, {useState} from 'react';
import users_json from 'components/users.json';

const Context = React.createContext ({});

export function AppContextProvider({children}){
    const [users, setUsers] = useState(users_json)
    return (
    <Context.Provider value={{users, setUsers}}>
        {children}
    </Context.Provider>
    );
}

export default Context;