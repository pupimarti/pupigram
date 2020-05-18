export default function addDirectChat(user, user_direct, directs, setDirectsContext){
    const arr_directs = directs;
    for(var u of arr_directs){
        if(u.user === user){
            u.directs.push({
                "user":user_direct,
                "read":true,
                "messages":[]
            })
            setDirectsContext(arr_directs);
            console.log(arr_directs);
            return true;
        }
    }
    return false;
}