import users from 'components/users-min.json';

export default function getUserMin(user){
    for(var u of users)
        if(u.user === user)
            return u;
    return null;
}