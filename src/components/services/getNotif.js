/* import notif from 'components/notif.json'; */

export default function getNotif(user, notif){
    var notifs = {};
    for(var n of notif)
        if(n.user === user)
            notifs = n
            
    return notifs;
}