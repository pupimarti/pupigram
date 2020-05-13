import notif from 'components/notif.json';

export default function getNotif(user){
    var arr_notif = [];
    for(var n of notif)
        if(n.user === user)
            arr_notif = n.notif
            
    return arr_notif;
}