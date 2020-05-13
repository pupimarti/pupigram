import users from 'components/users.json';

export default function getUser(user){
    for(var u of users)
        if(u.user === user)
            return u;
    return null;
}