export default function sendMessage(user, user_direct, message, directs, setDirectsContext){
    const arr_directs = directs;
    for(var u of arr_directs){
        if(u.user === user){
            for(var d of u.directs){
                if(d.user === user_direct){
                    d.messages.push({message, time:new Date()});
                    d.read = true;
                    setDirectsContext(arr_directs);
                    return true;
                }
            }
        }
    }
    return false;
}