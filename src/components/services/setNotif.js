export default function setNotif(notif, value, notifs, setNotifsContext){
    var arr_notifs = notifs;
    for(var u of arr_notifs){
        if(u === notif){
            u.visualized = value;
            setNotifsContext(arr_notifs);
            return true;
        }
    }
    return false;
}