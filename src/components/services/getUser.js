/* import users from 'components/users.json'; */

export default function getUser(user, usersContext){
    for(var u of usersContext)
        if(u.user === user){
            return u;
        }
    return null;
}