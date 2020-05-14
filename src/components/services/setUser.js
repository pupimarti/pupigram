export default function setUser(user, users, setUsersContext){
    var arr_users = users;
    for(var u of arr_users){
        if(u === user){
            u = user;
            setUsersContext(arr_users);
            return true;
        }
    }
    return false;
}