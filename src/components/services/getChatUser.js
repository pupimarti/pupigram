export default function getChatUser(user, user_follow, directs){
    for(var u of directs){
        if(u.user === user){
            for(var d of u.directs){
                if(d.user === user_follow){
                    return d.messages;
                }
            }
            return 'none';
        }
    }
    return null;
}